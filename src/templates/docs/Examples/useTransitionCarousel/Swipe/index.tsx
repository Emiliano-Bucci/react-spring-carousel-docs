import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { useTransitionCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
    } = useTransitionCarousel({
      items: (
        <CarouselItem color={i.color}>
          {i.title}
        </CarouselItem>
      ),
    });

    return (
      <div>
        {carouselFragment}
      </div>
    );
  }
`;

function Carousel() {
  const { carouselFragment } = useTransitionCarousel({
    withLoop: true,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return <Playground>{carouselFragment}</Playground>;
}

export function UseTransitionCarouselSwipeExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Swipe example"
      component={<Carousel />}
    />
  );
}
