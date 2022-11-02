import type { AppProps as NextAppProps } from "next/app";
import { useRouter } from "next/dist/client/router";
import { css, cx } from "linaria";
import "src/globalStyles";
import Head from "next/head";
import { PropsWithChildren } from "react";
import { NavLayout } from "templates/docs/Header/NavLayout";
import { NextSeo } from "next-seo";
import { GlobalPlaygroundProvider } from "templates/docs/Header/NavLayout/GlobalPlayground";

import { colors } from "src/theme";
import GithubIcon from "public/github.svg";
import NpmIcon from "public/npm.svg";
import { Link } from "atoms/Link";
import Script from "next/script";
import { mediaQueries } from "mediaQueries";

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
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: sticky;
            top: 0;
            left: 0;
            padding: 1.6rem 2.4rem;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(8px);
            z-index: 90;
            font-size: 2rem;
            border-bottom: 1px solid ${colors.light};
            max-height: 70px;
            ${mediaQueries.until.mobile} {
              padding: 1.6rem 2rem;
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
          <Link
            className={css`
              &&&& {
                padding: 0.9rem 1.6rem;
                ${mediaQueries.until.mobile} {
                  display: none;
                }
              }
            `}
            href="/playground"
          >
            Playground
          </Link>
          <div
            className={css`
              display: grid;
              grid-auto-flow: column;
              grid-gap: 1.2rem;
            `}
          >
            <Link
              variant="secondary"
              title="https://github.com/Emiliano-Bucci/react-spring-carousel"
              href="https://github.com/Emiliano-Bucci/react-spring-carousel"
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
              href="https://www.npmjs.com/package/react-spring-carousel"
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
              // footerFragment={<Footer />}
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
