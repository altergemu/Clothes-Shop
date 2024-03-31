import { Icon } from "@chakra-ui/icon";
import { Link } from "@remix-run/react";
import { BiSearch } from "react-icons/bi";
import { Button, Grid, GridItem, HStack, Logo, VStack } from "@/shared";

// TODO: Need popover with 2 levels categories

export function Navbar({ isSticky }: { isSticky?: boolean }) {
  const genders = [
    { label: "Женщинам", href: "" },
    { label: "Мужчинам", href: "" },
    { label: "Детям", href: "" },
  ];

  return (
    <VStack
      as={"nav"}
      position={isSticky ? "sticky" : undefined}
      width={"full"}
    >
      <Grid
        width={"full"}
        templateColumns={"repeat(3, 1fr)"}
        placeItems={"center center"}
        paddingX={5}
      >
        <GridItem justifySelf={"start"}>
          <HStack justifyContent={"space-between"}>
            {genders.map((v) => (
              <Button key={v.label} as={Link} background={"transparent"}>
                {v.label}
              </Button>
            ))}
          </HStack>
        </GridItem>
        <GridItem>
          <Logo />
        </GridItem>
        <GridItem justifySelf={"end"}>
          <Button aria-label={"Search"} background={"transparent"} padding={0}>
            <Icon as={BiSearch} boxSize={"60%"} />
          </Button>
        </GridItem>
      </Grid>
    </VStack>
  );
}
