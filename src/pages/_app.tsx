import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const simpleLayoutRoutes = ["/", "/services", "/settings"];
  const isSimpleLayout = simpleLayoutRoutes.includes(router.pathname);

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
