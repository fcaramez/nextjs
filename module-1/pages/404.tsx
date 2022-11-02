import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <h1>There was an error, sorry for the inconvinience</h1>
      <p>
        Click <Link href={"/"}>here</Link> to return to the home page{" "}
      </p>
    </div>
  );
};

export default ErrorPage;
