import { BasicList } from "molecoles/BasicList";
import { Link } from "atoms/Link";
import { HighlightText } from "atoms/HighlightText";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";
import { css } from "linaria";
import { colors, shadows } from "src/theme";
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
        display: grid;
        grid-gap: 0.8rem;
        text-align: center;
        justify-content: stretch;
        && {
          background-color: #fff;
          box-shadow: ${shadows.small};
          border-radius: 8px;
          padding: 1.6rem;
          padding-bottom: 2.4rem;
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
          background-color: ${colors.secondary};
          color: #fff;
          box-shadow: ${shadows.medium};
          border-radius: 8px;
          padding: 1.2rem 0.8rem;
        `}
      >
        {title}
      </h4>
      <div
        className={css`
          max-width: 380px;
          margin: auto;
          margin-top: 0.8rem;
        `}
      >
        {description}
      </div>
    </Link>
  );
}

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
      <HighlightText type="warning">
        <strong>Note:</strong> In the following examples, i'll be using some
        wrapper's components and <strong>linaria</strong> for the styling part,
        but remember that the carousel gives you freedom about the tool to use
        for styling. Furthermore, the library <strong>doesn't</strong> come with
        abstracted components. <strong>Everything</strong> is up to you.
      </HighlightText>
      <ul
        className={css`
          display: grid;
          grid-gap: 3.2rem;
          grid-auto-flow: column;
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
            title="useSpringCarousel"
            href="/docs/use-spring-carousel"
            description={`With this carousel you'll be able to cover most of your UI needs. You'll be able to create stunning carousels!`}
          />
        </li>
        <li>
          <LinkItem
            title="useTransitionCarousel"
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
    },
  };
}
