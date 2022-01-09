import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { css } from "linaria";
import { shadows } from "src/theme";

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
        box-shadow: ${shadows.small};
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
