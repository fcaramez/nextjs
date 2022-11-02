import React from "react";
import { useRouter } from "next/router";

const Id = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <h1>Page Id working, id: {id}</h1>
    </div>
  );
};

export default Id;
