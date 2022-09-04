import React, { ReactNode } from "react";
import Ticker from "../Ticker/Ticker";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      {children}
      <Ticker />
    </>
  );
}

export default Layout;
