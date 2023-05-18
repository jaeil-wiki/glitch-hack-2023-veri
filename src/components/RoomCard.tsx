import {Avatar, Box, Center, Heading, Link, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {BIFROST, ETHREUM, POLYGON} from "../configs";

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
    const NetworkLabelColor: any = {
        [ETHREUM]: 'orange.400',
        [POLYGON]: 'purple.500',
        [BIFROST]: 'blue.500'
    }
    return (
        <Center py={4}>
            <Link href={`/rooms/${props.href ?? '#'}`}>
                <Box
                    maxW={'600px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    {/* !Card Thumbnail*/}
                    {/*<Box*/}
                    {/*    h={'210px'}*/}
                    {/*    bg={'gray.100'}*/}
                    {/*    mt={-6}*/}
                    {/*    mx={-6}*/}
                    {/*    mb={6}*/}
                    {/*    pos={'relative'}>*/}
                    {/*    <Image*/}
                    {/*        src={*/}
                    {/*            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'*/}
                    {/*        }*/}
                    {/*    />*/}
                    {/*</Box>*/}
                    <Stack>
                        <Text
                            color={NetworkLabelColor[props.network]}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}>
                            {props.network}
                            {props.closed && <ClosedBadge/>}
                        </Text>
                        <Heading
                            color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}>
                            {props.title}
                        </Heading>
                        <Text color={'gray.500'}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                            et ea rebum.
                        </Text>
                    </Stack>
                    <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                        <Avatar
                            src={`https://avatars0.githubusercontent.com/u/${Math.ceil(Math.random() * 10000)}?v=4`}
                        />
                        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                            <Text fontWeight={600}>{props.author}</Text>
                            <Text color={'gray.500'}>{props.writtenAt}</Text>
                        </Stack>
                        <Stack direction={'column'} spacing={1} fontSize={'sm'}>
                            <Text fontWeight={600}>Energy: 14302</Text>
                            <Text fontWeight={600}>Staked: $1302</Text>
                        </Stack>
                    </Stack>
                </Box>
            </Link>
        </Center>
    );
}