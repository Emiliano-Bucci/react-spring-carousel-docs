import { HighlightText } from "atoms/HighlightText";
import { Link } from "atoms/Link";
import { UseTransitionCarouselBasicExample } from "templates/docs/Examples/useTransitionCarousel/Basic";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h1>useTransitionCarousel</h1>
      <HighlightText type="warning">
        Most of the properties/behaviors are are shared between{" "}
        <strong>useSpringCarousel</strong> and{" "}
        <strong>useTransitionCarousel</strong>; i suggest to check the first one
        for a complete overview of the capabilities of the library.
      </HighlightText>
      <p>Start using the carousel is simple!</p>
      <UseTransitionCarouselBasicExample />
      <p>
        As you may see, the animation result is slightly different, since the
        hook that powers this version of the carousel works slightly different.
        For more information about how it works, you can check{" "}
        <Link
          size="none"
          variant="default-link"
          target="_blank"
          linkProps={{
            href: "https://react-spring.io/hooks/use-transition",
          }}
        >
          here
        </Link>
        .
      </p>
      <HighlightText type="warning">
        <strong>Note</strong>: Unlike what happen with{" "}
        <strong>useSpringCarousel</strong>, the{" "}
        <strong>useTransitionCarousel</strong> hook makes use of react state,
        aka <strong>useState</strong>, to trigger the carousel navigation.
      </HighlightText>
      <PageNavigationFooter
        nextBtn={{
          label: "Loop",
          href: "/docs/use-transition-carousel/loop",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "useTransitionCarousel docs - Basic example",
    },
  };
}
