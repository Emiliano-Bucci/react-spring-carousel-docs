import { PlaygroundButtonExample, Playground } from "molecoles/Playground";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";
import { css } from "linaria";
import { Button } from "atoms/Button";
import { useRef } from "react";

const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment,
      slideToPrevItem,
      slideToNextItem,
      enterFullscreen,
    } = useSpringCarousel({
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
const code2 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  function Component(){
    const {
      carouselFragment,
      slideToPrevItem,
      slideToNextItem,
      enterFullscreen,
      exitFullscreen,
      getIsFullscreen
    } = useSpringCarousel({
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      })),
    });
    // Create a react ref
    const ref = useRef<HTMLDivElement | null>(null);

    return (
      <Playground
        // Assign the ref
        ref={ref}
        slideToPrevItem={slideToPrevItem}
        slideToNextItem={slideToNextItem}
        customControls={
          <div>
            <Button
              onClick={() => {
                if (getIsFullscreen()) {
                  exitFullscreen();
                } else {
                  // Pass the ref!
                  enterFullscreen(ref.current);
                }
              }}
            >
              Toggle fullscreen!
            </Button>
          </div>
        }
      >
        {carouselFragment}
      </Playground>
  }
`;

function Carousel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    enterFullscreen,
  } = useSpringCarousel({
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return (
    <Playground
      ref={ref}
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      customControls={
        <div
          className={css`
            display: flex;
            justify-content: center;
            background-color: #fff;
            z-index: 10;
            padding: 1.6rem;
            button {
              border-radius: 8px;
              margin: 0 0.8rem;
            }
          `}
        >
          <Button
            onClick={() => {
              enterFullscreen();
            }}
          >
            Enter fullscreen!
          </Button>
        </div>
      }
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel2() {
  const ref = useRef<HTMLDivElement | null>(null);
  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    enterFullscreen,
    exitFullscreen,
    getIsFullscreen,
  } = useSpringCarousel({
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
    })),
  });
  return (
    <Playground
      ref={ref}
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      customControls={
        <div
          className={css`
            display: flex;
            justify-content: center;
            background-color: #fff;
            z-index: 10;
            padding: 1.6rem;
            button {
              border-radius: 8px;
              margin: 0 0.8rem;
            }
          `}
        >
          <Button
            onClick={() => {
              if (ref.current) {
                if (getIsFullscreen()) {
                  exitFullscreen();
                } else {
                  enterFullscreen(ref.current);
                }
              }
            }}
          >
            Toggle fullscreen!
          </Button>
        </div>
      }
    >
      {carouselFragment}
    </Playground>
  );
}

function UseSpringCarouselFullscreenExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Fullscreen example 1"
      component={<Carousel />}
    />
  );
}
function UseSpringCarouselFullscreenExample2() {
  return (
    <PlaygroundButtonExample
      code={code2}
      title="Fullscreen example 2"
      component={<Carousel2 />}
    />
  );
}

export {
  UseSpringCarouselFullscreenExample,
  UseSpringCarouselFullscreenExample2,
};
