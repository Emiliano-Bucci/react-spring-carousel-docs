import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { css } from "linaria";
import { createContext, ReactNode, useContext, useState } from "react";
import { shadows } from "src/theme";

export type DispatchProps = {
  code: ContextProps["code"];
  component: ContextProps["component"];
};

type ContextProps = {
  code: string;
  component: ReactNode | null;
  dispatch(props: DispatchProps): void;
};

const GlobalPlaygroundContext = createContext<ContextProps | undefined>(
  undefined
);

function GlobalPlaygroundProvider({ children }: { children: ReactNode }) {
  const [state, seteState] = useState<DispatchProps>({
    code: "",
    component: null,
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
  const { code, component } = useGlobalPlayground();
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        background-color: #fff;
        position: sticky;
        top: 0;
        right: 0;
        max-width: 680px;
        height: 100vh;
        width: 100%;
        z-index: 100;
        box-shadow: ${shadows.large};
        & > * {
          flex: 1;
          height: 50%;
        }
      `}
    >
      {code && (
        <div
          className={css`
            pre {
              border-radius: 0px !important;
              height: 100%;
            }
          `}
        >
          <SyntaxHiglight code={code} />
        </div>
      )}
      {component && (
        <div
          className={css`
            overflow: hidden;
            background-color: #fff;
          `}
        >
          {component}
        </div>
      )}
    </div>
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
