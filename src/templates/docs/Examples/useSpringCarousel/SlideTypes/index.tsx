import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import {
  Playground,
  Playground2,
  Playground3,
  Playground4,
  Playground5,
} from "./Playground";

const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 'fluid // -> Fluidity is the key,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
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
const code2 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 'fluid // -> Fluidity is the key,
      withLoop: true // -> together is better,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
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
const code3 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 'fluid,
      slideAmount: 375,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
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
const code4 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 'fluid,
      slideAmount: 375,
      freeScroll: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
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
const code5 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      itemsPerSlide: 'fluid,
      slideAmount: 375,
      freeScroll: true,
      enableFreeScrollDrag: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color} width={300}>
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

function UseSpringCarouselSlideTypesExample() {
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
function UseSpringCarouselSlideTypesExample2() {
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
function UseSpringCarouselSlideTypesExample3() {
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
function UseSpringCarouselSlideTypesExample4() {
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
function UseSpringCarouselSlideTypesExample5() {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 4rem;
      `}
    >
      <SyntaxHiglight showLineNumbers={false} code={code5} />
      <Playground5 />
    </div>
  );
}

export {
  UseSpringCarouselSlideTypesExample,
  UseSpringCarouselSlideTypesExample2,
  UseSpringCarouselSlideTypesExample3,
  UseSpringCarouselSlideTypesExample4,
  UseSpringCarouselSlideTypesExample5,
};
