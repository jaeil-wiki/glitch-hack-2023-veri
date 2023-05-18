import React from 'react';
import NavBar from "../components/NavBar";
import {
    Avatar,
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
    Stack,
    StackDivider,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";

function Room() {
    return (
        <>
            <NavBar/>
            <Container maxW={'10xl'} py={3}>
                <Grid
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(12, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={8}>
                        <Box
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}>
                            <Stack direction={'row'} spacing={4} align={'center'}>
                                <Avatar
                                    src={`https://avatars0.githubusercontent.com/u/${Math.ceil(Math.random() * 10000)}?v=4`}
                                />
                                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                                    <Text fontWeight={600}>Zach.BTC</Text>
                                </Stack>
                            </Stack>
                            <Stack spacing={{base: 6, md: 10}}>
                                <Box as={'header'}>
                                    <Heading
                                        lineHeight={1.1}
                                        fontWeight={600}
                                        fontSize={{base: '2xl', sm: '4xl', lg: '5xl'}}>
                                        Beeple’s tweeter Hackers!
                                    </Heading>
                                    <Text
                                        color={useColorModeValue('gray.900', 'gray.400')}
                                        fontWeight={300}
                                        fontSize={'2xl'}>
                                        어쩌고 저쩌구
                                    </Text>
                                </Box>

                                <Stack
                                    spacing={{base: 4, sm: 6}}
                                    direction={'column'}
                                    divider={
                                        <StackDivider
                                            borderColor={useColorModeValue('gray.200', 'gray.600')}
                                        />
                                    }>
                                    <VStack spacing={{base: 4, sm: 6}}>
                                        <Text
                                            color={useColorModeValue('gray.500', 'gray.400')}
                                            fontSize={'2xl'}
                                            fontWeight={'300'}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                            diam nonumy eirmod tempor invidunt ut labore
                                        </Text>
                                        <Text fontSize={'lg'}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                                            aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                                            maxime modi nam officiis porro, quae, quisquam quos
                                            reprehenderit velit? Natus, totam.
                                        </Text>
                                    </VStack>
                                </Stack>
                            </Stack>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4} bg='papayawhip'>
                        <Box
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}>
                            펀딩어쩌고
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4} bg='greenyellow'>
                        <Box
                            w={'full'}
                            bg={useColorModeValue('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={4}
                            overflow={'hidden'}>
                            investigator 어쩌고
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </>
    );
}

export default Room;
