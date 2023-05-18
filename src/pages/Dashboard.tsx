import React from 'react';
import NavBar from "../components/NavBar";
import {Container, Heading, SimpleGrid, Stack, useBreakpointValue, useColorModeValue} from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";

function Rooms() {
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
                        color={useColorModeValue('black', 'white')}
                        lineHeight={'110%'}>
                        Dashboard
                    </Heading>
                </Stack>
            </Container>
            <Container maxW={'10xl'} bg={useColorModeValue('gray.100', 'gray.700')} pb={1}>
                <SimpleGrid columns={useBreakpointValue({base: 1, md: 2, lg: 3})} spacing={4}>
                    <RoomCard network={'ETHEREUM'} author={'Zach.XBT'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'BIFROST'} author={'김덕상.eth'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'POLYGON'} author={'LookOnChain'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'}></RoomCard>
                    <RoomCard network={'BIFROST'} author={'HitBeat'} writtenAt={'2022-05-13'}
                              title={'Beeple’s tweeter Hackers!'} closed={true}></RoomCard>
                </SimpleGrid>
            </Container>
        </>
    );
}

export default Rooms;
