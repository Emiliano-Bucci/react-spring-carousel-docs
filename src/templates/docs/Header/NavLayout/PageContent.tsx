import { css, cx } from "linaria";
import { mediaQueries } from "src/mediaQueries";
import { ReactNode } from "react";
import { colors } from "theme";

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
        background-color: ${colors.warmLight};
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
            padding: 4rem;
            max-width: 960px;
            margin: auto;
            ${mediaQueries.until.tabletSM} {
              padding: 3.2rem;
            }
            ${mediaQueries.until.mobile} {
              padding: 2rem;
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
