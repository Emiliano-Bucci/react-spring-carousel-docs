import { css } from "linaria";
import { createContext, ReactNode, useContext, useState } from "react";
import { colors } from "src/theme";

export type DispatchProps = {
  title: ContextProps["title"];
  component: ContextProps["component"];
};

type ContextProps = {
  component: ReactNode | null;
  title: string;
  dispatch(props: DispatchProps): void;
};

const GlobalPlaygroundContext = createContext<ContextProps | undefined>(
  undefined
);

function GlobalPlaygroundProvider({ children }: { children: ReactNode }) {
  const [state, seteState] = useState<DispatchProps>({
    title: "",
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
  const { title, component } = useGlobalPlayground();
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
        border-left: 1px solid ${colors.warmDarker};
        & > * {
          flex: 1;
          height: 50%;
        }
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
            max-height: 80px;
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
