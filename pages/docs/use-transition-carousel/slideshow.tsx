import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseTransitionCarouselSlideshowExample } from "templates/docs/Examples/useTransitionCarousel/Slideshow";
import { HighlightText } from "atoms/HighlightText";

export default function Page() {
  return (
    <>
      <h1>Slideshow</h1>
      <p>
        Ok so, how do i build a slideshow? Wll, of coruse, that's a pretty easy
        thing to do with <strong>React Spring Carousel</strong> 🤟
      </p>
      <UseTransitionCarouselSlideshowExample />
      <HighlightText>
        You may wonder why i didn't add this simple functionality inside the
        carousel. The answer is simple: i don't want to force you to do the
        things in my way - aka the way i think it <strong>could</strong> be
        better. Like i give you the methods to trigger the carousel navigation,
        and you decide who and when someone will trigger the carousel
        navigation, i give you total freedom about implementation your own{" "}
        <strong>fade in slideshow</strong>. Or whatever you want to do :)
      </HighlightText>
      <PageNavigationFooter
        prevBtn={{
          label: "Axis animation",
          href: "/docs/use-transition-carousel/axis-animation",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useTransitionCarousel docs - Slideshow example",
    },
  };
}
