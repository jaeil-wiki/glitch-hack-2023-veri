// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

    struct Subscription {
        uint expireBlockTimestamp;
        bool activated;
    }

    struct PostData {
        address owner;
        bytes32 head;

        bool isCanceled;
        bool isBountyPaid;
        bool isAdopted;

        uint256 bounty;
        uint due;

        uint totalSubscriber;
        uint totalVotes;
    }
contract Verificio {
    mapping(bytes32 => PostData) public posts;
    mapping(bytes32 => bytes32[]) public children;
    mapping(bytes32 => mapping(address => Subscription)) public subscriptions;
    mapping(bytes32 => mapping(address => bool)) public votes;

    function createCase(bytes32 postHash) external payable returns (bytes32) {
        require(msg.value > 1 ether, "too small bounty");
        bytes32 postId = keccak256(abi.encodePacked(msg.sender, postHash, block.number));
        require(posts[postId].owner == address(0), "post already exists");
        PostData memory new_post = PostData(msg.sender, bytes32(0), false, false, false, msg.value, block.timestamp + 3 days, 0, 0);
        posts[postId] = new_post;
        return postId;
    }

    function answerCase(bytes32 postHash, bytes32 headPostId) external payable returns (bytes32) {
        require(subscriptions[headPostId][msg.sender].expireBlockTimestamp > block.timestamp, "not subscribed");
        bytes32 postId = keccak256(abi.encodePacked(msg.sender, postHash, block.number));
        require(posts[postId].owner == address(0), "post already exists");
        PostData memory new_post = PostData(msg.sender, headPostId, false, false, false, msg.value, block.timestamp + 3 days, 0, 0);
        posts[postId] = new_post;
        children[headPostId].push(postId);
        return postId;
    }

    function isPostExists(bytes32 postId) public view returns (bool) {
        return posts[postId].owner != address(0);
    }

    function isSenderSubscriber(bytes32 postId) public view returns (bool) {
        return subscriptions[postId][msg.sender].activated;
    }

    function subscriberCount(bytes32 postId) public view returns (uint256) {
        if (!isPostExists(postId)) return 0;
        return posts[postId].totalSubscriber;
    }

    function subscriptionInfo(bytes32 postId) public view returns (bool, uint) {
        if (!isPostExists(postId)) return (false, 0);
        Subscription memory s = subscriptions[postId][msg.sender];
        return (s.activated, s.expireBlockTimestamp);
    }

    function subscribe(bytes32 postId) external payable returns (bool){
        require(!subscriptions[postId][msg.sender].activated, 'alreadyActivated');
        require(posts[postId].owner != address(0), "post not found");
        require(msg.value >= 10 ether, "too small bounty");
        Subscription memory s = subscriptions[postId][msg.sender];
        if (s.expireBlockTimestamp < block.timestamp) {
            if (s.expireBlockTimestamp == 0) {
                subscriptions[postId][msg.sender] = Subscription(block.timestamp + 7 days, true);
            } else {
                subscriptions[postId][msg.sender].activated = true;
                subscriptions[postId][msg.sender].expireBlockTimestamp = block.timestamp + 7 days;
            }
            posts[postId].totalSubscriber++;
        } // TODO: refund rest..
        return subscriptions[postId][msg.sender].activated;
    }

    function unsubscribe(bytes32 postId) external payable returns (bool) {
        require(posts[postId].owner != address(0), "post not found");
        subscriptions[postId][msg.sender].activated = false; // false will not renew subscription
        posts[postId].totalSubscriber--;
        return (subscriptions[postId][msg.sender].activated == false);
    }

    function vote(bytes32 postId) external returns (uint256){
        require(posts[postId].owner != address(0), "post not found");
        require(votes[postId][msg.sender] == false, "already voted");
        require(msg.sender == posts[postId].owner || subscriptions[postId][msg.sender].expireBlockTimestamp > block.timestamp, "not subscribed");

        votes[postId][msg.sender] = true;
        posts[postId].totalVotes++;

        return posts[postId].totalVotes;
    }

    function hadVote(bytes32 postId) external view returns (bool) {
        if (!isPostExists(postId)) return false;
        return (votes[postId][msg.sender] == true);
    }

    function totalVotes(bytes32 postId) external view returns (uint256) {
        if (!isPostExists(postId)) revert("post not found");
        return posts[postId].totalVotes;
    }

    function adopt(bytes32 bountyPostId) external payable {
        require(isPostExists(bountyPostId), "bountyPost not found");
        require(isPostExists(posts[bountyPostId].head), "headPost not found");
        PostData memory hp = posts[posts[bountyPostId].head];
        require(msg.sender == hp.owner, "not head owner");
        require(hp.bounty >= 10 ether, "bounty not exists");
        require(address(this).balance > hp.bounty, "not enough bounty balance");

        // TODO: fee logic. if needed
        payable(posts[bountyPostId].owner).transfer(hp.bounty);
        hp.bounty = 0;
        hp.isBountyPaid = true;
        posts[bountyPostId].isAdopted = true;
    }

    function owner(bytes32 postId) external view returns (address) {
        return posts[postId].owner;
    }

    function postInfo(bytes32 postId) external view returns (
        address owner, bytes32 head, bool isCanceled, bool isBountyPaid,
        bool isAdopted, uint256 bounty, uint due, uint totalSubscriber, uint totalVotes) {
        PostData memory p = posts[postId];
        return (p.owner, p.head, p.isCanceled, p.isBountyPaid, p.isAdopted, p.bounty, p.due, p.totalSubscriber, p.totalVotes);
    }

    fallback() external payable {}
}
