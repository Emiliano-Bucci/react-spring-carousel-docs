import { css } from "linaria";
import { colors, shadows } from "src/theme";
import { mediaQueries } from "src/mediaQueries";
import { OnThisPageItem } from "pages/_app";

type Props = {
  items: OnThisPageItem[];
};
export function OnThisPage({}: Props) {
  return (
    <aside
      className={css`
        flex: 1;
        max-width: 340px;
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          right: 0;
        `}
      >
        <span
          className={css`
            color: #fafafa;
            font-size: 2.4rem;
            padding: 3.2rem;
            box-shadow: ${shadows.large};
            background: ${colors.secondary};
            ${mediaQueries.until.tablet} {
              padding-left: 2.8rem;
            }
            ${mediaQueries.until.tabletM} {
              display: none;
            }
          `}
        >
          On this page
        </span>
      </div>
    </aside>
  );
}
