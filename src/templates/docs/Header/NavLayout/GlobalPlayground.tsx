import { Button } from "atoms/Button";
import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { createContext, ReactNode, useContext, useState } from "react";
import { Dialog } from "react-spring-dialog";
import { colors } from "src/theme";
import Close from "public/close.svg";

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
      focusTrapProps={{
        active: false,
      }}
    >
      <div
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
            flex-direction: column;
            flex: 1;
            width: 50%;
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
              align-items: center;
              justify-content: center;
              flex: 1;
              width: 50%;
              height: 100% !important;
              background-color: #474769;
              padding: 4rem;
              overflow-y: auto;
              pre {
                padding: 3.2rem !important;
                padding-right: 4.8rem !important;
                max-height: 100%;
              }
            `}
          >
            <SyntaxHiglight code={code.trim()} />
          </div>
        )}
      </div>
      <Button
        onClick={handleOnClose}
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 100;
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
