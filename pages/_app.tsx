import type { AppProps as NextAppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { Footer } from "templates/home/Footer";
import { css } from "linaria";
import "src/globalStyles";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { NavLayout } from "templates/docs/Header/NavLayout";
import { NextSeo } from "next-seo";

type AppProps<P = Record<string, never>> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MainWrapper({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <>
      <NextSeo
        title={
          title ? `${title} - React Spring Carousel` : "React Spring Carousel"
        }
      />
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

function MyApp({ Component, pageProps }: AppProps<{ title?: string }>) {
  const { pathname } = useRouter();
  const isDocsPage = pathname.includes("/docs");

  if (isDocsPage) {
    return (
      <MainWrapper title={pageProps.title ?? ""}>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1;
          `}
        >
          {/* <Header /> */}
          <NavLayout
            pageContent={<Component {...pageProps} />}
            footerFragment={<Footer />}
          />
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
