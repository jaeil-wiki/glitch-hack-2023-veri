import {Avatar, Badge, Box, Center, Link, SimpleGrid, Spacer, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import React from "react";

type RoomCardProps = {
    network: string,
    author: string,
    writtenAt: string,
    title: string,
    closed?: boolean,
    href?: string
}

const ClosedBadge = () => (
    <Box as={'span'} rounded={'sm'}
         color={useColorModeValue('gray.500', 'gray.900')}
         bg={useColorModeValue('gray.100', 'gray.600')} p={1} ml={2}>
        closed
    </Box>
);
export default function RoomCard(props: RoomCardProps) {
    return (
        <Center py={1.4}>
            <Link href={`/rooms/${props.href ?? '#'}`} style={{textDecoration: 'none'}}>
                <Box
                    maxW={'600px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    px={6} pt={4} pb={'80px'}
                    overflow={'hidden'}
                >
                    <Stack>
                        <Stack mb={2} direction={'row'} spacing={4} align={'center'}>
                            <Avatar
                                src={`https://avatars0.githubusercontent.com/u/${Math.ceil(Math.random() * 10000)}?v=4`}/>
                            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                <Text fontWeight={600}>{props.author}</Text>
                                <Text color={'gray.500'}>{props.writtenAt}</Text>
                            </Stack>
                            <Spacer></Spacer>
                            <Stack direction={'column'} spacing={1} fontSize={'sm'}>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <Badge color={'red'} border={'1px solid red'} px={2} rounded={'20px'}>BOUNTY: 111
                                    BFC</Badge>
                                <Box py={1}> </Box>
                            </Stack>
                        </Stack>
                        <Text
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            {props.network}
                            {props.closed && <ClosedBadge/>}
                        </Text>
                        {/*<Heading*/}
                        {/*    color={useColorModeValue('gray.700', 'white')}*/}
                        {/*    fontSize={'2xl'}*/}
                        {/*    fontFamily={'body'}>*/}
                        {/*    {props.title}*/}
                        {/*</Heading>*/}
                        <Text fontSize={'md'} color={'gray.700'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>
                </Box>
                <Box bg={'gray.100'} w={'100%'} h={'60px'} mt={'-60px'} px={6} py={2}
                     style={{borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px'}}>
                    <SimpleGrid spacing={0} fontSize={'sm'}>
                        <Stack direction={'row'}>
                            <Text fontSize={'2xl'} fontWeight={700}> 300.00 BFC</Text>
                            <Text color={'gray.500'}>{props.writtenAt}</Text>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </Link>
        </Center>
    );
}