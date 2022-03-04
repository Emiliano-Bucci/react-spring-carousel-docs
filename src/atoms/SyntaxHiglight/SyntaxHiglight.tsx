import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cx } from "linaria";
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
      customStyle={{
        margin: 0,
        borderRadius: "8px",
        boxShadow: shadows.medium,
        fontSize: "1.4rem",
        backgroundColor: "#393954",
      }}
      className={cx("code-snippet")}
    >
      {code}
    </SyntaxHighlighter>
  );
}
