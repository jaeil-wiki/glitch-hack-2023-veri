import React from "react";
import NavBar from "../components/NavBar";
import {Avatar, Box, Container, Spacer, Text, Image} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {COLORS} from "../utils/colors";
import Row from "../components/Row";
import Column from "../components/Column";
import SizedBox from "../components/SizedBox";
import ImageLoader from "../components/ImageLoader";
import Message from "../assets/icons/ic-message.png";
import FillVote from "../assets/icons/ic-fill_vote.png";
import Vote from "../assets/icons/ic-vote.png";


type BorderBackboardProps = {
    bg: string;
    bc: string;
};

const BorderBackboard = styled.div<BorderBackboardProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 100%;
  height: 100%;

  background: ${(props) => props.bg};
  border: 1px solid ${(props) => props.bc};
  border-radius: 12px;
  padding: 24px;

  box-sizing: border-box;
`;

const ColorBar = styled.div`
  width: 100%;
  height: 100%;

  background: ${(props) => props.color};

  margin: 2px 10px 0px 10px;
  border-radius: 12px;
`;

const ColorBorderBackboard = styled.div<BorderBackboardProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 100%;
  height: 100%;

  background: ${(props) => props.bg};
  border-radius: 12px;
  padding-bottom: 24px;

  box-sizing: border-box;
`;

const BorderBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: max-content;
  height: max-content;

  padding: 4px 12px;
  box-sizing: border-box;

  border-radius: 12px;
  background: ${(props) =>
          props.color == COLORS.red ? COLORS.white : props.color};
  border: 1px solid ${(props) => props.color};
  color: ${(props) =>
          props.color !== COLORS.red ? COLORS.white : props.color};
`;

const LikeBtn = styled.div<{ onSelected: boolean }>`
  cursor: pointer;

  display: flex;
  direction: row;
  justify-content: center;
  align-items: center;

  width: 137px;
  height: 51px;

  border-radius: 16px;
  border: 1px solid ${COLORS.blue_3};
  background-color: ${(props) => props.onSelected ? COLORS.blue_3 : COLORS.white};
  color: ${(props) => (props.onSelected ? COLORS.white : COLORS.blue_3)};

  transition: all 0.3s;

  :hover {
    color: ${COLORS.white};
    background-color: ${COLORS.blue_3};
  }
`;

const BoxBorderBackboard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 82px;

  padding: 0px 24px 0px 24px;
  box-sizing: border-box;

  background: ${COLORS.gray_f9};
  border: 1px solid ${(props) => props.color};
`;

