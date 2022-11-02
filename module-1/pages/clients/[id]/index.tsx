import { useRouter } from "next/router";
import React from "react";

const ClientProjectPage = () => {
  const router = useRouter();
  const loadProjectHandler = () => {
    router.push("/clients/xico/projectA");
  };

  return (
    <div>
      <h1>The Projects of a client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
