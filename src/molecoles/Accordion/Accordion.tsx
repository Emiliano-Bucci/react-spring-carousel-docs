import {
  HTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { css } from "linaria";
import React from "react";
import { RowItem, RowWithDepth } from "./RowItem";

// @ts-ignore
export function assignDepth(arr, depth = 0, index = 0) {
  const newArray = [...arr];
  if (index < newArray.length) {
    newArray[index].depth = depth;
    newArray[index].index = index;
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

type OnItemShouldExpandProps = {
  isExpanded: boolean;
};

export type ContextProps = {
  getIsExpanded(id: string): boolean;
  toggle(id: string, parentId: string, depth: number, index: number): void;
  getActiveItems(): ActiveItem[];
};

const AccordionContext = React.createContext<ContextProps | undefined>(
  undefined
);

export type AccordionRow = {
  id: string;
  renderItem: React.ReactNode;
  children?: AccordionRow[];
  shouldBeInteractive?: boolean;
  isInitiallyExpanded?: boolean;
  props?: HTMLAttributes<HTMLDivElement>;
  extraChildrenSlot?: ReactNode;
  onItemShouldExpand?(props: OnItemShouldExpandProps): void;
};

type Props = {
  data: AccordionRow[];
  shouldExpandOnlyOneItem?: boolean;
};

export type ActiveItem = {
  id: string;
  parentId: string;
  depth: number;
  index: number;
  isExpanded: boolean;
};

export function Accordion({ data, shouldExpandOnlyOneItem = true }: Props) {
  const dataWithDepth = useMemo(() => assignDepth(data), [data]);
  function initializeData(_data: RowWithDepth[]) {
    const items = [] as ActiveItem[];

    function addItem(item: RowWithDepth, parentId: string, index: number) {
      if (item.isInitiallyExpanded) {
        items.push({
          id: item.id,
          depth: item.depth,
          parentId,
          index,
          isExpanded: true,
        });
      }
    }
    function checkItem(item: RowWithDepth, parentId: string, index: number) {
      const childrenItems = item.children;
      const itemIsParent =
        childrenItems &&
        Array.isArray(childrenItems) &&
        childrenItems.length > 0;

      addItem(item, parentId, index);

      if (itemIsParent) {
        childrenItems.forEach((i, indx) => checkItem(i, parentId, indx));
      }
    }

    _data.forEach((i, indx) => checkItem(i, i.id, indx));
    return items;
  }
  const [activeItems, setActiveItems] = useState<ActiveItem[]>(() =>
    initializeData(dataWithDepth)
  );

  function toggleItems(
    id: string,
    parentId: string,
    depth: number,
    index: number
  ) {
    const item = {
      id,
      depth,
      parentId,
      index,
      isExpanded: true,
    };

    if (shouldExpandOnlyOneItem) {
      setActiveItems((p) => {
        if (p.some((i) => i.id === item.id)) {
          return [];
        } else {
          return [item, ...initializeData(dataWithDepth)];
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
  function setActiveItem(
    id: string,
    parentId: string,
    depth: number,
    index: number
  ) {
    setActiveItems((p) => {
      const existingItem = p.find((item) => item.id === id);

      if (existingItem) {
        existingItem.isExpanded = true;
        return [...p];
      }
      return [...p, { id, depth, parentId, index, isExpanded: true }];
    });
  }
  function getIsExpanded(id: string) {
    return !!activeItems.find((i) => i.id === id)?.isExpanded;
  }

  useEffect(() => {
    setActiveItems(initializeData(dataWithDepth));
  }, [dataWithDepth]);

  return (
    <AccordionContext.Provider
      value={{
        getIsExpanded: getIsExpanded,
        toggle: toggleItems,
        getActiveItems() {
          return activeItems;
        },
      }}
    >
      <div
        className={css`
          display: grid;
        `}
      >
        {dataWithDepth.map((item, indx) => (
          <RowItem
            {...item}
            key={item.id}
            activeItems={activeItems}
            toggle={toggleItems}
            getIsExpanded={getIsExpanded}
            setActiveItem={setActiveItem}
            parentId={item.id}
            index={indx}
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
