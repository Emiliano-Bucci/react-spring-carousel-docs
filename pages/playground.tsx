import { css } from "linaria";
import { colors } from "theme";
import { Sidebar } from "templates/playground/Sidebar";
import { useState } from "react";
import { UseSpringCarousel } from "../src/templates/playground/Sidebar/UseSpringCarousel";

export const mockedItems = [
  {
    id: "item-1",
    renderItem: (
      <div
        style={{
          flex: "1",
          background: "#34495E",
        }}
      >
        Item 1
      </div>
    ),
  },
  {
    id: "item-2",
    renderItem: (
      <div
        style={{
          flex: "1",
          background: "#E74C3C",
        }}
      >
        Item 2
      </div>
    ),
  },
  {
    id: "item-3",
    renderItem: (
      <div
        style={{
          flex: "1",
          background: "#2ECC71",
        }}
      >
        Item 3
      </div>
    ),
  },
  {
    id: "item-4",
    renderItem: (
      <div
        style={{
          flex: "1",
          background: "#F39C12",
        }}
      >
        Item 4
      </div>
    ),
  },
  {
    id: "item-5",
    renderItem: (
      <div
        style={{
          flex: "5",
          background: "#16A085",
        }}
      >
        Item 5
      </div>
    ),
  },
];

export type Props = {
  carouselType: "useSpringCarousel" | "useTransitionCarousel";
  withLoop: boolean;
  itemsPerSlide: number;
};

export default function Page() {
  const [state, setState] = useState<Props>({
    carouselType: "useSpringCarousel",
    withLoop: false,
    itemsPerSlide: 1,
  });

  return (
    <div
      className={css`
        background-color: ${colors.warmLight};
      `}
    >
      <header
        className={css`
          display: flex;
          align-items: center;
          padding: 1.6rem;
          background-color: ${colors.dark};
          height: 56px;
          border-bottom: 1px solid ${colors.dark60};
        `}
      >
        <h1
          className={css`
            color: ${colors.warmLight};
            font-size: 1.8rem;
          `}
        >
          React spring carousel playground
        </h1>
      </header>
      <div
        className={css`
          display: flex;
        `}
      >
        <Sidebar
          state={state}
          onChange={(newState) => {
            setState((p) => ({
              ...p,
              ...newState,
            }));
          }}
        />
        <div
          className={css`
            display: flex;
            flex: 1;
            overflow: hidden;
            .use-spring-carousel-item > * {
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
              font-size: 4rem;
            }
          `}
        >
          {state.carouselType === "useSpringCarousel" && (
            <UseSpringCarousel
              itemsPerSlide={state.itemsPerSlide}
              withLoop={state.withLoop}
            />
          )}
        </div>
      </div>
    </div>
  );
}
