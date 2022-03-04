import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { useTransitionCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useTransitionCarousel({
      withLoop: true, // -> make me loop!
      items: (
        <CarouselItem color={i.color}>
          {i.title}
        </CarouselItem>
      ),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
      </div>
    );
  }
`;

function Carousel() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useTransitionCarousel({
      withLoop: true,
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

export function UseTransitionCarouselLoopExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Loop example"
      component={<Carousel />}
    />
  );
}
