import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";
import { chakra, HStack, Icon } from "@/shared";

export function Social() {
  const links = [
    { logo: FaGoogle, href: "https://google.com" },
    { logo: FaApple, href: "https://google.com" },
    { logo: FaGithub, href: "https://google.com" },
  ];

  return (
    <HStack spacing={12}>
      {links.map(({ logo, href }) => (
        <chakra.a key={href} href={href} boxSize={7}>
          <Icon as={logo} boxSize={"full"} />
        </chakra.a>
      ))}
    </HStack>
  );
}
