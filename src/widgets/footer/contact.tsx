import { chakra, Text, VStack } from "@/shared";

export function Contact() {
  return (
    <VStack>
      <chakra.a href={"tel:+79994344343"} letterSpacing={1.5} fontSize={"xl"}>
        +7 (999) 434-43-43
      </chakra.a>
      <Text>Круглосуточно и бесплатно</Text>
    </VStack>
  );
}
