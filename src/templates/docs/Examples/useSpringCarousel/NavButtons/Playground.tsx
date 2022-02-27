import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";
import { ReactNode } from "react";

type Props = {
  code: ReactNode;
};

export function Playground({ code }: Props) {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });
  return (
    <PlaygroundWrapper
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      code={code}
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}
