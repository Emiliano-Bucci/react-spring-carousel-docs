import { HighlightText } from "atoms/HighlightText/HighlightText";
import { UseSpringCarouselBasicExample } from "templates/docs/Examples/useSpringCarousel/Basic";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

const componentCode = `<Component />`;

export default function Page() {
  return (
    <>
      <h1>Basic</h1>
      <HighlightText>
        <strong>Note:</strong> In the following examples, i'll be using some
        wrapper's components and <strong>linaria</strong> for the styling part,
        but remember that the carousel gives you freedom about the tool to use
        for styling. Furthermore, the library <strong>doesn't</strong> come with
        abstracted components. <strong>Everything</strong> is up to you.
      </HighlightText>
      <p>To start using the carousel you can do the following:</p>
      <UseSpringCarouselBasicExample />
      <p>
        As you can see from the rendering code snippet,{" "}
        <strong>React Spring Carousel</strong> use a different approach compared
        to what you would normally expect. Instead of rendering the component as
        you would normally do (<strong>{componentCode}</strong>), you just need
        to place the <strong>React Element</strong> that React Spring Carousel
        creates on the first mount (and eventually on the subsequent updates).
        As you could also see, the <strong>renderItem</strong> prop doesn't
        accept a function; instead, you need to pass a{" "}
        <strong>React Element</strong> as well.
      </p>
      <p>
        Why did i take this approach? Mainly for performance reasons. The{" "}
        <strong>useSpringCarousel</strong> hook doesn't leverage on{" "}
        <strong>React State</strong> at all, so there're no rerenders; plus,
        since the whole rendering structure of the carousel isn't a component,
        the rendering tree is very light, and this gives us better animation
        results.
      </p>
      <PageNavigationFooter
        nextBtn={{
          label: "Styled",
          href: "/docs/use-spring-carousel/styled",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Basic example",
    },
  };
}
