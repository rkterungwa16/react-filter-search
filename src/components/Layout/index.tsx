import { FC, ReactNode } from "react";
import Head from "next/head";

import { LayoutContainer } from "./container";
import { PageHeader } from "../PageHeader";

export type LayoutProps = {
  children: ReactNode;
}

export const Layout:FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Head>
          <title>Terkplumber</title>
          <meta name="Terkplumber" content="Terkplumber portfolio" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageHeader />
        {children}
      </LayoutContainer>
    </>
  );
};
