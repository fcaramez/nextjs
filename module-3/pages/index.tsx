import React from "react";
import { Product } from "../types/product.types";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

const Home = ({ products }: { products: Array<Product> }) => {
  return (
    <ul>
      {products.map((product: Product) => {
        return (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps = async (context: any) => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    /* redirect: , */
  };
};
export default Home;
