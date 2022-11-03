import React, { Fragment, useEffect } from "react";
import fs from "fs/promises";
import path from "path";
import { Product } from "../types/product.types";

type Params = {
  params: {
    pid: string;
  };
};

const ProductDetailPage = ({ loadedProduct }: { loadedProduct: Product }) => {
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
};

export const getStaticProps = async (context: Params) => {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find(
    (product: Product) => product.id === productId
  );

  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product: Product) => product.id);

  const pathsWithParams = ids.map((id: string) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default ProductDetailPage;
