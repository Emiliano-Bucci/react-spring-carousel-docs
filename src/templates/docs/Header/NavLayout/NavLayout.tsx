import { css } from "linaria";
import { ReactNode } from "react";
import { colors } from "src/theme";
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
          background-color: #fdfdfc;
          ul {
            list-style: initial;
            padding-left: 2.4rem;
            li:not(:last-of-type) {
              margin-bottom: 1.2rem;
            }
          }
          strong {
            color: ${colors.secondary};
          }
          h1 {
            font-size: 4rem;
            ${mediaQueries.until.tablet} {
              font-size: 3.2rem;
            }
          }
          h2 {
            font-size: 3.2rem;
            &:not(:first-child) {
              margin-top: 2.4rem;
            }
            ${mediaQueries.until.tablet} {
              font-size: 2.4rem;
            }
          }
          h1,
          h2 {
            font-weight: bold;
            margin-bottom: 3.2rem;
            color: ${colors.secondary};
            position: relative;
            padding-left: 2.4rem;
            padding-bottom: 0.8rem;
            &:not(:first-of-type) {
              margin-top: 2.4rem;
            }
            ::before {
              content: "";
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              height: 4px;
              border-radius: 20px;
              background-image: linear-gradient(
                to right,
                ${colors.primaryLight},
                ${colors.secondaryLight}
              );
            }
            ${mediaQueries.until.tablet} {
              padding-left: 2rem;
              padding-bottom: 0.4rem;
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
  footerFragment: ReactNode;
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
