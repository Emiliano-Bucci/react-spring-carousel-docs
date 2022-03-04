import { Button } from "atoms/Button";
import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { createContext, ReactNode, useContext, useState } from "react";
import { Dialog } from "react-spring-dialog";
import { colors, shadows } from "src/theme";
import Close from "public/close.svg";
import { a, useTransition } from "@react-spring/web";

export type DispatchProps = {
  title: ContextProps["title"];
  component: ContextProps["component"];
  isActive: ContextProps["isActive"];
  code: ContextProps["code"];
};

type ContextProps = {
  component: ReactNode | null;
  title: string;
  isActive: boolean;
  code: string;
  dispatch(props: DispatchProps): void;
};

const GlobalPlaygroundContext = createContext<ContextProps | undefined>(
  undefined
);

function GlobalPlaygroundProvider({ children }: { children: ReactNode }) {
  const [state, seteState] = useState<DispatchProps>({
    title: "",
    component: null,
    isActive: false,
    code: "",
  });
  return (
    <GlobalPlaygroundContext.Provider
      value={{
        ...state,
        dispatch(props) {
          seteState(props);
        },
      }}
    >
      {children}
    </GlobalPlaygroundContext.Provider>
  );
}

function GlobalPlayground() {
  const { title, component, isActive, dispatch, code } = useGlobalPlayground();
  const syntax = useTransition(isActive, {
    from: {
      opacity: 0,
      x: 32,
    },
    enter: {
      opacity: 1,
      x: 0,
      delay: 60,
    },
    leave: {
      opacity: 0,
      x: -32,
      delay: 60,
    },
  });
  const syntaxFragment = syntax((styles, item) => {
    if (item) {
      return (
        <a.div style={styles}>
          <SyntaxHiglight code={code.trim()} />
        </a.div>
      );
    }
    return null;
  });
  function handleOnClose() {
    dispatch({
      title,
      component,
      code,
      isActive: false,
    });
  }
  return (
    <Dialog
      isActive={isActive}
      onClose={handleOnClose}
      initial={{
        opacity: 0,
        x: 40,
      }}
      enter={{
        opacity: 1,
        x: 0,
      }}
      leave={{
        opacity: 0,
        x: -40,
      }}
      focusTrapProps={{
        active: false,
      }}
      className={css`
        display: flex;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        border-left: 1px solid ${colors.warmDarker};
      `}
    >
      <div
        className={css`
          display: flex;
          flex: 1;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 50%;
            box-shadow: ${shadows.large};
            z-index: 50;
          `}
        >
          {title && (
            <h3
              className={css`
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 3.2rem;
                color: #fff;
                background-color: ${colors.secondary};
                height: 96px;
              `}
            >
              {title}
            </h3>
          )}
          {component && (
            <div
              className={css`
                overflow: hidden;
                background-color: #fff;
                flex: 1;
              `}
            >
              {component}
            </div>
          )}
        </div>
        {code && (
          <div
            className={css`
              display: flex;
              flex: 1;
              width: 50%;
              height: 100% !important;
              background-color: #474769;
              padding: 4rem;
              overflow-y: auto;
              & > * {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border-radius: 8px;
                overflow: hidden;
              }
              pre {
                padding: 3.2rem !important;
                padding-right: 4.8rem !important;
                padding-left: 2.4rem !important;
                max-height: 724px;
              }
            `}
          >
            {syntaxFragment}
          </div>
        )}
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 100;
          height: 96px;
          padding: 2.4rem;
          flex: 1;
        `}
      >
        <Button
          onClick={handleOnClose}
          variant="secondary"
          className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px !important;
            width: 48px;
            height: 48px;
            svg {
              width: 32px;
              height: 32px;
              fill: #fff;
            }
          `}
        >
          <Close />
        </Button>
      </div>
    </Dialog>
  );
}

function useGlobalPlayground() {
  const context = useContext(GlobalPlaygroundContext);
  if (!context) {
    throw new Error("Missing GlobalPlaygroundProvider!");
  }
  return context;
}

export { GlobalPlaygroundProvider, GlobalPlayground, useGlobalPlayground };
