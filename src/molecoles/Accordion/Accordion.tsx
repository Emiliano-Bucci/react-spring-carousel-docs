import { HTMLAttributes, useContext, useMemo, useRef, useState } from "react";
import { css, cx } from "linaria";
import { useMeasure } from "utils/useMeasure";
import React from "react";
import { animated, useSpring } from "react-spring";

type RowWithDepth = {
  id: string;
  renderItem: React.ReactNode;
  children?: RowWithDepth[];
  isInitiallyExpanded?: boolean;
  depth: number;
};

// @ts-ignore
export function assignDepth(arr, depth = 0, index = 0) {
  const newArray = [...arr];
  if (index < newArray.length) {
    newArray[index].depth = depth;
    if (
      Array.isArray(arr[index].children) &&
      Array.isArray(newArray[index].children)
    ) {
      assignDepth(newArray[index].children, depth + 1, 0);
    }
    assignDepth(newArray, depth, index + 1);
  }
  return newArray as RowWithDepth[];
}

export type AccordionRow = {
  id: string;
  renderItem: React.ReactNode;
  children?: AccordionRow[];
  shouldBeInteractive?: boolean;
  isInitiallyExpanded?: boolean;
  props?: HTMLAttributes<HTMLDivElement>;
  depth: number;
};

function RowItem({
  renderItem,
  children,
  activeItems,
  toggle,
  id,
  shouldBeInteractive = true,
  isInitiallyExpanded,
  props = {},
  depth,
  getIsExpanded,
  setActiveItem,
  parentId,
}: AccordionRow & {
  activeItems: ActiveItem[];
  toggle: ContextProps["toggle"];
  getIsExpanded: ContextProps["getIsExpanded"];
  setActiveItem: ContextProps["toggle"];
  parentId: string;
}) {
  const [{ ref }, { height }] = useMeasure();
  const { className, ...restProps } = props;
  const initiallyExpanded = useRef(isInitiallyExpanded);
  const isExpanded = getIsExpanded(id);
  const itemHasChildren = Array.isArray(children) && children.length > 0;
  const { height: springHeight } = useSpring({
    immediate: !shouldBeInteractive || initiallyExpanded.current,
    height:
      initiallyExpanded.current || isExpanded || !shouldBeInteractive
        ? height
        : 0,
  });
  function handleToggleItem() {
    toggle(id, parentId, depth);
    initiallyExpanded.current = false;
  }

  function handleOnClick() {
    if (itemHasChildren) {
      handleToggleItem();
    } else {
      setActiveItem(id, parentId, depth);
    }
  }

  return (
    <div
      className={cx(
        className,
        css`
          display: grid;
        `
      )}
      {...restProps}
    >
      <div onClick={shouldBeInteractive ? handleOnClick : undefined}>
        {renderItem}
      </div>
      <animated.div
        style={{
          height:
            !shouldBeInteractive || initiallyExpanded.current
              ? "auto"
              : springHeight,
        }}
        className={css`
          overflow: hidden;
        `}
      >
        <div ref={ref}>
          {itemHasChildren &&
            children.map((child) => (
              <RowItem
                key={child.id}
                {...child}
                parentId={parentId}
                activeItems={activeItems}
                toggle={toggle}
                getIsExpanded={getIsExpanded}
                setActiveItem={setActiveItem}
              />
            ))}
        </div>
      </animated.div>
    </div>
  );
}

type ContextProps = {
  getIsExpanded(id: string): boolean;
  toggle(id: string, parentId: string, depth: number): void;
};

const AccordionContext = React.createContext<ContextProps>({
  getIsExpanded: () => false,
  toggle: () => {},
});

type Props = {
  data: AccordionRow[];
  shouldExpandOnlyOneItem?: boolean;
};

type ActiveItem = { id: string; parentId: string; depth: number };

export function Accordion({ data, shouldExpandOnlyOneItem = true }: Props) {
  const dataWithDepth = useMemo(() => assignDepth(data), [data]);
  const [activeItems, setActiveItems] = useState<ActiveItem[]>(() => {
    const items = [] as ActiveItem[];

    function addItem(item: RowWithDepth, parentId: string) {
      if (item.isInitiallyExpanded) {
        items.push({
          id: item.id,
          depth: item.depth,
          parentId,
        });
      }
    }
    function checkItem(item: RowWithDepth, parentId: string) {
      addItem(item, parentId);

      const childrenItems = item.children;

      if (
        childrenItems &&
        Array.isArray(childrenItems) &&
        childrenItems.length > 0
      ) {
        childrenItems.forEach((i) => checkItem(i, parentId));
      }
    }

    dataWithDepth.forEach((i) => checkItem(i, i.id));
    return items;
  });

  function toggleItems(id: string, parentId: string, depth: number) {
    const item = {
      id,
      depth,
      parentId,
    };

    if (shouldExpandOnlyOneItem) {
      setActiveItems((p) => {
        if (p.some((i) => i.id === item.id)) {
          return [];
        } else {
          return [item];
        }
      });
    } else {
      setActiveItems((p) => {
        if (p.some((i) => i.id === item.id)) {
          return p.filter((v) => v.id !== item.id);
        } else {
          return [...p, item];
        }
      });
    }
  }
  function setActiveItem(id: string, parentId: string, depth: number) {
    setActiveItems((p) => [...p, { id, depth, parentId }]);
  }

  function getIsExpanded(id: string) {
    return activeItems.some((i) => i.id === id);
  }

  return (
    <AccordionContext.Provider
      value={{
        getIsExpanded: getIsExpanded,
        toggle: toggleItems,
      }}
    >
      <div
        className={css`
          display: grid;
        `}
      >
        {dataWithDepth.map((item) => (
          <RowItem
            key={item.id}
            {...item}
            activeItems={activeItems}
            toggle={toggleItems}
            getIsExpanded={getIsExpanded}
            setActiveItem={setActiveItem}
            parentId={item.id}
          />
        ))}
      </div>
    </AccordionContext.Provider>
  );
}

export function useAccordionProvider() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "You should use useAccordionProvider inside <Accordion /> component!"
    );
  }
  return context;
}
