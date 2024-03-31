import { faker } from "@faker-js/faker/locale/ru";
import { Footer } from "@/widgets/footer";
import { Navbar } from "@/widgets/navbar";
import { ProductCard, ProductCardProvider } from "@/entities/product";
import { Grid } from "@/shared";

export default function Index() {
  return (
    <>
      <Navbar />
      <Grid
        gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
        gap={5}
        padding={5}
      >
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
      </Grid>
      <Footer />
    </>
  );
}
