import {
    Avatar,
    Badge,
    Box,
    Center,
    Link,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../utils/colors";
import { useLocation } from "react-router-dom";
import ImageLoader from "./ImageLoader";
import UP from "../assets/icons/ic-up.png";
import Down from "../assets/icons/ic-down.png";

type RoomCardProps = {
    network: string;
    author: string;
    writtenAt: string;
    title: string;
    onClick?: () => void;
    closed?: boolean;
    href?: string;
};

const ClosedBadge = () => (
    <Box
        as={"span"}
        rounded={"sm"}
        color={useColorModeValue("gray.500", "gray.900")}
        bg={useColorModeValue("gray.100", "gray.600")}
        p={1}
        ml={2}>
        closed
    </Box>
);
export default function RoomCard(props: RoomCardProps) {
    return (
        <Center py={1.4}>
            <Link
                onClick={props.onClick}
                // href={`/rooms/${props.href ?? '#'}`}
                style={{ textDecoration: "none" }}>
                <Box
                    maxW={"451px"}
                    w={"full"}
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"1xl"}
                    rounded={"12px"}
                    border={`1px solid ${COLORS.gray_b5}`}
                    px={6}
                    pt={4}
                    pb={"80px"}
                    overflow={"hidden"}>
                    <Stack>
                        <Stack
                            mb={2}
                            direction={"row"}
                            spacing={4}
                            align={"center"}>
                            <Avatar
                                src={`https://avatars0.githubusercontent.com/u/${Math.ceil(
                                    Math.random() * 10000
                                )}?v=4`}
                            />
                            <Stack
                                direction={"column"}
                                spacing={0}
                                fontSize={"sm"}
                                fontWeight={"600"}>
                                <Text fontWeight={600}>{props.author}</Text>
                            </Stack>
                            <Spacer></Spacer>
                            <Stack
                                direction={"column"}
                                spacing={1}
                                fontSize={"sm"}>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Badge
                                    bg={"transparent"}
                                    color={"red"}
                                    border={"1px solid red"}
                                    px={2}
                                    rounded={"20px"}>
                                    BOUNTY: 111 BFC
                                </Badge>
                                <Box py={1}> </Box>
                            </Stack>
                        </Stack>
                        {/* <Text
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            {props.network}
                            {props.closed && <ClosedBadge/>}
                        </Text> */}
                        {/*<Heading*/}
                        {/*    color={useColorModeValue('gray.700', 'white')}*/}
                        {/*    fontSize={'2xl'}*/}
                        {/*    fontFamily={'body'}>*/}
                        {/*    {props.title}*/}
                        {/*</Heading>*/}
                        <Text
                            fontSize={"24px"}
                            color={"black"}
                            fontWeight={"700"}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum.
                        </Text>
                    </Stack>
                </Box>
                <Box
                    bg={COLORS.gray_f4}
                    w={"100%"}
                    h={"60px"}
                    mt={"-60px"}
                    px={6}
                    py={2}
                    borderRight={`1px solid ${COLORS.gray_b5}`}
                    borderLeft={`1px solid ${COLORS.gray_b5}`}
                    borderBottom={`1px solid ${COLORS.gray_b5}`}
                    style={{
                        borderBottomLeftRadius: "12px",
                        borderBottomRightRadius: "12px",
                    }}>
                    <SimpleGrid spacing={0} fontSize={"sm"}>
                        <Stack direction={"row"} alignItems={"center"}>
                            {props.href !== "4" ? (
                                <ImageLoader src={UP} w={12} h={17} />
                            ) : (
                                <ImageLoader src={Down} w={12} h={17} />
                            )}
                            <Text fontSize={"32px"} fontWeight={700}>
                                {" "}
                                300.00{" "}
                            </Text>
                            <Text fontSize={"14px"} fontWeight={400}>
                                {" "}
                                BFC{" "}
                            </Text>

                            <Spacer />

                            {props.href !== "4" ? (
                                <ImageLoader src={UP} w={12} h={17} />
                            ) : (
                                <ImageLoader src={Down} w={12} h={17} />
                            )}
                            <Text fontSize={"32px"} fontWeight={700}>
                                {" "}
                                50.00{" "}
                            </Text>
                            <Text fontSize={"14px"} fontWeight={400}>
                                {" "}
                                subscribers{" "}
                            </Text>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </Link>
        </Center>
    );
}
