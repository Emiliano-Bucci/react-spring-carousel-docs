import { Link } from "atoms/Link";
import { css } from "linaria";
import { colors } from "src/theme";
import { Dot } from "./Dot";
import { Line } from "./Line";

type Props = {
  label: string;
  isSectionTitle?: boolean;
  isActive?: boolean;
  href?: string;
  isChild?: boolean;
};

export function SidebarNavItem({
  label,
  isSectionTitle = false,
  isActive = false,
  href = "",
  isChild = false,
}: Props) {
  if (isSectionTitle) {
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 0.4rem;
          span {
            color: #bebed3;
          }
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
        display: flex;
        color: #d8d8e4;
        padding: 0.4rem 0.8rem;
        cursor: pointer;
        align-items: center;
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
      {isChild ? <Line isActive={isActive} /> : <Dot isActive={isActive} />}
      <span>{label}</span>
    </Link>
  );
}
