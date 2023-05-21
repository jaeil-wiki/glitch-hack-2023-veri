import React, { useState } from "react";
import NavBar from "../components/NavBar";
import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    Flex,
    Heading,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import { NETWORKS } from "../configs";
import { COLORS } from "../utils/colors";
import Tag from "../components/Tag";
import SubscribeModal from "../components/modals/SubscribeModal";

const NetworkFilterButton = (props: {
    network: string;
    colorScheme: string;
}) => (
    <Button
        py={1}
        px={3}
        rounded={40}
        fontWeight={500}
        borderColor={useColorModeValue(
            `${props.colorScheme}.400`,
            `${props.colorScheme}.700`
        )}
        borderWidth={"2px"}
        bg={useColorModeValue(`gray.100`, `gray.900`)}>
        <Box
            p={0}
            h={"26px"}
            lineHeight={"26px"}
            color={useColorModeValue("blue.800", "white")}>
            {props.network}
        </Box>
    </Button>
);

const OrderingButton = (props: { name: string; colorScheme: string }) => (
    <Button
        py={1}
        px={3}
        rounded={20}
        fontWeight={600}
        borderColor={useColorModeValue(
            `${props.colorScheme}.400`,
            `${props.colorScheme}.700`
        )}
        borderWidth={"2px"}
        bg={useColorModeValue(`gray.100`, `gray.900`)}>
        <Box
            p={0}
            h={"26px"}
            lineHeight={"26px"}
            color={useColorModeValue("blue.800", "white")}>
            {props.name}
        </Box>
    </Button>
);

const ORDERING_CHOICES = ["Subscripbers", "Bounty", "Invesitgators", "Lastest"];

function Home() {
    const [modal, setModal] = useState(false);
    const [netIndex, setNetIndex] = useState(0);

    return (
        <>
            {modal && <SubscribeModal onBackClick={() => setModal(false)}/>}
            <NavBar />
            <Container
                maxW={"10xl"}
                bg={useColorModeValue(COLORS.blue_2, COLORS.blue_2)}>
                <Stack
                    textAlign={"center"}
                    align={"center"}
                    spacing={{ base: 8, md: 12 }}
                    py={{ base: 16 }}>
                    <Heading
                        pr={4}
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
                        color={useColorModeValue(COLORS.white, COLORS.white)}
                        lineHeight={"110%"}>
                        Don't Trust,{" "}
                        <Text
                            as={"span"}
                            color={useColorModeValue("white", "white")}>
                            Verify.
                        </Text>
                    </Heading>
                </Stack>
            </Container>
            <Container
                maxW={"1440px"}
                bg={useColorModeValue(COLORS.white, COLORS.white)}
                pb={1}>
                <Box overflowX={"auto"} pb={1}>
                    <Flex>
                        <Stack direction={"row"} pt={4} px={1}>
                            {NETWORKS.map((n, i) => (
                                <Tag
                                    selected={i == netIndex}
                                    data={n.name}
                                    onClick={() => setNetIndex(i)}
                                />
                            ))}
                        </Stack>
                        <Spacer />
                        <Stack direction={"row"} pt={4} px={1}>
                            {ORDERING_CHOICES.map((o, i) => (
                                <Tag
                                    selected={false}
                                    data={o}
                                    onClick={() => {}}
                                />
                            ))}
                        </Stack>
                    </Flex>
                </Box>
                <Divider></Divider>
                <SimpleGrid
                    columns={useBreakpointValue({ base: 1, md: 2, lg: 3 })}
                    spacing={6}
                    pt={2}>
                    <RoomCard
                        network={"ETHEREUM"}
                        author={"Zach.XBT"}
                        writtenAt={"2022-05-13"}
                        title={"What was the Sui private round pricing?"}
                        href="1"
                        content={"What was the Sui private round pricing? I am digging for Sui protocol, need Weighted average of each round price...."}
                        price={"800.00"}
                        subscriber={"52"}
                        onClick={() => setModal(true)}
                    />
                    <RoomCard
                        network={"BIFROST"}
                        author={"BlackCow.eth"}
                        writtenAt={"2022-05-13"}
                        title={"Is Pepe really a community coin? Or just manipulated by Maket Making force?"}
                        href="2"
                        content={'Is Pepe really a community coin? Or just manipulated by Maket Making force? PePe is rising 1500% in a week and dumped to half.' }
                        price={"300.00"}
                        subscriber={"147"}
                        onClick={() => setModal(true)}
                    />
                    <RoomCard
                        network={"KLAYTN"}
                        author={"LookOnChain"}
                        writtenAt={"2022-05-13"}
                        title={"Abitrum and optimism truly competitor?"}
                        href="3"
                        content={'Abitrum and optimism truly competitor? ' }
                        price={"120.00"}
                        subscriber={"11"}
                        onClick={() => setModal(true)}
                    />
                    <RoomCard
                        network={"ETHEREUM"}
                        author={"HitBeat"}
                        writtenAt={"2022-05-13"}
                        title={""}
                        href="4"
                        content={'Is it true that polygon has 5 months of runway left?' }
                        price={"120.00"}
                        subscriber={"31"}
                        onClick={() => setModal(true)}
                    />
                </SimpleGrid>
            </Container>
        </>
    );
}

export default Home;
