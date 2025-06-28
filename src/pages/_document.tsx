import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Cloud Services Platform" />
        <title>Cloud Services</title>
        <link rel="icon" href="/icon/favicon.svg" />
      </Head>
      <body className="antialiased bg-white font-[var(--font-family)]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
