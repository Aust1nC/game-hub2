import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="50px" />
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default NavBar;
