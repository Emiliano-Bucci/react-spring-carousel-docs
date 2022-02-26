import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
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
      itemsPerSlide: 3,
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

function UseSpringCarouselMultipleItemsExample() {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 4rem;
      `}
    >
      <SyntaxHiglight showLineNumbers={false} code={code} />
      <Playground />
    </div>
  );
}
function UseSpringCarouselMultipleItemsExample2() {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 4rem;
      `}
    >
      <SyntaxHiglight showLineNumbers={false} code={code2} />
      <Playground2 />
    </div>
  );
}
function UseSpringCarouselMultipleItemsExample3() {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 4rem;
      `}
    >
      <SyntaxHiglight showLineNumbers={false} code={code3} />
      <Playground3 />
    </div>
  );
}
function UseSpringCarouselMultipleItemsExample4() {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 4rem;
      `}
    >
      <SyntaxHiglight showLineNumbers={false} code={code4} />
      <Playground4 />
    </div>
  );
}

export {
  UseSpringCarouselMultipleItemsExample,
  UseSpringCarouselMultipleItemsExample2,
  UseSpringCarouselMultipleItemsExample3,
  UseSpringCarouselMultipleItemsExample4,
};
