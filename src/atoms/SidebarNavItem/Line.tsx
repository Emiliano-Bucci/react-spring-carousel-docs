import { css, cx } from "linaria";
import { colors } from "src/theme";

const activeStyles = css`
  transform: scaleX(1.4);
  background-color: ${colors.secondaryLight} !important;
`;

type Props = {
  isActive: boolean;
};

export function Line({ isActive }: Props) {
  return (
    <span
      className={cx(
        isActive ? activeStyles : undefined,
        css`
          width: 8px;
          height: 4px;
          transition: transform 280ms ease;
          background-color: ${colors.secondaryLight};
          border-radius: 40px;
          margin-right: 0.8rem;
          transform-origin: left;
          margin-top: 0.24rem;
        `
      )}
    />
  );
}
