import { css } from "linaria";
import { colors } from "src/theme";
import { mediaQueries } from "src/mediaQueries";

export function OnThisPage() {
  return (
    <aside
      className={css`
        flex: 1;
        max-width: 380px;
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
