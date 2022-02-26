import { BasicList } from "molecoles/BasicList";
import { Link } from "atoms/Link";
import { HighlightText } from "atoms/HighlightText";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

export default function Page() {
  return (
    <>
      <h2>Premise</h2>
      <p>
        The library offers two solutions that should cover all of your UI needs:
      </p>
      <BasicList items={["useSpringCarousel", "useTransitionCarousel"]} />
      <p>
        Both solutions are built on top of two <strong>react-spring</strong>{" "}
        hooks, which respectively are:
      </p>
      <BasicList
        items={[
          <Link
            key="https://react-spring.io/hooks/use-spring"
            title="https://react-spring.io/hooks/use-spring"
            variant="default-link"
            size="none"
            target="_blank"
            linkProps={{
              href: "https://react-spring.io/hooks/use-spring",
            }}
          >
            useSpring
          </Link>,
          <Link
            key="https://react-spring.io/hooks/use-transition"
            title="https://react-spring.io/hooks/use-transition"
            variant="default-link"
            size="none"
            target="_blank"
            linkProps={{
              href: "https://react-spring.io/hooks/use-transition",
            }}
          >
            useTransition
          </Link>,
        ]}
      />
      <HighlightText>
        To be completely honest, the library isn't completely{" "}
        <strong>headless</strong>, since we must render some{" "}
        <strong>{`<div />`}</strong> wrappers and apply some{" "}
        <strong>important</strong> styles to make the carousel work and appear
        as expected. Apart from that, the library doesn't apply any extra css,
        or came with some fancy .css file that you need to import.
      </HighlightText>
      <h2>Start!</h2>
      <PageNavigationFooter
        prevBtn={{
          label: "Install",
          href: "/docs/install",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Premise",
    },
  };
}
