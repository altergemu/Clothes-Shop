import { FaApple, FaGithub, FaGoogle } from "react-icons/fa";
import { chakra, HStack, Icon } from "@/shared";

export function Social() {
  const links = [
    { logo: FaGoogle, href: "1" },
    { logo: FaApple, href: "2" },
    { logo: FaGithub, href: "3" },
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
