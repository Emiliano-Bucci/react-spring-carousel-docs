import { UseSpringCarouselBasicExample } from "templates/docs/Examples/useSpringCarousel/Basic";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

const componentCode = `<Component />`;

export default function Page() {
  return (
    <>
      <h1>Basic</h1>
      <p>Start using the carousel is simple!</p>
      <UseSpringCarouselBasicExample />
      <p>
        As you can see from the rendering code snippet,{" "}
        <strong>React Spring Carousel</strong> uses a different approach
        compared to what you would normally expect. Instead of rendering the
        component as you would normally do (<strong>{componentCode}</strong>),
        you just need to place the <strong>React Element</strong> that React
        Spring Carousel creates on the first mount (and eventually on the
        subsequent updates). As you could also see, the{" "}
        <strong>renderItem</strong> prop doesn't accept a function; instead, you
        need to pass a <strong>React Element</strong> as well.
      </p>
      <p>
        Why did I took this approach? Mainly for performance reasons. The{" "}
        <strong>useSpringCarousel</strong> hook doesn't leverage on{" "}
        <strong>React State</strong> at all, so there're no rerenders; plus,
        since the whole rendering structure of the carousel isn't a component,
        the rendering tree is very light, and this gives us better animation
        results, since react won't execute any lifecycle for the carousel
        component; in most cases, rerenders are going be <strong>faster</strong>{" "}
        and animations always smooth 🚄.
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
      title: "useSpringCarousel docs - Basic example",
    },
  };
}
