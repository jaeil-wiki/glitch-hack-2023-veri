import React from "react";
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
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
    useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ConnectKitButton } from "connectkit";
import { COLORS } from "../utils/colors";
import SizedBox from "./SizedBox";

const Links = [];

const NavLink = (link: { title: string; href: string }) => {
    const linkBg = useColorModeValue("gray.200", "gray.700");

    return (
        <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{ textDecoration: "none", bg: linkBg }}
            href={link.href}>
            {link.title}
        </Link>
    );
};
export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const navBoxBg = useColorModeValue(COLORS.blue_1, COLORS.blue_1);
    return (
        <>
            <Box bg={navBoxBg} px={4}>
                <Flex h={79} alignItems={"center"} justifyContent={"center"}>
                    <SizedBox w={100}/>
                    <Spacer />
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <Link href={"/"} style={{ textDecoration: "none" }}>
                            <Box
                                fontWeight={"bold"}
                                fontStyle={"italic"}
                                color={"white"}
                                fontSize={"36px"}>
                                Veri!
                            </Box>
                        </Link>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}>
                            {/*{Links.map((link, i) => (*/}
                            {/*    <NavLink key={i} title={link.title} href={link.href}></NavLink>*/}
                            {/*))}*/}
                        </HStack>
                    </HStack>

                    <Spacer />
                    <Flex alignItems={"center"}>
                        {useBreakpointValue({ base: false, md: true }) && (
                            <ConnectKitButton label={"Connect"} />
                        )}
                        <Box ml={2}></Box>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}>
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={toggleColorMode}>
                                    {colorMode === "light" ? (
                                        <MoonIcon mr={2} />
                                    ) : (
                                        <SunIcon mr={2} />
                                    )}
                                    <Text as={"span"}>Change Theme</Text>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box
                        pb={4}
                        display={{ md: "none" }}
                        w={"100%"}
                        justifyContent={"center"}>
                        <Stack as={"nav"} spacing={4}>
                            {/*{Links.map((link, i) => (*/}
                            {/*    <NavLink key={i} title={link.title} href={link.href}></NavLink>*/}
                            {/*))}*/}
                            <Box m={"auto"}>
                                <ConnectKitButton label={"Connect"} />
                            </Box>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
