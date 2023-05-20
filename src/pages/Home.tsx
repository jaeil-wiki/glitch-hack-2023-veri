import React from 'react';
import NavBar from "../components/NavBar";
import {
    Box, Button,
    Checkbox,
    Container, Divider, Flex,
    Heading,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import {NETWORKS} from '../configs';

const NetworkFilterButton = (props: { network: string, colorScheme: string }) => (
    <Box py={'4px'} h={'38.73px'} px={3} rounded={20} fontWeight={500}
         bg={useColorModeValue(`gray.100`, `gray.700`)}>
        <Checkbox h={'30px'} colorScheme={'purple'} defaultChecked color={useColorModeValue('blue.800', 'white')}>{props.network}</Checkbox>
    </Box>
);

const OrderingButton = (props: { name: string, colorScheme: string }) => (
    <Button py={1} px={3} rounded={20} fontWeight={600}
         borderColor={useColorModeValue(`${props.colorScheme}.400`, `${props.colorScheme}.700`)}
         borderWidth={'2px'}
         bg={useColorModeValue(`gray.100`, `gray.900`)}>
        <Box p={0} h={'26px'} lineHeight={'26px'} color={useColorModeValue('blue.800', 'white')}>{props.name}</Box>
    </Button>
);

const ORDERING_CHOICES = ['Subscripbers', 'Bounty', 'Invesitgators', 'Lastest']

function Home() {
    return (
        <>
            <NavBar/>
            <Container maxW={'10xl'} bg={useColorModeValue('blue.700', 'blue.800')}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{base: 8, md: 12}}
                    py={{base: 16}}>
                    <Heading
                        pr={4}
                        fontWeight={600}
                        fontSize={{base: '3xl', sm: '4xl', md: '6xl'}}
                        color={useColorModeValue('orange.300', 'orange.400')}
                        lineHeight={'110%'}>
                        Do not Trust, {' '}
                        <Text as={'span'} color={useColorModeValue('white', 'white')}>
                            Verify.
                        </Text>
                    </Heading>
                </Stack>
            </Container>
            <Container maxW={'10xl'} bg={useColorModeValue('gray.100', 'gray.700')} pb={1}>
                <Box overflowX={'auto'} pb={1}>
                    <Flex>
                        <Stack direction={'row'} pt={4} px={1}>
                            {NETWORKS.map((n, i) => (
                                <NetworkFilterButton key={i} network={n.name}
                                                     colorScheme={n.colorScheme}></NetworkFilterButton>
                            ))}
                        </Stack>
                        <Spacer />
                        <Stack direction={'row'} pt={4} px={1}>
                            {ORDERING_CHOICES.map((o, i) => (
                                <OrderingButton key={i} name={o} colorScheme={'purple'}></OrderingButton>
                            ))}
                        </Stack>
                    </Flex>
                </Box>
                <Divider></Divider>
                <SimpleGrid columns={useBreakpointValue({base: 1, md: 2, lg: 3})} spacing={6} pt={2}>
                    <RoomCard network={'ETHEREUM'} author={'Zach.XBT'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'BIFROST'} author={'김덕상.eth'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'KLAYTN'} author={'LookOnChain'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'ETHEREUM'} author={'HitBeat'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                </SimpleGrid>
            </Container>
        </>
    );
}

export default Home;
