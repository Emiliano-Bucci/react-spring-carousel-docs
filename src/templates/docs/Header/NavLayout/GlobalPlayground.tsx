import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { createContext, ReactNode, useContext, useState } from "react";
import { Dialog } from "react-spring-dialog";
import { colors } from "src/theme";

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
  console.log(code);
  return (
    <Dialog
      isActive={isActive}
      focusTrapProps={{
        active: false,
      }}
      onClose={() => {
        dispatch({
          title,
          component,
          code,
          isActive: false,
        });
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
          pre {
            box-shadow: none !important;
            border-radius: 0px !important;
            height: 100% !important;
            flex: 1;
            width: 50%;
          }
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
                background-color: ${colors.primaryLight};
                height: 80px;
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
        {code && <SyntaxHiglight code={code} />}
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
