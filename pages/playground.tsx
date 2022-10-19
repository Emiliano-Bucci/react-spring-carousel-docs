import { css } from "linaria";
import { colors, shadows } from "theme";
import { Sidebar } from "templates/playground/Sidebar";
import { useState } from "react";
import { UseSpringCarousel } from "../src/templates/playground/Sidebar/UseSpringCarousel";
import { SlideType } from "react-spring-carousel";

export const mockedItems = [
  {
    id: "item-1",
    title: "Item 1",
    color: "#1ABC9C",
  },
  {
    id: "item-2",
    title: "Item 2",
    color: "#2ECC71",
  },
  {
    id: "item-3",
    title: "Item 3",
    color: "#3498DB",
  },
  {
    id: "item-4",
    title: "Item 4",
    color: "#F1C40F",
  },
  {
    id: "item-5",
    title: "Item 5",
    color: "#9B59B6",
  },
  {
    id: "item-6",
    title: "Item 6",
    color: "#E74C3C",
  },
  {
    id: "item-7",
    title: "Item 7",
    color: "#E9967A",
  },
  {
    id: "item-8",
    title: "Item 8",
    color: "#FFDAB9",
  },
];

export type PreviewDevice =
  | "desktop"
  | "laptop"
  | "tablet"
  | "mobile"
  | "responsive";

export type PreviewDeviceOrientation = "landscape" | "portrait";

export type Props = {
  carouselType: "useSpringCarousel" | "useTransitionCarousel";
  withLoop: boolean;
  itemsPerSlide: number;
  showControls: boolean;
  disableGestures: boolean;
  previewDevice: PreviewDevice;
  previewDeviceOrientation: PreviewDeviceOrientation;
  slideType: SlideType;
  gutter: string;
  startEndGutter: string;
  slideWhenThresholdIsReached: boolean;
  initialStartingPosition: "start" | "center" | "end";
  animateWhenActiveItemChange: boolean;
  initialActiveItem: string;
  freeScroll: boolean;
  enableFreeScrollDrag: boolean;
};

export default function Page() {
  const [state, setState] = useState<Props>({
    carouselType: "useSpringCarousel",
    withLoop: false,
    itemsPerSlide: 1,
    showControls: true,
    disableGestures: false,
    previewDevice: "desktop",
    previewDeviceOrientation: "landscape",
    slideType: "fixed",
    gutter: "0",
    startEndGutter: "0",
    slideWhenThresholdIsReached: false,
    initialStartingPosition: "start",
    animateWhenActiveItemChange: true,
    initialActiveItem: "0",
    freeScroll: false,
    enableFreeScrollDrag: false,
  });

  function handleOnChange(newState: Partial<Props>) {
    setState((p) => ({
      ...p,
      ...newState,
    }));
  }

  return (
    <div
      className={css`
        background-color: ${colors.warmLight};
      `}
    >
      <header
        className={css`
          position: relative;
          display: flex;
          align-items: center;
          padding: 1.6rem;
          background-color: #fff;
          height: 56px;
          box-shadow: ${shadows.small};
          z-index: 10;
        `}
      >
        <h1
          className={css`
            color: ${colors.secondary};
            font-size: 1.8rem;
            font-weight: bold;
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
        <Sidebar state={state} onChange={handleOnChange} />
        <div
          className={css`
            display: flex;
            flex: 1;
            overflow: hidden;
            background-color: ${colors.warm};
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
              showControls={state.showControls}
              disableGestures={state.disableGestures}
              previewDevice={state.previewDevice}
              previewDeviceOrientation={state.previewDeviceOrientation}
              slideType={state.slideType}
              gutter={state.gutter}
              startEndGutter={state.startEndGutter}
              slideWhenThresholdIsReached={state.slideWhenThresholdIsReached}
              initialStartingPosition={state.initialStartingPosition}
              animateWhenActiveItemChange={state.animateWhenActiveItemChange}
              initialActiveItem={state.initialActiveItem}
              freeScroll={state.freeScroll}
              enableFreeScrollDrag={state.enableFreeScrollDrag}
            />
          )}
        </div>
      </div>
    </div>
  );
}
