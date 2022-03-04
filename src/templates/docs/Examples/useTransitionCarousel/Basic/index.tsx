import { useTransitionCarousel } from "react-spring-carousel";

import { Playground, PlaygroundButtonExample } from "molecoles/Playground";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export const code = `
  import { useTransitionCarousel } from 'react-spring-carousel'

  export function Component() {
    const { carouselFragment } = useTransitionCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
      })),
    });

    return (
      <div>
        {carouselFragment}
      </div>
    );
  }
`;

function Carousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useTransitionCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });
  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </Playground>
  );
}

export function UseTransitionCarouselBasicExample() {
  return (
    <PlaygroundButtonExample
      title="Basic example"
      code={code}
      component={<Carousel />}
    />
  );
}
