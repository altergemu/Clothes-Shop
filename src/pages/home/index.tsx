import { faker } from "@faker-js/faker/locale/ru";
import { Footer } from "@/widgets/footer";
import { ProductCard, ProductCardProvider } from "@/entities/product";
import { HStack } from "@/shared";

export default function Index() {
  return (
    <>
      <HStack>
        {Array(10)
          .fill(null)
          .map((v, i) => (
            <ProductCardProvider
              key={i}
              value={{
                name: faker.commerce.productName(),
                price: faker.number.int({ min: 1, max: 100 }),
              }}
            >
              <ProductCard />
            </ProductCardProvider>
          ))}
      </HStack>
      <Footer />
    </>
  );
}
