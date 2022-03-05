import { HighlightText } from "atoms/HighlightText";
import { SyntaxHiglight } from "atoms/SyntaxHiglight";

const code = `
  // import { useTransitionCarouselContext } from "react-spring-carousel";
  import { useSpringCarouselContext } from "react-spring-carousel";

  const Component = () => {
    const { slideToPrevItem, slideToNextItem } = useSpringCarouselContext()

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
      <h1>Context</h1>
      <p>
        If you have complex and nested carousel item components and you need to
        access to some methods that the hook you're using expose and you don't
        like the prop drilling solution, both hooks expose a context that you
        can import. Through the context you can access to all the methods that
        the parent hook expose.
      </p>
      <SyntaxHiglight code={code} />
      <HighlightText type="warning">
        The context can be only imported in components that are rendered inside
        the <strong>carousel</strong> or inside the <strong>thumbs</strong>{" "}
        containers.
      </HighlightText>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "React Spring Carousel docs - Context",
    },
  };
}
