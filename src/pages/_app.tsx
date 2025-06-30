import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import "../styles/globals.css";
import { log } from "console";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log("MyApp rendered with component:", Component.name);
  const isSimpleLayout =
    Component.name === "Services" ||
    Component.name === "Home" ||
    Component.name === "Settings";

  return isSimpleLayout ? (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  ) : (
    <main className="SideBarLayout">
      <Sidebar />
      <div className="content">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
