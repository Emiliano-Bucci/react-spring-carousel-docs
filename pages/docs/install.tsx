import { ResponsiveWrapper } from "atoms/ResponsiveWrapper";
import { css } from "linaria";
import { Accordion } from "molecoles/Accordion/Accordion";

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
          <Accordion
            data={[
              {
                id: "item 1",
                renderItem: <div>Item 1</div>,
                children: [
                  {
                    id: "child item 1a",
                    renderItem: <div>Child item 1a</div>,
                  },
                  {
                    id: "child item 1b",
                    renderItem: <div>Child item 1b</div>,
                  },
                ],
              },
              {
                id: "item 2",
                renderItem: <div>Item 2</div>,
                children: [
                  {
                    id: "child item 2a",
                    renderItem: <div>Child item 2a</div>,
                  },
                  {
                    id: "child item 2b",
                    renderItem: <div>Child item 2b</div>,
                  },
                ],
              },
            ]}
          />
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
