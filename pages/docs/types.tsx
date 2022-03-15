import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { HighlightText } from "atoms/HighlightText";
const code = `
  // import { useTransitionCarouselContext } from "react-spring-carousel";
  import { useSpringCarouselContext } from "react-spring-carousel";

  function Component() {
    const { slideToPrevItem, slideToNextItem } = useSpringCarouselContext<"fluid" | "fixed">()

    return (
      <div>
        Carousel item 1
      </div>
    )
  }
`;

export default function Page() {
  return (
    <>
      <h1>Types</h1>
      <p>
        If you're using typescript, you'll find that the library is fully typed
        out of the box. An important thing to keep in mind, however, is that you
        need to type the context to get the correct return types, based on the
        slide type you're using.
      </p>
      <SyntaxHiglight code={code} />
      <HighlightText>
        The only difference in what is being returned depends on the slide type
        you're using in your carousel (some methods are not available when using
        the fluid slide type). Pass the correct slide type and you're done!
      </HighlightText>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "React Spring Carousel docs - Types",
    },
  };
}
