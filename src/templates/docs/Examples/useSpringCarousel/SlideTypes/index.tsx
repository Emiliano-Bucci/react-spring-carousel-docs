import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";
import { Playground, PlaygroundButtonExample } from "molecoles/Playground";

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

function Carousel1() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
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
      slideType: "fluid",
      withLoop: true,
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
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel3() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
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
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel4() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
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
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel5() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      slideType: "fluid",
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
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
    >
      {carouselFragment}
    </Playground>
  );
}

function UseSpringCarouselSlideTypesExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Slide types example 1"
      component={<Carousel1 />}
    />
  );
}
function UseSpringCarouselSlideTypesExample2() {
  return (
    <PlaygroundButtonExample
      code={code2}
      title="Slide types example 2"
      component={<Carousel2 />}
    />
  );
}
function UseSpringCarouselSlideTypesExample3() {
  return (
    <PlaygroundButtonExample
      code={code3}
      title="Slide types example 3"
      component={<Carousel3 />}
    />
  );
}
function UseSpringCarouselSlideTypesExample4() {
  return (
    <PlaygroundButtonExample
      code={code4}
      title="Slide types example 4"
      component={<Carousel4 />}
    />
  );
}
function UseSpringCarouselSlideTypesExample5() {
  return (
    <PlaygroundButtonExample
      code={code5}
      title="Slide types example 5"
      component={<Carousel5 />}
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
