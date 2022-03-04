import { HighlightText } from "atoms/HighlightText";
import { Link } from "atoms/Link";
import { css } from "linaria";
import {
  UseSpringCarouselDragExample,
  UseSpringCarouselDragExample2,
} from "templates/docs/Examples/useSpringCarousel/Drag";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1>Drag</h1>
      <p>
        Dragging functionality is enabled by default, and under the hood is
        powered by the excelent library of{" "}
        <Link
          variant="default-link"
          size="none"
          title="Visit the @use-gesture website - https://use-gesture.netlify.app/docs"
          target="_blank"
          className={css`
            display: inline;
          `}
          linkProps={{
            href: "https://use-gesture.netlify.app/docs",
          }}
        >
          <strong>@use-gesture</strong>
        </Link>
        . If you want to, you can easily disable it:
      </p>
      <UseSpringCarouselDragExample />
      <p>
        As you may've already noticed, when you start dragging, at some point
        the carousel slides to the previous/next item. That's because there's a
        treshold (defaults to <strong>itemWidth / 4</strong>) that, when
        reached, the carousel triggers the sliding animation. Of course, you can
        configure that treshold 🧐
      </p>
      <HighlightText type="warning">
        <strong>Note</strong>: in order to ensure the best result possible, the
        maximum value that you can pass is the half width of a single carousel
        item.
      </HighlightText>
      <UseSpringCarouselDragExample2 />
      <PageNavigationFooter
        prevBtn={{
          label: "Slide types",
          href: "/docs/use-spring-carousel/slide-types",
        }}
        nextBtn={{
          label: "Slide axis",
          href: "/docs/use-spring-carousel/slide-axis",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel - Drag examples",
    },
  };
}
