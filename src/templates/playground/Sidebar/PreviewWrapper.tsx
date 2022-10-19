import { ReactNode } from "react";
import { css } from "linaria";
import { PreviewDevice, PreviewDeviceOrientation } from "pages/playground";

type Props = {
  children: ReactNode;
  device: PreviewDevice;
  orientation: PreviewDeviceOrientation;
};

export function PreviewWrapper({ children, device, orientation }: Props) {
  return (
    <div
      data-device={device}
      data-device-orientation={orientation}
      className={css`
        display: flex;
        flex-direction: column;
        flex: 1;
        overflow: hidden;
        position: relative;
        margin: auto;
        width: 100%;
        height: 100%;
        .use-spring-carousel-main-wrapper {
          cursor: grab;
          &:active {
            cursor: grabbing;
          }
        }
        &[data-device="mobile"] {
          &[data-device-orientation="portrait"] {
            max-width: 370px;
            max-height: 667px;
          }
          &[data-device-orientation="landscape"] {
            max-width: 667px;
            max-height: 370px;
          }
          box-shadow: 0 0.5em 2em 0.2em rgba(0, 0, 0, 0.33),
            0 0 0 0.5px #000 inset;
          border-radius: 56px;
          border: 12px solid #111;
        }
        &[data-device="tablet"] {
          &[data-device-orientation="landscape"] {
            max-width: 1024px;
            max-height: 667px;
          }
          &[data-device-orientation="portrait"] {
            max-width: 667px;
            max-height: 90%;
          }
          box-shadow: 0 0.5em 2em 0.2em rgba(0, 0, 0, 0.33),
            0 0 0 0.5px #000 inset;
          border-radius: 48px;
          border: 12px solid #111;
        }
        &[data-device="desktop"] {
          max-width: 94%;
          max-height: 90%;
          box-shadow: 0 0.5em 2em 0.2em rgba(0, 0, 0, 0.33),
            0 0 0 0.5px #000 inset;
          border-radius: 8px;
          border: 20px solid #111;
        }
        &[data-device="laptop"] {
          max-width: 76%;
          max-height: 76%;
          box-shadow: 0 0.5em 2em 0.2em rgba(0, 0, 0, 0.33),
            0 0 0 0.5px #000 inset;
          border-radius: 8px;
          border: 20px solid #111;
        }
      `}
    >
      {children}
      {(device === "desktop" || device === "laptop") && (
        <div
          className={css`
            width: 100%;
            background-color: #111;
            height: 140px;
          `}
        />
      )}
    </div>
  );
}
