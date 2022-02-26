import { CarouselItem } from "atoms/CarouselItem";
import { CarouselThumb } from "atoms/CarouselThumb";
import { PlaygroundWrapper } from "atoms/PlaygroundWrapper";
import { useState } from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "utils/mockedItems";

function Playground() {
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
    <PlaygroundWrapper
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      thumbsFragment={thumbsFragment}
    >
      {carouselFragment}
    </PlaygroundWrapper>
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
function Playground2() {
  const [showExtraItems, setShowExtraItems] = useState(false);
  let items = [...mockedItems];

  if (showExtraItems) {
    items.push(...extraItems);
  } else {
    items = items.filter((i) => !i.id.includes("extra-item"));
  }

  const { carouselFragment, thumbsFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      withThumbs: true,
      prepareThumbsData(items) {
        const newItems = [
          ...items,
          {
            id: "Button",
            renderThumb: (
              <button onClick={() => setShowExtraItems((p) => !p)}>
                Load more items!
              </button>
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
    <PlaygroundWrapper
      slideToPrevItem={slideToPrevItem}
      slideToNextItem={slideToNextItem}
      thumbsFragment={thumbsFragment}
    >
      {carouselFragment}
    </PlaygroundWrapper>
  );
}

export { Playground, Playground2 };
