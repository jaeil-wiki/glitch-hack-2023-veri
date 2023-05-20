import React from "react";
import NavBar from "../components/NavBar";
import { Avatar, Container, Spacer, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { COLORS } from "../utils/colors";
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
    background-color: ${(props) =>
        props.onSelected ? COLORS.blue_3 : COLORS.white};

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
            <NavBar />
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
                                            <SizedBox w={12} />

                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                BlackCow
                                            </Text>
                                        </Row>
                                        <div style={{ marginRight: "auto" }} />
                                        <BorderBadge color={COLORS.red}>
                                            <Text
                                                fontSize={"14px"}
                                                fontWeight={700}>
                                                Bounty 1000 BFC
                                            </Text>
                                        </BorderBadge>
                                        <div style={{ marginRight: "auto" }} />
                                        <Text
                                            color={COLORS.red}
                                            fontSize={"16px"}
                                            fontWeight={700}>
                                            Due Date: 05/20/2023
                                        </Text>
                                    </Row>

                                    <SizedBox h={14} />
                                    <Text
                                        fontSize={"24px"}
                                        lineHeight={"34px"}
                                        fontWeight={500}>
                                        $Klay when down to 15%, and it does not
                                        show on the project dashboard. Is this
                                        okay?
                                    </Text>
                                </BorderBackboard>
                            </SizedBox>
                            {/* 1 */}
                            <SizedBox h={24} />
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <ColorBorderBackboard
                                    bg={COLORS.gray_f9}
                                    bc={COLORS.blue_3}>
                                    <SizedBox w={"100%"} h={3}>
                                        <ColorBar color={COLORS.green} />
                                    </SizedBox>

                                    <SizedBox h={24} />
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
                                                <SizedBox w={12} />

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    Zachxbt
                                                </Text>
                                            </Row>
                                            <div
                                                style={{ marginRight: "auto" }}
                                            />
                                            <BorderBadge color={COLORS.green}>
                                                <Text
                                                    fontSize={"14px"}
                                                    fontWeight={700}>
                                                    Bounty Winner
                                                </Text>
                                            </BorderBadge>
                                            <div
                                                style={{ marginRight: "auto" }}
                                            />
                                            <Text
                                                color={COLORS.black}
                                                fontSize={"16px"}
                                                fontWeight={500}>
                                                05/20/2023
                                            </Text>
                                        </Row>

                                        <SizedBox h={14} />
                                        <Text
                                            fontSize={"32px"}
                                            lineHeight={"39px"}
                                            fontWeight={700}>
                                            Things you MUST know about FTX.
                                        </Text>

                                        <SizedBox h={14} />
                                        <Text
                                            fontSize={"24px"}
                                            lineHeight={"34px"}
                                            fontWeight={500}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            at eros luctus, egestas massa at,
                                            cursus ante. Morbi maximus feugiat
                                            justo, id viverra libero gravida eu.
                                            Pellentesque in lacinia dolor. Morbi
                                            nisi dolor, pretium a tincidunt et,
                                            rutrum vitae ligula. Sed semper
                                            maximus maximus. Aenean in dictum
                                            libero, vitae vestibulum enim. Donec
                                            mi massa, auctor quis eros at,
                                            sodales tincidunt lorem. Proin
                                            fringilla sollicitudin nibh
                                            dignissim condimentum.
                                        </Text>

                                        <SizedBox h={42} />
                                        <Row aCenter={true}>
                                            <ImageLoader
                                                h={32}
                                                w={34}
                                                src={Message}
                                            />

                                            <SizedBox w={10} />
                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                23 comments(s)
                                            </Text>

                                            <Spacer />
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
                                                <SizedBox w={10} />
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}>
                                                    {likeCount1}
                                                </Text>
                                                <SizedBox w={5} />
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
                            <SizedBox h={24} />
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <ColorBorderBackboard
                                    bg={COLORS.gray_f9}
                                    bc={COLORS.blue_3}>
                                    <SizedBox w={"100%"} h={3}>
                                        <ColorBar color={COLORS.yellow} />
                                    </SizedBox>

                                    <SizedBox h={24} />
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
                                                <SizedBox w={12} />

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    Aurora
                                                </Text>
                                            </Row>
                                            <div
                                                style={{ marginRight: "auto" }}
                                            />
                                            <Text
                                                color={COLORS.black}
                                                fontSize={"16px"}
                                                fontWeight={500}>
                                                05/20/2023
                                            </Text>
                                        </Row>

                                        <SizedBox h={14} />
                                        <Text
                                            fontSize={"32px"}
                                            lineHeight={"39px"}
                                            fontWeight={700}>
                                            Things you MUST know about FTX.
                                        </Text>

                                        <SizedBox h={14} />
                                        <Text
                                            fontSize={"24px"}
                                            lineHeight={"34px"}
                                            fontWeight={500}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            at eros luctus, egestas massa at,
                                            cursus ante. Morbi maximus feugiat
                                            justo, id viverra libero gravida eu.
                                            Pellentesque in lacinia dolor. Morbi
                                            nisi dolor, pretium a tincidunt et,
                                            rutrum vitae ligula. Sed semper
                                            maximus maximus. Aenean in dictum
                                            libero, vitae vestibulum enim. Donec
                                            mi massa, auctor quis eros at,
                                            sodales tincidunt lorem. Proin
                                            fringilla sollicitudin nibh
                                            dignissim condimentum.
                                        </Text>

                                        <SizedBox h={42} />
                                        <Row aCenter={true}>
                                            <ImageLoader
                                                h={32}
                                                w={34}
                                                src={Message}
                                            />

                                            <SizedBox w={10} />
                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                23 comments(s)
                                            </Text>

                                            <Spacer />
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
                                                <SizedBox w={10} />
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}>
                                                    {likeCount2}
                                                </Text>
                                                <SizedBox w={5} />
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
                            <SizedBox h={24} />
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <ColorBorderBackboard
                                    bg={COLORS.gray_f9}
                                    bc={COLORS.blue_3}>
                                    <SizedBox w={"100%"} h={3}>
                                        <ColorBar color={COLORS.red} />
                                    </SizedBox>

                                    <SizedBox h={24} />
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
                                                <SizedBox w={12} />

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    InvTaLive
                                                </Text>
                                            </Row>
                                            <div
                                                style={{ marginRight: "auto" }}
                                            />
                                            <Text
                                                color={COLORS.black}
                                                fontSize={"16px"}
                                                fontWeight={500}>
                                                05/20/2023
                                            </Text>
                                        </Row>

                                        <SizedBox h={14} />
                                        <Text
                                            fontSize={"32px"}
                                            lineHeight={"39px"}
                                            fontWeight={700}>
                                            Things you MUST know about FTX.
                                        </Text>

                                        <SizedBox h={14} />
                                        <Text
                                            fontSize={"24px"}
                                            lineHeight={"34px"}
                                            fontWeight={500}>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nullam
                                            at eros luctus, egestas massa at,
                                            cursus ante. Morbi maximus feugiat
                                            justo, id viverra libero gravida eu.
                                            Pellentesque in lacinia dolor. Morbi
                                            nisi dolor, pretium a tincidunt et,
                                            rutrum vitae ligula. Sed semper
                                            maximus maximus. Aenean in dictum
                                            libero, vitae vestibulum enim. Donec
                                            mi massa, auctor quis eros at,
                                            sodales tincidunt lorem. Proin
                                            fringilla sollicitudin nibh
                                            dignissim condimentum.
                                        </Text>

                                        <SizedBox h={42} />
                                        <Row aCenter={true}>
                                            <ImageLoader
                                                h={32}
                                                w={34}
                                                src={Message}
                                            />

                                            <SizedBox w={10} />
                                            <Text
                                                fontSize={"16px"}
                                                fontWeight={400}>
                                                23 comments(s)
                                            </Text>

                                            <Spacer />
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
                                                <SizedBox w={10} />
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}>
                                                    {likeCount3}
                                                </Text>
                                                <SizedBox w={5} />
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

                    <SizedBox w={21} />
                    <SizedBox w={"30%"}>
                        <Column fullWidth={true}>
                            <SizedBox w={"100%"} h={233}>
                                <BorderBackboard
                                    bg={COLORS.white}
                                    bc={COLORS.gray_b5}>
                                    <Column fullWidth={true} aCenter={true}>
                                        <SizedBox h={10} />
                                        <Text
                                            fontSize={"16px"}
                                            fontWeight={700}
                                            lineHeight={"100%"}>
                                            Community Bounty
                                        </Text>

                                        <SizedBox h={20} />
                                        <Row aCenter={true}>
                                            <Text
                                                fontSize={"48px"}
                                                fontWeight={700}
                                                lineHeight={"100%"}
                                                color={COLORS.blue_3}>
                                                200.00
                                            </Text>

                                            <SizedBox w={8} />
                                            <Text
                                                fontSize={"18px"}
                                                fontWeight={400}
                                                lineHeight={"100%"}
                                                color={COLORS.black}>
                                                BFC
                                            </Text>
                                        </Row>

                                        <SizedBox h={16} />
                                        <Row aCenter={true}>
                                            <Text
                                                fontSize={"48px"}
                                                fontWeight={700}
                                                lineHeight={"100%"}
                                                color={COLORS.blue_3}>
                                                50
                                            </Text>

                                            <SizedBox w={8} />
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

                            <SizedBox h={24} />
                            <SizedBox w={"100%"} h={"max-contents"}>
                                <BorderBackboard
                                    bg={COLORS.white}
                                    bc={COLORS.gray_b5}>
                                    <Column fullWidth={true} aCenter={true}>
                                        <SizedBox h={2} />
                                        <Text
                                            fontSize={"16px"}
                                            fontWeight={700}
                                            lineHeight={"100%"}>
                                            Community Bounty Voting Status
                                        </Text>

                                        <SizedBox h={15} />
                                        <Text
                                            fontSize={"48px"}
                                            fontWeight={700}
                                            lineHeight={"100%"}
                                            color={COLORS.blue_3}>
                                            200
                                        </Text>

                                        <SizedBox h={15} />
                                        <Text
                                            fontSize={"18px"}
                                            fontWeight={400}
                                            lineHeight={"100%"}
                                            color={COLORS.black}>
                                            SUBSCRIBERS
                                        </Text>

                                        <SizedBox h={30} />
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
                                                <SizedBox w={12} />

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    BlackCow
                                                </Text>

                                                <Spacer />
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}
                                                    color={COLORS.blue_3}>
                                                    50
                                                </Text>

                                                <SizedBox w={5} />
                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}
                                                    color={COLORS.black}>
                                                    votes
                                                </Text>
                                            </Row>
                                        </BoxBorderBackboard>

                                        <SizedBox h={16} />
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
                                                <SizedBox w={12} />

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    BlackCow
                                                </Text>

                                                <Spacer />
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}
                                                    color={COLORS.blue_3}>
                                                    50
                                                </Text>

                                                <SizedBox w={5} />
                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}
                                                    color={COLORS.black}>
                                                    votes
                                                </Text>
                                            </Row>
                                        </BoxBorderBackboard>

                                        <SizedBox h={16} />
                                        <BoxBorderBackboard color={COLORS.red}>
                                            <Row
                                                fullWidth={true}
                                                aCenter={true}>
                                                <Avatar
                                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                                        Math.random() * 10000
                                                    )}?v=4`}
                                                />
                                                <SizedBox w={12} />

                                                <Text
                                                    fontSize={"16px"}
                                                    fontWeight={400}>
                                                    BlackCow
                                                </Text>

                                                <Spacer />
                                                <Text
                                                    fontSize={"24px"}
                                                    fontWeight={700}
                                                    color={COLORS.blue_3}>
                                                    50
                                                </Text>

                                                <SizedBox w={5} />
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
