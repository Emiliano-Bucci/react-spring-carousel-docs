import { Button } from "atoms/Button";
import { css } from "linaria";
import { ReactNode, useState } from "react";
import { Dialog } from "react-spring-dialog";
import { shadows } from "src/theme";

function CarouselNavigationButton({
  onClick,
  children,
}: {
  onClick(): void;
  children: ReactNode;
}) {
  return (
    <Button
      onClick={onClick}
      className={css`
        border-radius: 8px;
        z-index: 10;
      `}
    >
      {children}
    </Button>
  );
}

type Props = {
  children: ReactNode;
  thumbsFragment?: ReactNode;
  code?: ReactNode;
  slideToPrevItem?(): void;
  slideToNextItem?(): void;
};

export function PlaygroundWrapper({
  children,
  thumbsFragment,
  slideToPrevItem,
  slideToNextItem,
  code,
}: Props) {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <div
        className={css`
          display: flex;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: ${shadows.medium};
          position: relative;
          overflow: hidden;
          box-shadow: ${shadows.medium};
          transition: all 280ms ease;
          :hover  {
            box-shadow: ${shadows.large};
          }
          .item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 280px;
            cursor: grab;
            &:active {
              cursor: grabbing;
            }
          }
        `}
      >
        {children}
        {slideToPrevItem && slideToNextItem && (
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              position: absolute;
              bottom: 24px;
              left: 24px;
              right: 24px;
              background-color: #fff;
              box-shadow: ${shadows.medium};
              z-index: 10;
              border-radius: 8px;
              padding: 1.6rem;
            `}
          >
            {slideToPrevItem && (
              <CarouselNavigationButton onClick={slideToPrevItem}>
                Prev item
              </CarouselNavigationButton>
            )}
            {slideToNextItem && (
              <CarouselNavigationButton onClick={slideToNextItem}>
                Next item
              </CarouselNavigationButton>
            )}
          </div>
        )}
        {code && (
          <div
            className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              top: 24px;
              right: 24px;
              background-color: #fff;
              padding: 1.6rem;
              border-radius: 8px;
              box-shadow: ${shadows.medium};
            `}
          >
            <Button onClick={() => setShowDialog(true)}>Snippet</Button>
          </div>
        )}
      </div>
      {thumbsFragment && (
        <div
          className={css`
            background-color: #fff;
            padding: 3.2rem;
            border-radius: 8px;
            box-shadow: ${shadows.medium};
            overflow: hidden;
            .thumb-item {
              &:not(:last-child) {
                margin-right: 3.2rem;
              }
            }
          `}
        >
          {thumbsFragment}
        </div>
      )}
      {code && (
        <Dialog
          isActive={showDialog}
          onClose={() => setShowDialog(false)}
          className={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 840px;
            background-color: #fff;
            padding: 2.4rem;
            border-radius: 8px;
            overflow: hidden;
            overflow-y: auto;
            max-height: 90%;
          `}
          focusTrapProps={{
            active: false,
          }}
        >
          {code}
          <div
            className={css`
              margin-left: auto;
              margin-top: 1.6rem;
              button {
                font-size: 1.8rem;
                padding: 1.2rem 2rem;
              }
            `}
          >
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </div>
        </Dialog>
      )}
    </>
  );
}
