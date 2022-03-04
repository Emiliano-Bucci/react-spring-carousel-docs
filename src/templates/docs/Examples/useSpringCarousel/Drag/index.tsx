import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      disableGestures: true // -> Hello there!,
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
export const code2 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      draggingSlideTreshold: 35,
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
    useSpringCarousel({
      disableGestures: true,
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
function Carousel2() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      draggingSlideTreshold: 35,
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

function UseSpringCarouselDragExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Drag example 1"
      component={<Carousel />}
    />
  );
}
function UseSpringCarouselDragExample2() {
  return (
    <PlaygroundButtonExample
      code={code2}
      title="Drag example 2"
      component={<Carousel2 />}
    />
  );
}

export { UseSpringCarouselDragExample, UseSpringCarouselDragExample2 };
