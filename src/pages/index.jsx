import * as React from "react";
import Navbar from "../components/Header";
import Home from "../components/Home";

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <Home />

      
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
