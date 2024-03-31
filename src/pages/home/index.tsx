import { faker } from "@faker-js/faker/locale/ru";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Footer } from "@/widgets/footer";
import { Navbar } from "@/widgets/navbar";
import {
  IProductCard,
  ProductCard,
  ProductCardProvider,
} from "@/entities/product";
import { Grid, GridItem } from "@/shared";

export function loader() {
  const products: IProductCard[] = [];
  for (let i = 0; i < faker.number.int({ min: 1, max: 100 }); i++)
    products.push({
      name: faker.commerce.productName(),
      price: faker.number.int({ min: 10, max: 100 }),
    });
  return json(products);
}

export default function Index() {
  const products = useLoaderData<typeof loader>();
  return (
    <>
      <Navbar />
      <Grid
        gridTemplateColumns={"repeat(auto-fill, minmax(200px, 1fr))"}
        gap={5}
        padding={5}
      >
        {products.map((product, i) => (
          <GridItem key={i}>
            <ProductCardProvider value={product}>
              <ProductCard />
            </ProductCardProvider>
          </GridItem>
        ))}
      </Grid>
      <Footer />
    </>
  );
}
