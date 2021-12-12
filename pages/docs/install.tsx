import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";

const npmInstallCode = `// npm v7+
npm install --save react-spring-carousel`;
const npmOldInstallCode = `// npm v7-
npm install --save react-spring-carousel react-spring`;
const yarnInstallCode = `// yarn
yarn add react-spring-carousel react-spring`;

export default function Page() {
  return (
    <div>
      <h2>Installation</h2>
      <div
        className={css`
          display: grid;
          grid-gap: 1.6rem;
        `}
      >
        <SyntaxHiglight showLineNumbers={false} code={npmInstallCode} />
        <SyntaxHiglight showLineNumbers={false} code={npmOldInstallCode} />
        <SyntaxHiglight showLineNumbers={false} code={yarnInstallCode} />
      </div>
    </div>
  );
}
