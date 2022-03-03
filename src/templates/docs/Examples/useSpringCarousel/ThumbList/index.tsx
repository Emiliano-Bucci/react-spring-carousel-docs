import { Playground, PlaygroundButtonExample } from "molecoles/Playground";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";
import { CarouselItem } from "atoms/CarouselItem";
import { CarouselThumb } from "atoms/CarouselThumb";
import { Button } from "atoms/Button";
import { useState } from "react";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      thumbsFragment,
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      withLoop: true,
      withThumbs: true, 
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
        renderThumb: (
          <CarouselThumb color={i.color}>
            {i.title}
          </CarouselThumb>
        )
      })),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
        <div>{thumbsFragment}</div>
      </div>
    );
  }
`;
export const code2 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { 
      carouselFragment, 
      thumbsFragment,
      slideToPrevItem, 
      slideToNextItem,
      slideToItem // -> slide me to the moon
    } = useSpringCarousel({
      withLoop: true,
      withThumbs: true, 
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>
        ),
        renderThumb: (
          <CarouselThumb 
            color={i.color} 
            onClick={() => slideToItem(i.id)}
          />
            {i.title}
          </CarouselThumb>
        )
      })),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
        <div>{thumbsFragment}</div>
      </div>
    );
  }
`;

export const code3 = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const [showExtraItems, setShowExtraItems] = useState(false);
    let items = [...mockedItems];

    if (showExtraItems) {
      items.push(...extraItems);
    } else {
      items = items.filter((i) => !i.id.includes("extra-item"));
    }

    const { 
      carouselFragment, 
      thumbsFragment, 
      slideToPrevItem, 
      slideToNextItem 
    } = useSpringCarousel({
      withThumbs: true,
      prepareThumbsData(items) {
        return [
          ...items,
          {
            id: "Button",
            renderThumb: (
              <button onClick={() => setShowExtraItems((p) => !p)}>
                Toggle items!
              </button>
            ),
          },
        ]
      },
      items: items.map((i) => ({
        id: i.id,
        renderItem: (
          <CarouselItem color={i.color}>
            {i.title}
          </CarouselItem>,
        )
        renderThumb: (
          <CarouselThumb color={i.color}>
            {i.title}
          </CarouselThumb>
        ),
      })),
    });

    return (
      <div>
        <button onClick={slideToPrevItem}>Prev item</button>
        {carouselFragment}
        <button onClick={slideToNextItem}>Next item</button>
        <div>{thumbsFragment}</div>
      </div>
    );
  }
`;
function Carousel1() {
  const { carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      withThumbs: true,
      items: mockedItems.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
        renderThumb: <CarouselThumb color={i.color}>{i.title}</CarouselThumb>,
      })),
    });
  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      thumbsFragment={thumbsFragment}
    >
      {carouselFragment}
    </Playground>
  );
}
function Carousel2() {
  const {
    carouselFragment,
    thumbsFragment,
    slideToPrevItem,
    slideToNextItem,
    slideToItem,
  } = useSpringCarousel({
    withLoop: true,
    withThumbs: true,
    items: mockedItems.map((i) => ({
      id: i.id,
      renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
      renderThumb: (
        <CarouselThumb color={i.color} onClick={() => slideToItem!(i.id)}>
          {i.title}
        </CarouselThumb>
      ),
    })),
  });
  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      thumbsFragment={thumbsFragment}
    >
      {carouselFragment}
    </Playground>
  );
}
const extraItems = [
  {
    id: "extra-item-1",
    title: "Extra item 1",
    color: "#EF6950",
  },
  {
    id: "extra-item-2",
    title: "Extra item 2",
    color: "#2D7D9A",
  },
];
function Carousel3() {
  const [showExtraItems, setShowExtraItems] = useState(false);
  let items = [...mockedItems];

  if (showExtraItems) {
    items.push(...extraItems);
  } else {
    items = items.filter((i) => !i.id.includes("extra-item"));
  }

  const { carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withThumbs: true,
      prepareThumbsData(items) {
        const newItems = [
          ...items,
          {
            id: "Button",
            renderThumb: (
              <Button onClick={() => setShowExtraItems((p) => !p)}>
                Toggle items!
              </Button>
            ),
          },
        ];
        return newItems;
      },
      items: items.map((i) => ({
        id: i.id,
        renderItem: <CarouselItem color={i.color}>{i.title}</CarouselItem>,
        renderThumb: <CarouselThumb color={i.color}>{i.title}</CarouselThumb>,
      })),
    });
  return (
    <Playground
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      thumbsFragment={thumbsFragment}
    >
      {carouselFragment}
    </Playground>
  );
}

function UseSpringCarouselThumbListExample() {
  return (
    <PlaygroundButtonExample
      code={code}
      title="Thumb list example 1"
      component={<Carousel1 />}
    />
  );
}
function UseSpringCarouselThumbListExample2() {
  return (
    <PlaygroundButtonExample
      code={code2}
      title="Thumb list example 2"
      component={<Carousel2 />}
    />
  );
}

function UseSpringCarouselThumbListExample3() {
  return (
    <PlaygroundButtonExample
      code={code3}
      title="Thumb list example 3"
      component={<Carousel3 />}
    />
  );
}

export {
  UseSpringCarouselThumbListExample,
  UseSpringCarouselThumbListExample2,
  UseSpringCarouselThumbListExample3,
};