function Room() {
    const [likeCount1, setLikeCount1] = React.useState(57);
    const [likeAlready1, setLikeAlready1] = React.useState(false);
    const [likeCount2, setLikeCount2] = React.useState(43);
    const [likeAlready2, setLikeAlready2] = React.useState(false);
    const [likeCount3, setLikeCount3] = React.useState(32);
    const [likeAlready3, setLikeAlready3] = React.useState(false);

    const handleLike = (index: number) => {
        switch (index) {
            case 1:
                if (likeAlready1) {
                    setLikeCount1(likeCount1 - 1);
                } else {
                    setLikeCount1(likeCount1 + 1);
                }
                setLikeAlready1(!likeAlready1);
                break;
            case 2:
                if (likeAlready2) {
                    setLikeCount2(likeCount2 - 1);
                } else {
                    setLikeCount2(likeCount2 + 1);
                }
                setLikeAlready2(!likeAlready2);
                break;
            case 3:
                if (likeAlready3) {
                    setLikeCount3(likeCount3 - 1);
                } else {
                    setLikeCount3(likeCount3 + 1);
                }
                setLikeAlready3(!likeAlready3);
                break;
        }
    };

    return (
        <>
            <NavBar/>
            <Container maxW={"1440px"} py={3}>
                <Row fullWidth={true}>
                    <SizedBox w={"70%"}>
                        <Column fullWidth={true}>
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <BorderBackboard
                                    bg={COLORS.gray_f9}
                                    bc={COLORS.blue_3}>
                                    <Row fullWidth={true} aCenter={true}>
                                        <Row fullWidth={false} aCenter={true}>
                                            <Avatar
                                                src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                    Math.random() * 10000
                                                )}?v=4`}
                                            />
                                            <SizedBox w={12}/>

                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                BlackCow
                                            </Text>
                                        </Row>
                                        <div style={{marginRight: "auto"}}/>
                                        <BorderBadge color={COLORS.red}>
                                            <Text
                                                fontSize={"14px"}
                                                fontWeight={700}>
                                                Bounty 1000 BFC
                                            </Text>
                                        </BorderBadge>
                                        <div style={{marginRight: "auto"}}/>
                                        <Text
                                            color={COLORS.red}
                                            fontSize={"16px"}
                                            fontWeight={700}>
                                            Due Date: 05/20/2023
                                        </Text>
                                    </Row>
                                    <SizedBox h={14}/>
                                    <Text
                                        fontSize={"24px"}
                                        lineHeight={"34px"}
                                        fontWeight={500}>
                                        <Box>Is Pepe community coin? Or just manipulated by Maket Making force?</Box>
                                        <Box>PePe is rising 1500% in a week and dumped to half.</Box>
                                        <Box>these are frequent pattern of "brand-new" meme coin.</Box>
                                        <Box>However let's talk about "is. ths. NORMAL." lol.</Box>
                                    </Text>
                                </BorderBackboard>
                            </SizedBox>
                            {/* 1 */}
                            <SizedBox h={24}/>
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <ColorBorderBackboard
                                    bg={COLORS.gray_f9}
                                    bc={COLORS.blue_3}>
                                    <SizedBox w={"100%"} h={3}>
                                        <ColorBar color={COLORS.green}/>
                                    </SizedBox>
                                    <SizedBox h={24}/>
                                    <div
                                        style={{
                                            marginLeft: "24px",
                                            marginRight: "24px",
                                        }}>
                                        <Row fullWidth={true} aCenter={true}>
                                            <Row
                                                fullWidth={false}
                                                aCenter={true}>
                                                <Avatar
                                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                        Math.random() * 10000
                                                    )}?v=4`}
                                                />
                                                <SizedBox w={12}/>
                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    Zach.XBT
                                                </Text>
                                            </Row>
                                            <div
                                                style={{marginRight: "auto"}}
                                            />
                                            <BorderBadge color={COLORS.green}>
                                                <Text
                                                    fontSize={"14px"}
                                                    fontWeight={700}>
                                                    Bounty Winner
                                                </Text>
                                            </BorderBadge>
                                            <div
                                                style={{marginRight: "auto"}}
                                            />
                                            <Text
                                                color={COLORS.black}
                                                fontSize={"16px"}
                                                fontWeight={500}>
                                                05/20/2023
                                            </Text>
                                        </Row>
                                        <SizedBox h={14}/>
                                        <Text
                                            fontSize={"32px"}
                                            lineHeight={"39px"}
                                            fontWeight={700}>
                                            Yes, It's manipulated.
                                        </Text>

                                        <SizedBox h={14}/>
                                        <Text
                                            fontSize={"24px"}
                                            lineHeight={"34px"}
                                            fontWeight={500}>
                                            <Box>There are 50 different addresses holding over $1 Million of PEPE atm.</Box>
                                            <Box>Some of these, such as 0x9Cd below, spent over 6 figures on their positions (in this case, almost 250K).</Box>
                                            <Box>Others, such as 'dimethyltryptamine.eth', have been holding since their first buy, of $260.</Box>
                                            <Image src={'/img1.png'}></Image>
                                        </Text>

                                        <SizedBox h={42}/>
                                        <Row aCenter={true}>
                                            <ImageLoader
                                                h={32}
                                                w={34}
                                                src={Message}
                                            />

                                            <SizedBox w={10}/>
                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                23 comments(s)
                                            </Text>

                                            <Spacer/>
                                            <LikeBtn
                                                onSelected={likeAlready1}
                                                onClick={() => handleLike(1)}>
                                                {likeAlready1 ? (
                                                    <ImageLoader
                                                        w={15}
                                                        h={17}
                                                        src={FillVote}
                                                    />
                                                ) : (
                                                    <ImageLoader
                                                        w={15}
                                                        h={17}
                                                        src={Vote}
                                                    />
                                                )}
                                                <SizedBox w={10}/>
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}>
                                                    {likeCount1}
                                                </Text>
                                                <SizedBox w={5}/>
                                                <Text
                                                    fontSize={"14px"}
                                                    fontWeight={400}>
                                                    votes
                                                </Text>
                                            </LikeBtn>
                                        </Row>
                                    </div>
                                </ColorBorderBackboard>
                            </SizedBox>
                            {/* 2 */}
                            <SizedBox h={24}/>
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <ColorBorderBackboard
                                    bg={COLORS.gray_f9}
                                    bc={COLORS.blue_3}>
                                    <SizedBox w={"100%"} h={3}>
                                        <ColorBar color={COLORS.yellow}/>
                                    </SizedBox>

                                    <SizedBox h={24}/>
                                    <div
                                        style={{
                                            marginLeft: "24px",
                                            marginRight: "24px",
                                        }}>
                                        <Row fullWidth={true} aCenter={true}>
                                            <Row
                                                fullWidth={false}
                                                aCenter={true}>
                                                <Avatar
                                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                        Math.random() * 10000
                                                    )}?v=4`}
                                                />
                                                <SizedBox w={12}/>

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    Aurora
                                                </Text>
                                            </Row>
                                            <div
                                                style={{marginRight: "auto"}}
                                            />
                                            <Text
                                                color={COLORS.black}
                                                fontSize={"16px"}
                                                fontWeight={500}>
                                                05/20/2023
                                            </Text>
                                        </Row>

                                        <SizedBox h={14}/>
                                        <Text
                                            fontSize={"32px"}
                                            lineHeight={"39px"}
                                            fontWeight={700}>
                                            Deployer is "Abuser" definitely.
                                        </Text>

                                        <SizedBox h={14}/>
                                        <Text
                                            fontSize={"24px"}
                                            lineHeight={"34px"}
                                            fontWeight={500}>
                                            <Box>After liquidity was added, a number of different wallets bought at varying intervals afterwards.</Box>
                                            <Box>The first buyer was actually the PEPE deployer itself, purchasing 195B PEPE tokens for $2 of WETH.</Box>
                                            <Box>The Deployer wallet eventually sold these tokens 1 week later, after transferring to a different account.</Box>
                                            <Box>They received 22.94 ETH ($42.2K) from the $2 spent.</Box>
                                            <Box>Had they held onto them, these tokens would currently be worth $200K.</Box>
                                            <Image src={'/img2.jpeg'}></Image>
                                        </Text>

                                        <SizedBox h={42}/>
                                        <Row aCenter={true}>
                                            <ImageLoader
                                                h={32}
                                                w={34}
                                                src={Message}
                                            />

                                            <SizedBox w={10}/>
                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                23 comments(s)
                                            </Text>

                                            <Spacer/>
                                            <LikeBtn
                                                onSelected={likeAlready2}
                                                onClick={() => handleLike(2)}>
                                                {likeAlready2 ? (
                                                    <ImageLoader
                                                        w={15}
                                                        h={17}
                                                        src={FillVote}
                                                    />
                                                ) : (
                                                    <ImageLoader
                                                        w={15}
                                                        h={17}
                                                        src={Vote}
                                                    />
                                                )}
                                                <SizedBox w={10}/>
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}>
                                                    {likeCount2}
                                                </Text>
                                                <SizedBox w={5}/>
                                                <Text
                                                    fontSize={"14px"}
                                                    fontWeight={400}>
                                                    votes
                                                </Text>
                                            </LikeBtn>
                                        </Row>
                                    </div>
                                </ColorBorderBackboard>
                            </SizedBox>
                            {/* 3 */}
                            <SizedBox h={24}/>
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <ColorBorderBackboard
                                    bg={COLORS.gray_f9}
                                    bc={COLORS.blue_3}>
                                    <SizedBox w={"100%"} h={3}>
                                        <ColorBar color={COLORS.red}/>
                                    </SizedBox>

                                    <SizedBox h={24}/>
                                    <div
                                        style={{
                                            width: "100%",
                                            paddingLeft: "24px",
                                            paddingRight: "24px",
                                        }}>
                                        <Row fullWidth={true} aCenter={true}>
                                            <Row
                                                fullWidth={false}
                                                aCenter={true}>
                                                <Avatar
                                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                        Math.random() * 10000
                                                    )}?v=4`}
                                                />
                                                <SizedBox w={12}/>

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    InvTaLive
                                                </Text>
                                            </Row>
                                            <div
                                                style={{marginRight: "auto"}}
                                            />
                                            <Text
                                                color={COLORS.black}
                                                fontSize={"16px"}
                                                fontWeight={500}>
                                                05/20/2023
                                            </Text>
                                        </Row>

                                        <SizedBox h={14}/>
                                        <Text
                                            fontSize={"32px"}
                                            lineHeight={"39px"}
                                            fontWeight={700}>
                                            Pepe is hella SCAM
                                        </Text>

                                        <SizedBox h={14}/>
                                        <Text
                                            fontSize={"24px"}
                                            lineHeight={"34px"}
                                            fontWeight={500}>
                                            <Box>PEPE has no token utility or value support mechanism.</Box>
                                            <Box>Also, there are signs that certain insiders or team members were </Box>
                                            <Box>able to buy 7% of the total token supply minutes after TGE.</Box>
                                        </Text>

                                        <SizedBox h={42}/>
                                        <Row aCenter={true}>
                                            <ImageLoader
                                                h={32}
                                                w={34}
                                                src={Message}
                                            />

                                            <SizedBox w={10}/>
                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                23 comments(s)
                                            </Text>

                                            <Spacer/>
                                            <LikeBtn
                                                onSelected={likeAlready3}
                                                onClick={() => handleLike(3)}>
                                                {likeAlready3 ? (
                                                    <ImageLoader
                                                        w={15}
                                                        h={17}
                                                        src={FillVote}
                                                    />
                                                ) : (
                                                    <ImageLoader
                                                        w={15}
                                                        h={17}
                                                        src={Vote}
                                                    />
                                                )}
                                                <SizedBox w={10}/>
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}>
                                                    {likeCount3}
                                                </Text>
                                                <SizedBox w={5}/>
                                                <Text
                                                    fontSize={"14px"}
                                                    fontWeight={400}>
                                                    votes
                                                </Text>
                                            </LikeBtn>
                                        </Row>
                                    </div>
                                </ColorBorderBackboard>
                            </SizedBox>
                        </Column>
                    </SizedBox>

                    <SizedBox w={21}/>
                    <SizedBox w={"30%"}>
                        <Column fullWidth={true}>
                            <SizedBox w={"100%"} h={233}>
                                <BorderBackboard
                                    bg={COLORS.white}
                                    bc={COLORS.gray_b5}>
                                    <Column fullWidth={true} aCenter={true}>
                                        <SizedBox h={10}/>
                                        <Text
                                            fontSize={"16px"}
                                            fontWeight={700}
                                            lineHeight={"100%"}>
                                            Community Bounty
                                        </Text>
                                        <SizedBox h={20}/>
                                        <Row aCenter={true}>
                                            <Text
                                                fontSize={"48px"}
                                                fontWeight={700}
                                                lineHeight={"100%"}
                                                color={COLORS.blue_3}>
                                                5880.00
                                            </Text>
                                            <SizedBox w={8}/>
                                            <Text
                                                fontSize={"18px"}
                                                fontWeight={400}
                                                lineHeight={"100%"}
                                                color={COLORS.black}>
                                                BFC
                                            </Text>
                                        </Row>

                                        <SizedBox h={16}/>
                                        <Row aCenter={true}>
                                            <Text
                                                fontSize={"48px"}
                                                fontWeight={700}
                                                lineHeight={"100%"}
                                                color={COLORS.blue_3}>
                                                147
                                            </Text>

                                            <SizedBox w={8}/>
                                            <Text
                                                fontSize={"18px"}
                                                fontWeight={400}
                                                lineHeight={"100%"}
                                                color={COLORS.black}>
                                                SUBSCRIBERS
                                            </Text>
                                        </Row>
                                    </Column>
                                </BorderBackboard>
                            </SizedBox>

                            <SizedBox h={24}/>
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <BorderBackboard
                                    bg={COLORS.white}
                                    bc={COLORS.gray_b5}>
                                    <Column fullWidth={true} aCenter={true}>
                                        <SizedBox h={2}/>
                                        <Text
                                            fontSize={"16px"}
                                            fontWeight={700}
                                            lineHeight={"100%"}>
                                            Community Bounty Voting Status
                                        </Text>

                                        <SizedBox h={15}/>
                                        <Text
                                            fontSize={"48px"}
                                            fontWeight={700}
                                            lineHeight={"100%"}
                                            color={COLORS.blue_3}>
                                            132
                                        </Text>

                                        <SizedBox h={15}/>
                                        <Text
                                            fontSize={"18px"}
                                            fontWeight={400}
                                            lineHeight={"100%"}
                                            color={COLORS.black}>
                                            Total Number of Votes
                                        </Text>

                                        <SizedBox h={30}/>
                                        <BoxBorderBackboard
                                            color={COLORS.green}>
                                            <Row
                                                fullWidth={true}
                                                aCenter={true}>
                                                <Avatar
                                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                        Math.random() * 10000
                                                    )}?v=4`}
                                                />
                                                <SizedBox w={12}/>

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    BlackCow
                                                </Text>
                                                <Spacer/>
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}
                                                    color={COLORS.blue_3}>
                                                    57
                                                </Text>

                                                <SizedBox w={5}/>
                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}
                                                    color={COLORS.black}>
                                                    votes
                                                </Text>
                                            </Row>
                                        </BoxBorderBackboard>

                                        <SizedBox h={16}/>
                                        <BoxBorderBackboard
                                            color={COLORS.yellow}>
                                            <Row
                                                fullWidth={true}
                                                aCenter={true}>
                                                <Avatar
                                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                        Math.random() * 10000
                                                    )}?v=4`}
                                                />
                                                <SizedBox w={12}/>

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    Aurora
                                                </Text>

                                                <Spacer/>
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}
                                                    color={COLORS.blue_3}>
                                                    43
                                                </Text>

                                                <SizedBox w={5}/>
                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}
                                                    color={COLORS.black}>
                                                    votes
                                                </Text>
                                            </Row>
                                        </BoxBorderBackboard>

                                        <SizedBox h={16}/>
                                        <BoxBorderBackboard color={COLORS.red}>
                                            <Row
                                                fullWidth={true}
                                                aCenter={true}>
                                                <Avatar
                                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                        Math.random() * 10000
                                                    )}?v=4`}
                                                />
                                                <SizedBox w={12}/>

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    InvTaLive
                                                </Text>

                                                <Spacer/>
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}
                                                    color={COLORS.blue_3}>
                                                    32
                                                </Text>

                                                <SizedBox w={5}/>
                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}
                                                    color={COLORS.black}>
                                                    votes
                                                </Text>
                                            </Row>
                                        </BoxBorderBackboard>
                                    </Column>
                                </BorderBackboard>
                            </SizedBox>
                        </Column>
                    </SizedBox>
                </Row>
            </Container>
        </>
    );
}

export default Room;
