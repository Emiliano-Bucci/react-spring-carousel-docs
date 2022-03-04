import { HighlightText } from "atoms/HighlightText";
import { Link } from "atoms/Link";
import {
  UseSpringCarouselFullscreenExample,
  UseSpringCarouselFullscreenExample2,
} from "templates/docs/Examples/useSpringCarousel/Fullscreen";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1>Fullscreen</h1>
      <p>
        For me, this is an <strong>essential</strong> feature that i've hardly
        find ease to use (when implemented 😒) in other libraries. Well,{" "}
        <strong>React Spring Carousel</strong>, of course, make it easy for you
        - thanks to{" "}
        <Link
          size="none"
          variant="default-link"
          target="_blank"
          title="Visit the screenfull npm repo - https://www.npmjs.com/package/screenfull"
          linkProps={{
            href: "https://www.npmjs.com/package/screenfull",
          }}
        >
          <strong>screenfull</strong>
        </Link>{" "}
        library.
      </p>
      <UseSpringCarouselFullscreenExample />
      <p>
        As you may see, entering just the carousel viewport in fullscreen (the
        default behavior) could be useful, but sometimes you'll want to throw
        all your carousel components into the fullscreen world. Well, that's an
        easy task too 😼
      </p>
      <HighlightText type="warning">
        For completeness, and to make the example clear, the following snippet
        will contain all the rendering items that i'll use in the site (my
        custom Playground).
      </HighlightText>
      <UseSpringCarouselFullscreenExample2 />
      <p>
        As you can see, building a toggle fullscreen button is easy as a piece
        of cake! 🥮
      </p>
      <PageNavigationFooter
        prevBtn={{
          label: "Slide axis",
          href: "/docs/use-spring-carousel/slide-axis",
        }}
        nextBtn={{
          label: "Extra",
          href: "/docs/use-spring-carousel/extra",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel docs - Fullscreen example",
    },
  };
}
