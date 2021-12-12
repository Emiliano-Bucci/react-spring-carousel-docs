import type { AppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { Header } from "templates/docs/Header";
import { Footer } from "templates/home/Footer";
import { css } from "linaria";
import "src/globalStyles";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { NavLayout } from "templates/docs/Header/NavLayout";

function MainWrapper({ children }: PropsWithChildren<Record<string, unknown>>) {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Catamaran-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/Catamaran-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
      {children}
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isDocsPage = pathname.includes("/docs");

  if (isDocsPage) {
    return (
      <MainWrapper>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1;
          `}
        >
          <Header />
          <NavLayout>
            <Component {...pageProps} />
          </NavLayout>
          <Footer />
        </div>
      </MainWrapper>
    );
  }
  return (
    <MainWrapper>
      <Component {...pageProps} />;
    </MainWrapper>
  );
}
export default MyApp;
