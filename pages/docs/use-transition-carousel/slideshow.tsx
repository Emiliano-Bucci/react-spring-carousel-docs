import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { UseTransitionCarouselSlideshowExample } from "templates/docs/Examples/useTransitionCarousel/Slideshow";
import { HighlightText } from "atoms/HighlightText";

export default function Page() {
  return (
    <>
      <h1>Slideshow</h1>
      <p>
        Ok so, how do I build a slideshow? Well, of course, that's a pretty easy
        thing to do with <strong>React Spring Carousel</strong> 🤟
      </p>
      <UseTransitionCarouselSlideshowExample />
      <HighlightText>
        You may wonder why I didn't add this simple functionality inside the
        carousel. The answer is simple: I don't want to force you to do the
        things in my way - aka the way I think it <strong>could</strong> be
        better. Like I give you the methods to trigger the carousel navigation,
        and you decide who and when someone will trigger the carousel
        navigation, I give you total freedom about implementation your own{" "}
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
