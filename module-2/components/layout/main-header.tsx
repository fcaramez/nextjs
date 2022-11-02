import Link from "next/link";
import React from "react";
import styled from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={styled.header}>
      <div className={styled.logo}>
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className={styled.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
