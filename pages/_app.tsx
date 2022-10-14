import type { AppProps as NextAppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { Footer } from "templates/home/Footer";
import { css, cx } from "linaria";
import "src/globalStyles";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { NavLayout } from "templates/docs/Header/NavLayout";
import { NextSeo } from "next-seo";
import { GlobalPlaygroundProvider } from "templates/docs/Header/NavLayout/GlobalPlayground";
import { mediaQueries } from "src/mediaQueries";
import { shadows, colors } from "src/theme";
import GithubIcon from "public/github.svg";
import NpmIcon from "public/npm.svg";
import { Link } from "atoms/Link";
import Script from "next/script";

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
      <Script
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        async={true}
        defer={true}
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
        <link
          rel="preconnect"
          as="script"
          href="https://queue.simpleanalyticscdn.com"
        />
      </Head>
      {children}
    </>
  );
}

export type OnThisPageItem = {
  id: string;
  label: string;
};

function MyApp({
  Component,
  pageProps,
}: AppProps<{ title?: string; onThisPageItems?: OnThisPageItem[] }>) {
  const { pathname } = useRouter();
  const isDocsPage = pathname.includes("/docs");

  if (isDocsPage) {
    return (
      <MainWrapper title={pageProps.title ?? ""}>
        <header
          className={css`
            display: none;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            left: 0;
            padding: 1.6rem 2.4rem;
            box-shadow: ${shadows.small};
            background-color: #fff;
            z-index: 90;
            font-size: 2rem;
            ${mediaQueries.until.tabletM} {
              display: flex;
            }
          `}
        >
          <h1
            className={css`
              color: ${colors.secondary};
              font-weight: bold;
            `}
          >
            React Spring Carousel
          </h1>
          <div
            className={css`
              display: grid;
              grid-auto-flow: column;
              grid-gap: 0.8rem;
            `}
          >
            <Link
              variant="secondary"
              title="https://github.com/Emiliano-Bucci/react-spring-carousel"
              linkProps={{
                href: "https://github.com/Emiliano-Bucci/react-spring-carousel",
              }}
              target="_blank"
              size="icon"
              className={cx(
                css`
                  svg {
                    width: 18px;
                    height: 18px;
                  }
                `
              )}
            >
              <GithubIcon />
            </Link>
            <Link
              variant="secondary"
              size="icon"
              title="https://www.npmjs.com/package/react-spring-carousel"
              target="_blank"
              linkProps={{
                href: "https://www.npmjs.com/package/react-spring-carousel",
              }}
              className={cx(
                css`
                  svg {
                    width: 20px;
                    height: 20px;
                  }
                `
              )}
            >
              <NpmIcon />
            </Link>
          </div>
        </header>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1;
          `}
        >
          <GlobalPlaygroundProvider>
            <NavLayout
              pageContent={<Component {...pageProps} />}
              footerFragment={<Footer />}
              onThisPageItems={pageProps?.onThisPageItems ?? []}
            />
          </GlobalPlaygroundProvider>
        </div>
      </MainWrapper>
    );
  }
  return (
    <MainWrapper>
      <Component {...pageProps} />
    </MainWrapper>
  );
}
export default MyApp;
