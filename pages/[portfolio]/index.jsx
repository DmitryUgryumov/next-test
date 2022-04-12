import React from "react";
import { useRouter } from "next/router";
import Home from "../index";

const Index = () => {
  const { portfolio } = useRouter().query;

  return <Home showModalValue="1213" data={portfolio} />;
};

export default Index;
