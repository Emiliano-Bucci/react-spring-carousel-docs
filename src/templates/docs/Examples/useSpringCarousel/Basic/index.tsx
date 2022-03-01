import { css } from "linaria";
import { useSpringCarousel } from "react-spring-carousel";

import { Playground, PlaygroundButtonExample } from "molecoles/Playground";

export const code = `
  import { useSpringCarousel } from 'react-spring-carousel'

  export function Component() {
    const { carouselFragment } = useSpringCarousel({
      items: [
        {
          id: 'item-1',
          renderItem: (
            <div>Item 1</div>
          )
        },
        {
          id: 'item-2',
          renderItem: (
            <div>Item 2</div>
          )
        }
      ]
    })

    return (
      <div>
        {carouselFragment}
      </div>
    );
  }
`;

function Carousel() {
  const { carouselFragment } = useSpringCarousel({
    items: [
      {
        id: "item-1",
        renderItem: (
          <div
            className={css`
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.8rem;
            `}
          >
            Item 1
          </div>
        ),
      },
      {
        id: "item-2",
        renderItem: (
          <div
            className={css`
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.8rem;
            `}
          >
            Item 2
          </div>
        ),
      },
    ],
  });
  return <Playground>{carouselFragment}</Playground>;
}
export function UseSpringCarouselBasicExample() {
  return <PlaygroundButtonExample code={code} component={<Carousel />} />;
}
