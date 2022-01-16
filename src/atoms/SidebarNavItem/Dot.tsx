import { css, cx } from "linaria";
import { colors } from "src/theme";

const activeStyles = css`
  background-color: ${colors.secondaryDarker};
  color: ${colors.secondaryDarker} !important;
`;
type Props = {
  isActive: boolean;
};

export function Dot({ isActive }: Props) {
  return (
    <span
      className={cx(
        isActive ? activeStyles : undefined,
        css`
          width: 12px;
          height: 12px;
          transition: background-color 280ms ease;
          border: 2px solid ${colors.secondaryDarker};
          border-radius: 50%;
          margin-right: 0.8rem;
        `
      )}
    />
  );
}
