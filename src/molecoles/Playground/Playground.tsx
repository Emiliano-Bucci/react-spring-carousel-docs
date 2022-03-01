import { css } from "linaria";
import { PropsWithChildren } from "react";
import { Button } from "atoms/Button";
import {
  useGlobalPlayground,
  DispatchProps,
} from "templates/docs/Header/NavLayout/GlobalPlayground";

type Props = {
  slideToPrevItem?(): void;
  slideToNextItem?(): void;
};

function Playground({
  children,
  slideToPrevItem,
  slideToNextItem,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
        background-color: #fff;
        overflow: hidden;
        position: relative;
      `}
    >
      {children}
      {slideToPrevItem && slideToNextItem && (
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #fff;
            padding: 1.6rem;
            right: 0;
          `}
        >
          <Button onClick={slideToPrevItem}>Prev item</Button>
          <Button onClick={slideToNextItem}>Next item</Button>
        </div>
      )}
    </div>
  );
}

function PlaygroundButtonExample(props: DispatchProps) {
  const { dispatch } = useGlobalPlayground();

  return (
    <div
      className={css`
        margin-right: auto;
        button {
          padding: 1.6rem 2.4rem;
        }
      `}
    >
      <Button onClick={() => dispatch(props)}>Show example</Button>
    </div>
  );
}

export { Playground, PlaygroundButtonExample };
