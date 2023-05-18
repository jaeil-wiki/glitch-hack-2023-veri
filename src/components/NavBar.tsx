import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';

const Links = [
    {
        title: 'Rooms',
        href: 'rooms'
    },
    {
        title: 'Crowdings',
        href: 'crowdings'
    },
    {
        title: 'Dashboard',
        href: 'dashboard'
    }
];

const NavLink = (link: { title: string, href: string }) => {
    return (
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={link.href}>
            {link.title}
        </Link>
    );
};
export default function NavBar() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {colorMode, toggleColorMode} = useColorMode();

    const navBoxBg = useColorModeValue('gray.100', 'gray.900');
    return (
        <>
            <Box bg={navBoxBg} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Link href={'/'} style={{textDecoration: 'none'}}>
                            <Box fontWeight={'bold'}>Expose!</Box>
                        </Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{base: 'none', md: 'flex'}}>
                            {Links.map((link) => (
                                <NavLink title={link.title} href={link.href}></NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            mr={4}>
                            Connect
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={toggleColorMode}>
                                    {colorMode === 'light' ? <MoonIcon mr={2}/> : <SunIcon mr={2}/>}
                                    <Text as={'span'}>Change Theme</Text></MenuItem>
                                <MenuItem><CloseIcon mr={2}/>Disconnect</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link, i) => (
                                <NavLink title={link.title} href={link.href}></NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}