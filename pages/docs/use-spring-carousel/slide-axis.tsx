import {
  UseSpringCarouselSlideAxisExample,
  UseSpringCarouselSlideAxisExample2,
} from "templates/docs/Examples/useSpringCarousel/SlideAxis";

export default function Page() {
  return (
    <>
      <h1>Slide axis</h1>
      <p>
        By default, the sliding axis of the carousel is{" "}
        <strong>x - horizontal</strong> but, if you like to, you can change it
        😈
      </p>
      <UseSpringCarouselSlideAxisExample />
      <p>
        Everybody says that the limit is the sky, and that's a cool thing so,
        why should the library go against that cool rule?
      </p>
      <UseSpringCarouselSlideAxisExample2 />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel - Slide axis examples",
    },
  };
}
