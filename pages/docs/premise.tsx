import { NextSeo } from "next-seo";
import { BasicList } from "molecoles/BasicList";
import { Link } from "atoms/Link";
export default function Page() {
  return (
    <>
      <NextSeo title="Premise - React Spring Carousel" />
      <h2>Premise</h2>
      <p>The library cames with two solutions depending on your needs:</p>
      <BasicList items={["useSpringCarousel", "useTransitionCarousel"]} />
      <p>
        Both solutions are built on top of two of <strong>react-spring</strong>{" "}
        hooks, which respectively are:
      </p>
      <BasicList
        items={[
          <Link
            key="https://react-spring.io/hooks/use-spring"
            title="https://react-spring.io/hooks/use-spring"
            variant="none"
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
            variant="none"
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
    </>
  );
}
