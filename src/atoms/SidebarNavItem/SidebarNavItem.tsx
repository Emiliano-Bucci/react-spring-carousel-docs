import { Link } from "atoms/Link";
import { css, cx } from "linaria";
import { colors } from "src/theme";

type Props = {
  label: string;
  isSectionTitle?: boolean;
  isActive?: boolean;
  href?: string;
};

const activeStyles = css`
  background-color: ${colors.secondaryLight};
  color: ${colors.secondaryLight} !important;
`;

export function SidebarNavItem({
  label,
  isSectionTitle = false,
  isActive = false,
  href = "",
}: Props) {
  if (isSectionTitle) {
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          color: ${colors.secondaryDarker};
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
        `}
      >
        <span>{label}</span>
      </div>
    );
  }

  return (
    <Link
      variant="none"
      size="none"
      className={css`
        color: ${colors.secondaryDarker};
        padding: 0.4rem 0.8rem;
        cursor: pointer;
        justify-content: flex-start;
        transition: color 280ms ease;
        span {
          color: inherit;
        }
        :hover,
        :focus {
          color: ${colors.secondaryLight};
        }
      `}
      linkProps={{
        href,
      }}
    >
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
      <span>{label}</span>
    </Link>
  );
}
