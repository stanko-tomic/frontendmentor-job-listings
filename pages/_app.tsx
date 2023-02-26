import Header from "@/components/Header";
import { StateContext } from "@/context/StateContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Header />
      <Component {...pageProps} />
    </StateContext>
  );
}
