import { SyntaxHiglight } from "atoms/SyntaxHiglight";
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
      slideType: 'fluid' // -> Fluidity is the key,
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
      slideType: 'fluid '// -> Fluidity is the key,
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
      slideType: 'fluid',
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
      slideType: 'fluid',
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
      slideType: 'fluid',
      slideAmount: 375,
      freeScroll: true,
      enableFreeScrollDrag: true // -> yooo!,
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
    <Playground code={<SyntaxHiglight showLineNumbers={false} code={code} />} />
  );
}
function UseSpringCarouselSlideTypesExample2() {
  return (
    <Playground2
      code={<SyntaxHiglight showLineNumbers={false} code={code2} />}
    />
  );
}
function UseSpringCarouselSlideTypesExample3() {
  return (
    <Playground3
      code={<SyntaxHiglight showLineNumbers={false} code={code3} />}
    />
  );
}
function UseSpringCarouselSlideTypesExample4() {
  return (
    <Playground4
      code={<SyntaxHiglight showLineNumbers={false} code={code4} />}
    />
  );
}
function UseSpringCarouselSlideTypesExample5() {
  return (
    <Playground5
      code={<SyntaxHiglight showLineNumbers={false} code={code5} />}
    />
  );
}

export {
  UseSpringCarouselSlideTypesExample,
  UseSpringCarouselSlideTypesExample2,
  UseSpringCarouselSlideTypesExample3,
  UseSpringCarouselSlideTypesExample4,
  UseSpringCarouselSlideTypesExample5,
};
