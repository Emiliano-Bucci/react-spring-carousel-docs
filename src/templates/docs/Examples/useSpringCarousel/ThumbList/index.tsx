import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { Playground, Playground2 } from "./Playground";

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

function UseSpringCarouselThumbListExample() {
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

function UseSpringCarouselThumbListExampl2() {
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

export { UseSpringCarouselThumbListExample, UseSpringCarouselThumbListExampl2 };
