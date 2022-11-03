import React from "react";
import Link from "next/link";
import { Url } from "url";
import styled from "./button.module.css";

const Button = ({
  link,
  children,
}: {
  link?: string;
  children: React.ReactNode;
}) => {
  return link ? (
    <Link
      className={styled.btn}
      href={{
        pathname: link,
      }}
    >
      {children}
    </Link>
  ) : (
    <button className={styled.btn}>{children}</button>
  );
};

export default Button;
