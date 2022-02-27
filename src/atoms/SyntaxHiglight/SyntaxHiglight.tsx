import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { css, cx } from "linaria";
import { shadows } from "src/theme";

export function SyntaxHiglight({
  code,
  ...rest
}: { code: string } & SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter
      showLineNumbers
      style={tomorrow}
      language="tsx"
      {...rest}
      className={cx(
        "code-snippet",
        css`
          margin: 0 !important;
          border-radius: 8px;
          box-shadow: ${shadows.medium};
          background-color: #393954 !important;
          font-size: 1.4rem !important;
          .plain-text,
          span {
            color: inherit;
          }
        `
      )}
    >
      {code}
    </SyntaxHighlighter>
  );
}
