import { Header } from "templates/docs/Header";
import { css } from "linaria";
export default function Docs() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <Header />
    </div>
  );
}
