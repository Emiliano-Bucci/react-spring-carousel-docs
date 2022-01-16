import { css } from "linaria";
import { isValidElement, ReactElement } from "react";

type Props = {
  items: (string | ReactElement)[];
};

export function BasicList({ items }: Props) {
  return (
    <ul
      className={css`
        &:not(:last-child) {
          margin-bottom: 3.2rem;
        }
      `}
    >
      {items.map((i) => (
        <li key={isValidElement(i) ? i.key : i}>{i}</li>
      ))}
    </ul>
  );
}
