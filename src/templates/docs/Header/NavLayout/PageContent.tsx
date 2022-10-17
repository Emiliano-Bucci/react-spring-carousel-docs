import { css, cx } from "linaria";
import { colors } from "src/theme";
import { mediaQueries } from "src/mediaQueries";
import { ReactNode } from "react";

type Props = {
  pageContent: ReactNode;
  footerFragment: ReactNode;
};

export function PageContent({ pageContent, footerFragment }: Props) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        background-color: #fff;
        border-left: 1px solid ${colors.warm};
        border-right: 1px solid ${colors.warm};
        background-color: #fdfdfc;
      `}
    >
      <div
        className={cx(
          "page-wrapper",
          css`
            flex: 1;
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 8rem 12rem;
            max-width: 960px;
            margin: auto;
            ${mediaQueries.until.desktopL} {
              padding: 8rem;
            }
            ${mediaQueries.until.desktop} {
              padding: 4.8rem;
            }
            ${mediaQueries.until.tablet} {
              padding: 4rem 4.8rem;
            }
            ${mediaQueries.until.tabletSM} {
              padding: 3.2rem;
            }
            ${mediaQueries.until.mobile} {
              padding: 2.4rem;
            }
          `
        )}
      >
        {pageContent}
      </div>
      {footerFragment}
    </div>
  );
}
