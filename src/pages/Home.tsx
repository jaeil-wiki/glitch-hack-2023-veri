import React from 'react';
import NavBar from "../components/NavBar";
import {
    Box,
    Checkbox,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
import {NETWORKS} from '../configs';

const NetworkFilterButton = (props: { network: string }) => (
    <Box py={1} px={3} rounded={'md'} bg={useColorModeValue('blue.400', 'blue.700')}>
        <Checkbox defaultChecked>{props.network}</Checkbox>
    </Box>
);

function Home() {
    return (
        <>
            <NavBar/>
            <Container maxW={'10xl'}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{base: 8, md: 10}}
                    py={{base: 16}}>
                    <Heading
                        pr={4}
                        fontWeight={600}
                        fontSize={{base: '3xl', sm: '4xl', md: '6xl'}}
                        color={useColorModeValue('orange.500', 'orange.400')}
                        lineHeight={'110%'}>
                        Do not Trust, {' '}
                        <Text as={'span'} color={useColorModeValue('black', 'white')}>
                            Verify.
                        </Text>
                    </Heading>
                </Stack>
            </Container>
            <Container maxW={'10xl'} bg={useColorModeValue('gray.100', 'gray.700')} pb={1}>
                <Box overflowX={'scroll'} pb={1}>
                    <Stack direction={'row'} pt={4} px={1}>
                        {NETWORKS.map((n) => (<NetworkFilterButton network={n}></NetworkFilterButton>))}
                    </Stack>
                </Box>
                <SimpleGrid columns={useBreakpointValue({base: 1, md: 2, lg: 3})} spacing={4}>
                    <RoomCard network={'ETHEREUM'} author={'Zach.XBT'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'BIFROST'} author={'김덕상.eth'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'POLYGON'} author={'LookOnChain'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'BIFROST'} author={'HitBeat'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                </SimpleGrid>
            </Container>
        </>
    );
}

export default Home;
