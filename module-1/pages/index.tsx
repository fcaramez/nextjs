import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link /* replace */ href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link /* replace */ href="/clients">Client</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
