// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Verificio.sol";

contract VerificioTest is Test {
    Verificio public v;

    function stringToBytes32(string memory source) public pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {return 0x0;}

        assembly {
            result := mload(add(source, 32))
        }
    }

    function setUp() public {
        vm.startBroadcast(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);
        v = new Verificio();
        vm.stopBroadcast();
    }

    function testCreateCase() public {
        console.log(address(v));
        bytes32 a = Verificio(v).createCase{value: 11 ether}(stringToBytes32("hello"));
        console.logBytes32(a);
    }


    function testAnswerCase() public {
        bytes32 headKey = v.createCase{value: 11 ether}(stringToBytes32("hello"));
        console.logBytes32(headKey);
        v.subscribe{value: 10 ether}(headKey);
        bytes32 answerKey = v.answerCase(stringToBytes32("pong"), headKey);
        console.logBytes32(answerKey);
        console.logBool(v.isPostExists(headKey));
        console.logBytes32(v.children(headKey, 0));
    }

    function testSubscribe() public {
        bytes32 postId = v.createCase{value: 11 ether}(stringToBytes32("hello"));
        console.log(v.isSenderSubscriber(postId));
        console.log(block.timestamp);
        bool subscribed = v.subscribe{value: 10 ether}(postId);
        console.log(subscribed);
        console.log(v.isSenderSubscriber(postId));
        (bool a, uint exp) = v.subscriptionInfo(postId);
        console.log(a, exp);
    }

    function testVote() public {
        bytes32 postId = Verificio(v).createCase{value: 11 ether}(stringToBytes32("hello"));
        console.log("before Vote hadVote(): ", Verificio(v).hadVote(postId));
        console.log("before Vote totalVote(): ",Verificio(v).totalVotes(postId));
        uint256 voteCount = v.vote(postId);
        console.log("after Vote hadVote(): ", Verificio(v).hadVote(postId));
        console.log("after Vote totalVote(): ", voteCount);
    }

    function testAdopt() public payable {
        console.log(msg.sender);
        address a = vm.addr(1);
        address b = vm.addr(2);

        payable(a).transfer(100 ether);
        payable(b).transfer(100 ether);

        console.log(a.balance);
        console.log(b.balance);
        console.log(address(v).balance);

        vm.startPrank(a);
        bytes32 headKey = v.createCase{value: 11 ether}(stringToBytes32("hello"));
        console.logBytes32(headKey);
        vm.stopPrank();

        vm.startPrank(b);
        v.subscribe{value: 10 ether}(headKey);
        bytes32 answerKey = v.answerCase(stringToBytes32("pong"), headKey);
        console.logBytes32(answerKey);
        vm.stopPrank();


        console.log(address(this).balance);


        vm.startPrank(a);
        v.adopt(answerKey);
        (address owner2, bytes32 head2, bool isCanceled2, bool isBountyPaid2,
        bool isAdopted2, uint256 bounty2, uint due2, uint totalSubscriber2, uint totalVotes2) = v.postInfo(headKey);
        console.log(bounty2, isBountyPaid2, address(v).balance);
        console.log(address(b).balance);
        vm.stopPrank();
    }

    fallback() external payable {
    }
}
