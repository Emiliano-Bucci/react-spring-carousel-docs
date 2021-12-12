import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { css } from "linaria";

export function SyntaxHiglight({
  code,
  ...rest
}: { code: string } & SyntaxHighlighterProps) {
  return (
    <SyntaxHighlighter
      showLineNumbers
      style={tomorrow}
      language="jsx"
      {...rest}
      className={css`
        margin: 0 !important;
        border-radius: 8px;
        box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
          0px 6px 15px rgba(0, 0, 0, 0.06);
        .plain-text,
        span {
          color: inherit;
        }
      `}
    >
      {code}
    </SyntaxHighlighter>
  );
}
