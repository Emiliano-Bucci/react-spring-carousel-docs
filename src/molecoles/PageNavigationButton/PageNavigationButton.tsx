import { Link } from "atoms/Link";
import { PropsWithChildren } from "react";
import { Props as LinkProps } from "atoms/Link";
import { cx, css } from "linaria";
import ArrowIcon from "public/arrow.svg";
import { colors, shadows } from "src/theme";
import { mediaQueries } from "../../mediaQueries";

type Props = PropsWithChildren<{ type: "prev" | "next" } & LinkProps>;

const nextStyles = css`
  && {
    padding-right: 4.8rem;
    align-items: flex-start;
    margin-left: auto;
  }
`;
const nextIconStyles = css`
  right: 8px;
  transform: rotate(90deg);
  a:hover &,
  a:focus & {
    transform: rotate(90deg) translateY(-2px);
  }
  ${mediaQueries.until.tablet} {
    right: 16px;
  }
`;
const prevStyles = css`
  && {
    padding-left: 4.2rem;
    align-items: flex-end;
    margin-right: auto;
  }
`;
const prevIconStyles = css`
  left: 8px;
  transform: rotate(-90deg);
  a:hover &,
  a:focus & {
    transform: rotate(-90deg) translateY(-2px);
  }
  ${mediaQueries.until.tablet} {
    left: 16px;
  }
`;

export function PageNavigationButton({
  type,
  children,
  ...rest
}: Omit<Props, "ref">) {
  return (
    <Link
      variant="none"
      size="none"
      title={`Visit the page ${rest.linkProps.href.toString()}`}
      className={cx(
        type === "next" ? nextStyles : prevStyles,
        css`
          display: flex;
          position: relative;
          justify-content: center;
          flex-direction: column;
          border: 1px solid ${colors.secondaryLight};
          padding: 1.2rem 1.4rem;
          border-radius: 8px;
          transition: all 280ms ease;
          box-shadow: ${shadows.small};
          background-color: #fff;
          min-width: 132px;
          :hover,
          :focus {
            border-color: ${colors.secondaryDarker};
            box-shadow: ${shadows.medium};
          }
          ${mediaQueries.until.tablet} {
            padding: 1.6rem;
          }
        `
      )}
      {...rest}
    >
      <span
        className={css`
          display: block;
          margin-bottom: 0.24rem;
          text-transform: uppercase;
          font-size: 1.4rem;
          transition: color 280ms ease;
          a:hover &,
          a:focus & {
            color: ${colors.secondaryLight};
          }
        `}
      >
        {type}
      </span>
      <span
        className={css`
          font-weight: bold;
          transition: color 280ms ease;
          font-size: 1.8rem;
          a:hover &,
          a:focus & {
            color: ${colors.secondaryLight};
          }
          ${mediaQueries.until.mobile} {
            font-size: 1.6rem;
          }
        `}
      >
        {children}
      </span>
      <ArrowIcon
        className={cx(
          type === "next" ? nextIconStyles : prevIconStyles,
          css`
            width: 12px;
            height: 12px;
            position: absolute;
            transition: all 280ms ease;
            fill: ${colors.primary};
            a:hover &,
            a:focus & {
              fill: ${colors.secondary};
            }
          `
        )}
      />
    </Link>
  );
}
