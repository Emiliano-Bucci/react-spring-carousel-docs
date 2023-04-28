import { Button } from "atoms/Button";
import { css } from "linaria";
import { SlideType, useSpringCarousel } from "react-spring-carousel";
import { shadows } from "theme";
import {
  mockedItems,
  PreviewDevice,
  PreviewDeviceOrientation,
} from "pages/playground";
import { PreviewWrapper } from "./PreviewWrapper";

type Props = {
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

export function UseSpringCarousel({
  itemsPerSlide,
  withLoop,
  showControls,
  disableGestures,
  previewDevice,
  previewDeviceOrientation,
  slideType,
  gutter,
  startEndGutter,
  slideWhenThresholdIsReached,
  initialStartingPosition,
  animateWhenActiveItemChange,
  initialActiveItem,
  freeScroll,
  enableFreeScrollDrag,
}: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <div
            style={{
              width: slideType === "fluid" || freeScroll ? "280px" : "100%",
              backgroundColor: i.color,
            }}
          >
            {i.title}
          </div>
        ),
      })),
      // @ts-ignore
      itemsPerSlide,
      withLoop,
      disableGestures,
      slideType,
      gutter: Number(gutter),
      // @ts-ignore
      startEndGutter: Number(startEndGutter),
      slideWhenThresholdIsReached,
      initialStartingPosition,
      animateWhenActiveItemChange,
      // @ts-ignore
      initialActiveItem: Number(initialActiveItem),
      // @ts-ignore
      freeScroll,
      // @ts-ignore
      enableFreeScrollDrag,
    });

  return (
    <PreviewWrapper
      device={previewDevice}
      orientation={previewDeviceOrientation}
    >
      {carouselFragment}
      {showControls && (
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 16px;
            left: 16px;
            right: 16px;
            padding: 1.6rem;
            background-color: rgba(255, 255, 255, 0.72);
            backdrop-filter: blur(8px);
            border-radius: 12px;
            box-shadow: ${shadows.large};
          `}
        >
          <Button onClick={() => slideToPrevItem()}>Prev item</Button>
          <Button onClick={() => slideToNextItem()}>Next item</Button>
        </div>
      )}
    </PreviewWrapper>
  );
}
