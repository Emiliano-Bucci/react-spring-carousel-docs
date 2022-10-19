import { Button } from "atoms/Button";
import { css } from "linaria";
import { useSpringCarousel } from "react-spring-carousel";
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
};

export function UseSpringCarousel({
  itemsPerSlide,
  withLoop,
  showControls,
  disableGestures,
  previewDevice,
  previewDeviceOrientation,
}: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <div
            style={{
              width: "100%",
              backgroundColor: i.color,
            }}
          >
            {i.title}
          </div>
        ),
      })),
      itemsPerSlide,
      withLoop,
      disableGestures,
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
          <Button onClick={slideToPrevItem}>Prev item</Button>
          <Button onClick={slideToNextItem}>Next item</Button>
        </div>
      )}
    </PreviewWrapper>
  );
}
