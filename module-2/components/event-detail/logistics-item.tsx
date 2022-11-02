import React, { Children, ReactComponentElement } from "react";
import styled from "./logistics-item.module.css";

const LogisticsItem = ({
  icon: Icon,
  children,
}: {
  icon: any;
  children: React.ReactNode;
}) => {
  return (
    <li className={styled.item}>
      <span className={styled.icon}>
        <Icon />
      </span>
      <span className={styled.content}>{children}</span>
    </li>
  );
};

export default LogisticsItem;
