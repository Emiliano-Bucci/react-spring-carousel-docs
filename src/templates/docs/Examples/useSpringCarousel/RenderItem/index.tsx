import { Playground, PlaygroundButtonExample } from "molecoles/Playground";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";
import { useSpringCarousel } from "react-spring-carousel";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: ({
          getIsActiveItem,
          getIsPrevItem,
          getIsNextItem,
          useListenToCustomEvent,
        }) => (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
      })),
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
    useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: () => (
          <CarouselItem color={i.color} key={i.id}>
            {i.title}
          </CarouselItem>
        ),
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

export function UseSpringCarouselRenderItemExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Nav buttons example"
      component={<Carousel />}
    />
  );
}
