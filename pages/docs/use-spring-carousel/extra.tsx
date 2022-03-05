import { HighlightText } from "atoms/HighlightText";
import { Link } from "atoms/Link";
import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

const code = `
  const carousel = useSpringCarousel({
    springConfig: {
      // config props...
    }
  })

  // render stuff...
`;

export default function Page() {
  return (
    <>
      <h2>Built in classNames</h2>
      <p>
        Even if the library tries to do its best to be defined as a{" "}
        <strong>headless UI library</strong>, there might be some cases where we{" "}
        <strong>need</strong> to apply some custom styles to the{" "}
        <strong>hidden</strong> part of the Carousel. Here's the list of the
        classNames that the library applies to the html elements the library
        needs to render to make the Carousel works properly:
      </p>
      <ul>
        <li>use-spring-carousel-main-wrapper</li>
        <li>use-spring-carousel-track-wrapper</li>
        <li>use-spring-carousel-item</li>
        <li>use-spring-carousel-thumbs-wrapper</li>
        <li>thumb-item</li>
      </ul>
      <p>
        You can use the browser inspector to better check where those classNames
        are applied.
      </p>
      <h2>Touch action</h2>
      <p>
        Since the library uses <strong>@use-gesture</strong> for handling the
        touch logic, we sutomatically set the correct css{" "}
        <strong> touch-action</strong>
        value for you.{" "}
        <Link
          size="none"
          target="_blank"
          variant="default-link"
          linkProps={{
            href: "https://use-gesture.netlify.app/docs/extras/",
          }}
        >
          Here
        </Link>{" "}
        you can read more about it.
      </p>
      <HighlightText type="warning">
        When <strong>disableGestures=true</strong>, we automatically set{" "}
        <strong>touch-action: unset</strong>.
      </HighlightText>
      <h2>Spring config</h2>
      <p>
        By default, the library uses the default <strong>react spring</strong>{" "}
        configuration preset. If you like to, you can pass a{" "}
        <strong>springConfig: {}</strong> object. You can check{" "}
        <Link
          size="none"
          variant="default-link"
          target="_blank"
          linkProps={{ href: "https://react-spring.io/common/configs" }}
        >
          here
        </Link>{" "}
        for more information about <strong>react spring</strong> presets.
      </p>
      <SyntaxHiglight code={code} />
      <PageNavigationFooter
        prevBtn={{
          label: "Fullscreen",
          href: "/docs/use-spring-carousel/fullscreen",
        }}
      />
    </>
  );
}
export async function getStaticProps() {
  return {
    props: {
      title: "useSpringCarousel docs - Extra info",
    },
  };
}
