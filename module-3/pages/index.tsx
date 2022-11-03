import React from "react";
import { Product } from "../types/product.types";
import fs from "fs/promises";
import path from "path";

const Home = ({ products }: { products: Array<Product> }) => {
  return (
    <ul>
      {products.map((product: Product) => {
        return (
          <li key={product.id}>
            <h1>{product.title}</h1>
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};
export default Home;
