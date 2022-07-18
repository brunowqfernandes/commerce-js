import WebFont from 'webfontloader';
import { CartProvider } from "../context/cart";
import { createUseStyles } from "react-jss";

import Header from "../components/Header";
import { useEffect } from 'react';

const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: 0,
      fontFamily: "'Poppins', sans-serif"
    },
    "*": {
      boxSizing: "border-box"
    },
    a: {
      textDecoration: "none"
    }
  }
});

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']
      }
    });
   }, []);
  useStyles();

  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}
