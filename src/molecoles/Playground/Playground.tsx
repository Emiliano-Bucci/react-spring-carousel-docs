import { css, cx } from "linaria";
import { forwardRef, PropsWithChildren, ReactNode } from "react";
import { Button } from "atoms/Button";
import {
  useGlobalPlayground,
  DispatchProps,
} from "templates/docs/Header/NavLayout/GlobalPlayground";
import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { colors } from "src/theme";

type Props = {
  slideToPrevItem?(): void;
  slideToNextItem?(): void;
  thumbsFragment?: ReactNode;
  customControls?: ReactNode;
  className?: string;
};

const Playground = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  (
    {
      children,
      slideToPrevItem,
      slideToNextItem,
      thumbsFragment,
      customControls,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cx(
          className,
          css`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-color: #fff;
            overflow: hidden;
            position: relative;
          `
        )}
      >
        {slideToPrevItem && slideToNextItem && customControls}
        {children}
        {thumbsFragment && (
          <div
            className={cx(
              "thumbs-fragment",
              css`
                padding: 2.4rem;
                background-color: ${colors.warm};
                .use-spring-carousel-thumbs-wrapper {
                  & > *:not(:last-of-type) {
                    margin-right: 1.6rem;
                  }
                }
              `
            )}
          >
            {thumbsFragment}
          </div>
        )}
        {!slideToPrevItem && !slideToNextItem && customControls}
        {slideToPrevItem && slideToNextItem && (
          <div
            className={css`
              display: flex;
              justify-content: space-between;
              background-color: #fff;
              padding: 1.6rem;
              right: 0;
            `}
          >
            <Button variant="secondary" onClick={slideToPrevItem}>
              Prev item
            </Button>
            <Button variant="secondary" onClick={slideToNextItem}>
              Next item
            </Button>
          </div>
        )}
      </div>
    );
  }
);

function PlaygroundButtonExample({
  children,
  code,
  ...rest
}: PropsWithChildren<Omit<DispatchProps, "isActive"> & { code: string }>) {
  const { dispatch } = useGlobalPlayground();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        pre {
          width: 100%;
        }
        button {
          padding: 1.6rem 2.4rem;
          margin: auto;
          margin-top: 3.2rem;
        }
      `}
    >
      <SyntaxHiglight code={code} showLineNumbers={false} />
      <Button
        variant="secondary"
        onClick={() => {
          dispatch({
            ...rest,
            code,
            isActive: true,
          });
        }}
      >
        Open playground
      </Button>
    </div>
  );
}

export { Playground, PlaygroundButtonExample };
