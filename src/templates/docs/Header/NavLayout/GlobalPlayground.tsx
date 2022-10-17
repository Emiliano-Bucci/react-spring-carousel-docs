import { Button } from "atoms/Button";
import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { createContext, ReactNode, useContext, useState } from "react";
import { Dialog } from "react-spring-dialog";
import { colors, shadows } from "src/theme";
import Close from "public/close.svg";
import Code from "public/code.svg";
import { a, useTransition } from "@react-spring/web";
import { mediaQueries } from "src/mediaQueries";

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
  const [showCode, setShowCode] = useState(false);
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
        background-color: #474769;
        padding: 4rem;
      `}
    >
      <div
        className={css`
          overflow: hidden;
          border-radius: 16px;
          box-shadow: ${shadows.large};
          display: flex;
          width: 100%;
          ${mediaQueries.until.tablet} {
            flex-direction: column;
            overflow-y: auto;
          }
        `}
      >
        {code && showCode && (
          <div
            className={css`
              display: flex;
              flex: 1;
              width: 100%;
              height: 100%;
              background-color: #474769;
              overflow-y: auto;
              & > * {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                border-radius: 0px;
                overflow: hidden;
              }
              pre {
                width: 100%;
                border-radius: 0px !important;
                padding: 3.2rem !important;
                padding-right: 4.8rem !important;
                padding-left: 2.4rem !important;
                height: 100%;
                ${mediaQueries.until.tablet} {
                  padding: 1.6rem !important;
                  font-size: 1.32rem !important;
                }
              }
              ${mediaQueries.until.tablet} {
                width: 100%;
                height: auto;
                flex: unset;
                flex-shrink: 0;
                padding: 2.4rem;
              }
            `}
          >
            {syntaxFragment}
          </div>
        )}
        <div
          className={css`
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 50%;
            box-shadow: ${shadows.large};
            z-index: 50;
            ${mediaQueries.until.tablet} {
              width: 100%;
              min-height: 480px;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              background-color: ${colors.secondary};
              padding: 2.4rem;
            `}
          >
            {title && (
              <h3
                className={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 2.8rem;
                  color: #fff;
                `}
              >
                {title}
              </h3>
            )}
            <div
              className={css`
                display: grid;
                grid-auto-flow: column;
                grid-gap: 1.6rem;
                margin-left: auto;
                button {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 0px !important;
                  width: 40px;
                  height: 40px;
                }
              `}
            >
              <Button onClick={() => setShowCode((p) => !p)}>
                <Code
                  className={css`
                    stroke: #fff;
                    width: 22px;
                    height: 22px;
                  `}
                />
              </Button>
              <Button onClick={handleOnClose}>
                <Close
                  className={css`
                    fill: #fff;
                    width: 28px;
                    height: 28px;
                  `}
                />
              </Button>
            </div>
          </div>
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
