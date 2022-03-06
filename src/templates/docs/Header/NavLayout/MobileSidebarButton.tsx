import { css } from "linaria";
import { mediaQueries } from "src/mediaQueries";
import { Button } from "atoms/Button";
import { a, useSpring } from "@react-spring/web";

type Props = {
  isActive: boolean;
  onClick(): void;
};

const config = {
  tension: 480,
};

export function MobileSidebarButton({ onClick, isActive }: Props) {
  const startStyles = useSpring({
    y: isActive ? 4 : 0,
    x: isActive ? 2 : 0,
    rotate: isActive ? 50 : 0,
    config,
  });
  const centerStyles = useSpring({
    rotate: isActive ? -45 : 0,
    config,
  });
  const endStyles = useSpring({
    y: isActive ? -3 : 0,
    x: isActive ? -2 : 0,
    rotate: isActive ? -130 : 0,
    config,
  });
  return (
    <Button
      variant="secondary"
      onClick={onClick}
      className={css`
        && {
          display: none;
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          z-index: 150;
          flex-direction: column;
          ${mediaQueries.until.tabletM} {
            display: flex;
          }
          span {
            display: flex;
            svg,
            g,
            path {
              fill: #fff !important;
            }
          }
        }
      `}
    >
      <a.div
        style={startStyles}
        className={css`
          width: 12px;
          height: 4px;
          border-radius: 20px;
          background-color: #fff;
          margin-right: auto;
          margin-bottom: 0.4rem;
        `}
      />
      <a.div
        style={centerStyles}
        className={css`
          width: 100%;
          height: 4px;
          border-radius: 20px;
          background-color: #fff;
          margin-bottom: 0.4rem;
        `}
      />
      <a.div
        style={endStyles}
        className={css`
          width: 12px;
          height: 4px;
          border-radius: 20px;
          background-color: #fff;
          margin-left: auto;
          transform-origin: center;
        `}
      />
    </Button>
  );
}
