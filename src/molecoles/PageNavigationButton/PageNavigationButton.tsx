import { Link } from "atoms/Link";
import { PropsWithChildren } from "react";
import { Props as LinkProps } from "atoms/Link";
import { cx, css } from "linaria";
import ArrowIcon from "public/arrow.svg";
import { colors } from "src/theme";

type Props = PropsWithChildren<{ type: "prev" | "next" } & LinkProps>;

const nextStyles = css`
  && {
    padding-right: 4.8rem;
    align-items: flex-start;
  }
`;
const nextIconStyles = css`
  right: 12px;
  transform: rotate(90deg);
  a:hover &,
  a:focus & {
    transform: rotate(90deg) translateY(-2px);
  }
`;
const prevStyles = css`
  && {
    padding-left: 4.8rem;
    align-items: flex-end;
  }
`;
const prevIconStyles = css`
  left: 12px;
  transform: rotate(-90deg);
  a:hover &,
  a:focus & {
    transform: rotate(-90deg) translateY(-2px);
  }
`;

export function PageNavigationButton({ type, children, ...rest }: Props) {
  return (
    <Link
      variant="none"
      size="none"
      title={`Visit the page ${rest.linkProps.href.toString()}`}
      {...rest}
      className={cx(
        type === "next" ? nextStyles : prevStyles,
        css`
          display: flex;
          position: relative;
          justify-content: center;
          flex-direction: column;
          border: 1px solid ${colors.primaryLight};
          padding: 1.2rem 1.4rem;
          border-radius: 8px;
          transition: all 280ms ease;
          box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
            0px 6px 15px rgba(0, 0, 0, 0.06);
          :hover,
          :focus {
            border-color: ${colors.primaryLight};
            box-shadow: 0px 1.5px 3.8px rgba(0, 0, 0, 0.03),
              0px 12px 30px rgba(0, 0, 0, 0.12);
          }
        `
      )}
    >
      <span
        className={css`
          display: block;
          margin-bottom: 0.24rem;
          text-transform: uppercase;
          font-size: 1.2rem;
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
          a:hover &,
          a:focus & {
            color: ${colors.secondaryLight};
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
