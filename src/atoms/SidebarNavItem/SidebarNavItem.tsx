import { css, cx } from "linaria";
import { colors } from "src/theme";

type Props = {
  label: string;
  isSectionTitle?: boolean;
};

const sectionStyles = css`
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
`;
const itemStyles = css`
  padding: 0.4rem 0.8rem;
`;

export function SidebarNavItem({ label, isSectionTitle = false }: Props) {
  return (
    <div
      className={cx(
        isSectionTitle ? sectionStyles : itemStyles,
        css`
          display: flex;
          align-items: center;
          color: ${colors.secondaryDarker};
        `
      )}
    >
      {!isSectionTitle && (
        <span
          className={css`
            width: 8px;
            height: 8px;
            background: red;
            border-radius: 50%;
          `}
        />
      )}
      <span>{label}</span>
    </div>
  );
}
