import { css } from "linaria";
import { ReactNode } from "react";
import { colors, shadows } from "src/theme";
import { GlobalPlayground } from "./GlobalPlayground";
import { mediaQueries } from "src/mediaQueries";
import { Sidebar } from "./Sidebar";
import { PageContent } from "./PageContent";
import { OnThisPage } from "./OnThisPage";
import { OnThisPageItem } from "pages/_app";

function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className={css`
        display: flex;
        .page-wrapper {
          ul {
            list-style: initial;
            padding-left: 2.4rem;
            li:not(:last-of-type) {
              margin-bottom: 1.2rem;
            }
          }
          strong {
            color: ${colors.secondaryDarker};
          }
          h1 {
            font-size: 4rem;
            ${mediaQueries.until.tablet} {
              font-size: 3.2rem;
            }
            ${mediaQueries.until.mobile} {
              font-size: 2.8rem;
            }
          }
          h2 {
            font-size: 3.2rem;
            &:not(:first-child) {
              margin-top: 2.4rem;
            }
            ${mediaQueries.until.tablet} {
              font-size: 2.8rem;
            }
            ${mediaQueries.until.mobile} {
              font-size: 2.4rem;
            }
          }
          h1,
          h2 {
            font-weight: bold;
            margin-bottom: 3.2rem;
            color: ${colors.secondary};
            position: relative;
            margin-right: auto;
            letter-spacing: 1.4px;
            &:not(:first-of-type) {
              margin-top: 2.4rem;
            }
            ::before {
              content: "";
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              height: 8px;
              border-radius: 20px;
              box-shadow: ${shadows.small};
              background-image: linear-gradient(
                to right,
                ${colors.primaryLight},
                ${colors.secondaryLight}
              );
              ${mediaQueries.until.tablet} {
                height: 6px;
              }
            }
          }
          p {
            + ul {
              margin-top: -2rem;
            }
          }
          & > * {
            :not(:last-child) {
              margin-bottom: 3.2rem !important;
            }
          }
        }
      `}
    >
      {children}
    </div>
  );
}

type Props = {
  pageContent: ReactNode;
  footerFragment?: ReactNode;
  onThisPageItems: OnThisPageItem[];
};

export function NavLayout({
  pageContent,
  footerFragment,
  onThisPageItems,
}: Props) {
  return (
    <Wrapper>
      <Sidebar />
      <PageContent pageContent={pageContent} footerFragment={footerFragment} />
      <OnThisPage items={onThisPageItems} />
      <GlobalPlayground />
    </Wrapper>
  );
}
