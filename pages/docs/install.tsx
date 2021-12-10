import { ResponsiveWrapper } from "atoms/ResponsiveWrapper";
import { css } from "linaria";

export default function Page() {
  return (
    <ResponsiveWrapper>
      <div
        className={css`
          display: flex;
        `}
      >
        <aside
          className={css`
            width: 100%;
            max-width: 200px;
          `}
        >
          left Nav
        </aside>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
          `}
        >
          content
        </div>
      </div>
    </ResponsiveWrapper>
  );
}
