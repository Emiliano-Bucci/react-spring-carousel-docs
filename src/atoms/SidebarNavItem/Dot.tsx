import { css, cx } from "linaria";
import { colors } from "src/theme";

const activeStyles = css`
  background-color: ${colors.secondaryDarker} !important;
  border-color: ${colors.secondaryLight} !important;
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
          width: 8px;
          height: 8px;
          transition: all 280ms ease;
          border: 2px solid #d8d8e4;
          border-radius: 50%;
          margin-right: 0.8rem;
        `
      )}
    />
  );
}
