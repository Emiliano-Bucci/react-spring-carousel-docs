import { BasicList } from "molecoles/BasicList";
import { Link } from "atoms/Link";
import { HighlightText } from "atoms/HighlightText";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { css } from "linaria";
import { shadows } from "src/theme";
import { mediaQueries } from "src/mediaQueries";

function LinkItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      variant="none"
      className={css`
        &&&& {
          display: grid;
          align-content: start;
          height: 100%;
          grid-gap: 0.8rem;
          justify-content: stretch;
          background-color: #fff;
          box-shadow: ${shadows.small};
          border-radius: 12px;
          padding: 2.4rem;
          :hover,
          :focus {
            box-shadow: ${shadows.medium};
          }
        }
      `}
      linkProps={{
        href,
      }}
    >
      <h4
        className={css`
          font-size: 2rem;
          font-weight: bold;
        `}
      >
        {title}
      </h4>
      <div>{description}</div>
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <h2 id="premise">Premise</h2>
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
        as expected. Apart from that, the library doesn't apply any extra css or
        came with some fancy .css file that you need to import.
      </HighlightText>
      <h2 id="start">Start!</h2>
      <HighlightText type="warning">
        <strong>Note:</strong> In the following examples, I'll be using some
        wrapper's components and <strong>linaria</strong> for the styling part,
        but remember that the carousel gives you freedom about the tool to use
        for styling. Furthermore, the library <strong>doesn't</strong> come with
        abstracted components. <strong>Everything</strong> is up to you.
      </HighlightText>
      <ul
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 3.2rem;
          margin-top: 3.2rem;
          &&&& {
            list-style: none;
            padding: 0;
            li {
              margin: 0;
            }
          }
          ${mediaQueries.until.tablet} {
            grid-auto-flow: unset;
          }
          ${mediaQueries.until.tabletM} {
            grid-auto-flow: column;
          }
          ${mediaQueries.until.tabletSM} {
            grid-auto-flow: unset;
          }
        `}
      >
        <li>
          <LinkItem
            title="UseSpringCarousel"
            href="/docs/use-spring-carousel"
            description={`With this carousel you'll be able to cover most of your UI needs. You'll be able to create stunning carousels!`}
          />
        </li>
        <li>
          <LinkItem
            title="UseTransitionCarousel"
            href="/docs/use-transition-carousel"
            description="With this hook, you'll be able to create beautiful slideshows. This solution is more specific, but not less important!"
          />
        </li>
      </ul>
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
      onThisPageItems: [
        { id: "premise", label: "Premise" },
        { id: "start", label: "Start" },
      ],
    },
  };
}
