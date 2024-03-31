import { Link } from "@remix-run/react";
import {
  AspectRatio,
  Button,
  chakra,
  Heading,
  Image,
  Text,
  VStack,
} from "@/shared";
import { ICard, useCardContext } from "../model";

export function Card() {
  const { name, price }: ICard = useCardContext();

  return (
    <VStack
      shadow={"md"}
      width={"200px"}
      border={"1px solid"}
      borderRadius={"md"}
      borderColor={"gray.200"}
      role={"group"}
      overflow={"hidden"}
      spacing={1}
      aspectRatio={3 / 5}
      justifyContent={"space-between"}
    >
      <chakra.a as={Link} to={"/f"} width={"full"}>
        <AspectRatio
          maxW={"full"}
          ratio={21 / 23}
          // borderRadius={"md"}
          // overflow={"hidden"}
        >
          <Image
            src={"/dress.png"}
            alt={""}
            objectFit="cover"
            objectPosition={"center"}
            _groupHover={{ content: 'url("/dress2.png")' }}
          />
        </AspectRatio>
        <VStack spacing={0} marginTop={1.5} textAlign={"center"} paddingX={1.5}>
          <Heading fontSize={"sm"} fontWeight={"450"}>
            {name}
          </Heading>
          <Text fontSize={"smaller"}>{price} 990 ₽</Text>
        </VStack>
      </chakra.a>
      <VStack
        width={"full"}
        spacing={0}
        visibility={"hidden"}
        _groupHover={{ visibility: "visible" }}
      >
        <Button
          colorScheme={"teal"}
          borderRadius={0}
          width={"full"}
          size={"sm"}
        >
          Купить
        </Button>
      </VStack>
    </VStack>
  );
}
