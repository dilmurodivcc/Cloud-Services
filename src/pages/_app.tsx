import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
// import { useRouter } from "next/router";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {Component.name !== "services"  && <Header />}
      <Component {...pageProps} />
      {Component.name !== "services" && Component.name !== "Home" && <Sidebar />}
      
    </>
  );
}
