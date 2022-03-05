import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { useTransitionCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";
import { useEffect } from "react";

export const code = `
  import { useTransitionCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useTransitionCarousel({
      items: (
        <CarouselItem color={i.color}>
          {i.title}
        </CarouselItem>
      ),
    });

    useEffect(() => {
      const timer = setInterval(() => {
        slideToNextItem();
      }, 1500);
      return () => {
        window.clearInterval(timer);
      };
      // You MUST add the slide methods to the dependency list useEffect!
    }, [slideToNextItem]);

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

  useEffect(() => {
    const timer = setInterval(() => {
      slideToNextItem();
    }, 1500);
    return () => {
      window.clearInterval(timer);
    };
  }, [slideToNextItem]);

  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </Playground>
  );
}

export function UseTransitionCarouselSlideshowExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Loop example"
      component={<Carousel />}
    />
  );
}
