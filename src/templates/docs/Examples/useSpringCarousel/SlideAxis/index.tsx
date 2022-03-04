import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";
import { CarouselThumb } from "atoms/CarouselThumb";
import { css } from "linaria";

export const code = `
import { useSpringCarousel } from 'react-spring-carousel'

export function Component() {
  const { 
    carouselFragment, 
    slideToPrevItem, 
    slideToNextItem 
  } = useSpringCarousel({
    carouselSlideAxis: 'y' // -> Yeah science!,
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
    carouselSlideAxis: 'y'
    thumbsSlideAxis: 'y' // To the infinityyyy, aaaand beyond...,
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
      carouselSlideAxis: "y",
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
function Carouse2() {
  const { carouselFragment, thumbsFragment } = useSpringCarousel({
    carouselSlideAxis: "y",
    thumbsSlideAxis: "y",
    withThumbs: true,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      renderThumb: <CarouselThumb color={i.color}>{i.title}</CarouselThumb>,
    })),
  });
  return (
    <Playground
      thumbsFragment={thumbsFragment}
      className={css`
        flex-direction: row;
        align-items: center;
        .thumbs-fragment {
          display: flex;
          align-items: center;
          height: 100%;
          .thumb-item {
            margin-right: 0px !important;
          }
          & > * {
            max-height: 400px !important;
            height: auto !important;
          }
        }
      `}
    >
      {carouselFragment}
    </Playground>
  );
}

function UseSpringCarouselSlideAxisExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Slide axis example 1"
      component={<Carousel />}
    />
  );
}
function UseSpringCarouselSlideAxisExample2() {
  return (
    <PlaygroundButtonExample
      code={code2}
      title="Slide axis example 2"
      component={<Carouse2 />}
    />
  );
}

export {
  UseSpringCarouselSlideAxisExample,
  UseSpringCarouselSlideAxisExample2,
};
