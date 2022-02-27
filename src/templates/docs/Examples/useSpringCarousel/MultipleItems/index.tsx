import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import {
  Playground,
  Playground2,
  Playground3,
  Playground4,
} from "./Playground";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 3 // -> yup, it's me!,
      withLoop: true,
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
      itemsPerSlide: 3,
      withLoop: true,
      initialStartingPosition: 'start' | 'center' | 'end',
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
export const code3 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
      gutter: 16,
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
export const code4 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 3,
      withLoop: true,
      startEndGutter: 16,
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

function UseSpringCarouselMultipleItemsExample() {
  return (
    <Playground code={<SyntaxHiglight showLineNumbers={false} code={code} />} />
  );
}
function UseSpringCarouselMultipleItemsExample2() {
  return (
    <Playground2
      code={<SyntaxHiglight showLineNumbers={false} code={code2} />}
    />
  );
}
function UseSpringCarouselMultipleItemsExample3() {
  return (
    <Playground3
      code={<SyntaxHiglight showLineNumbers={false} code={code3} />}
    />
  );
}
function UseSpringCarouselMultipleItemsExample4() {
  return (
    <Playground4
      code={<SyntaxHiglight showLineNumbers={false} code={code4} />}
    />
  );
}

export {
  UseSpringCarouselMultipleItemsExample,
  UseSpringCarouselMultipleItemsExample2,
  UseSpringCarouselMultipleItemsExample3,
  UseSpringCarouselMultipleItemsExample4,
};
