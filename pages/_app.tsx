import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const [navActive, setNavActive] = useState(false);
  return (
    <>
      <div>
        <Navbar navActive={navActive} setNavActive={setNavActive} />
      </div>
      <Component {...pageProps} />
    </>
  );
}
