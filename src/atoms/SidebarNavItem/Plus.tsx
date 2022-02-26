import { css, cx } from "linaria";
import { colors } from "src/theme";

const activeStyles = css`
  transform: rotate(90deg);
  span {
    background-color: ${colors.secondaryLight} !important;
    &:first-child {
      opacity: 0;
    }
  }
`;

type Props = {
  isActive: boolean;
};

export function Plus({ isActive }: Props) {
  return (
    <div
      className={cx(
        isActive && activeStyles,
        css`
          display: flex;
          flex-direction: column;
          position: relative;
          margin-right: 0.8rem;
          transition: all 280ms ease;
        `
      )}
    >
      <span
        className={css`
          width: 14px;
          height: 4px;
          border-radius: 20px;
          background-color: ${colors.warm};
          transition: all 280ms ease;
        `}
      />
      <span
        className={css`
          width: 14px;
          height: 4px;
          background-color: ${colors.warm};
          position: absolute;
          border-radius: 20px;
          transform: rotate(90deg);
          transition: all 280ms ease;
        `}
      />
    </div>
  );
}
