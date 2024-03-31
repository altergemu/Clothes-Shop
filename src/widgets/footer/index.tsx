import { Link } from "@remix-run/react";
import { HStack, Logo, VStack } from "@/shared";
import { Contact } from "./contact";
import { Social } from "./social";

export function Footer() {
  return (
    <VStack as={"footer"} padding={5} background={"cyan.100"}>
      <HStack justifyContent={"space-between"} width={"full"}>
        <Logo />
        <Social />
        <Contact />
      </HStack>
      <HStack justifyContent={"space-between"} width={"full"} padding={2}>
        <VStack>
          <Link to={""}>О нас</Link>
          <Link to={""}>FAQ</Link>
        </VStack>
      </HStack>
    </VStack>
  );
}

export { Social as FooterSocial, Contact as FooterContact };
