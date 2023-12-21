import React, { PropsWithChildren } from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Jinwoo Ma</title>
        <meta name="description" content="About Jinwoo Ma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
