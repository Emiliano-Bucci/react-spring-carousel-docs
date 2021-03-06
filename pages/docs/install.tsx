import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { PageNavigationFooter } from "templates/docs/PageNavigationFooter";

const npmInstallCode = `// npm v7.x
npm install --save react-spring-carousel`;
const npmOldInstallCode = `// npm v6.x or less
npm install --save react-spring-carousel react-spring`;
const yarnInstallCode = `// yarn
yarn add react-spring-carousel react-spring`;

export default function Page() {
  return (
    <>
      <h2>Installation</h2>
      <div
        className={css`
          display: grid;
          grid-gap: 3.2rem;
          pre {
            padding: 2.4rem !important;
          }
        `}
      >
        <SyntaxHiglight showLineNumbers={false} code={npmInstallCode} />
        <SyntaxHiglight showLineNumbers={false} code={npmOldInstallCode} />
        <SyntaxHiglight showLineNumbers={false} code={yarnInstallCode} />
      </div>
      <PageNavigationFooter
        prevBtn={{
          label: "Introduction",
          href: "/docs",
        }}
        nextBtn={{
          label: "Premise",
          href: "/docs/premise",
        }}
      />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Install",
    },
  };
}
