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
  toggle(): void;
};

export type ContextProps = {
  getIsExpanded(id: string): boolean;
  getIsActive(id: string): boolean;
  toggle(id: string): void;
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
  isActive: boolean;
};

export function Accordion({ data, shouldExpandOnlyOneItem = true }: Props) {
  const dataWithDepth = useMemo(() => assignDepth(data), [data]);
  function initializeData(_data: RowWithDepth[]) {
    const items = [] as ActiveItem[];

    function addItem(item: RowWithDepth, parentId: string, index: number) {
      const childrenItems = item.children;
      const itemIsParent =
        childrenItems &&
        Array.isArray(childrenItems) &&
        childrenItems.length > 0;

      items.push({
        id: item.id,
        depth: item.depth,
        parentId,
        index,
        isExpanded: itemIsParent ? !!item.isInitiallyExpanded : false,
        isActive: !!item.isInitiallyExpanded,
      });
    }
    function checkItem(item: RowWithDepth, parentId: string, index: number) {
      const childrenItems = item.children;
      const itemIsParent =
        childrenItems &&
        Array.isArray(childrenItems) &&
        childrenItems.length > 0;

      addItem(item, parentId, index);

      if (itemIsParent) {
        childrenItems.forEach((i, indx) => {
          checkItem(i, item.id, indx);
        });
      }
    }

    _data.forEach((i, indx) => checkItem(i, "", indx));
    return items;
  }
  const [activeItems, setActiveItems] = useState<ActiveItem[]>(() =>
    initializeData(dataWithDepth)
  );

  function toggleItems(id: string) {
    if (shouldExpandOnlyOneItem) {
      setActiveItems((p) => {
        const newExpandedItem = p.find((i) => i.id === id);
        const currentExpandedItem = p.find((i) => i.isExpanded);

        if (currentExpandedItem?.id === newExpandedItem?.id) {
          currentExpandedItem!.isActive = false;
          currentExpandedItem!.isExpanded = false;
          return [...p];
        }

        if (!currentExpandedItem && newExpandedItem) {
          newExpandedItem.isExpanded = true;
          newExpandedItem.isActive = true;
        }
        if (currentExpandedItem && newExpandedItem) {
          currentExpandedItem.isExpanded = false;
          currentExpandedItem.isActive = false;

          const prevCurrentExpandedActiveItems = p.find(
            (p) => p.isActive && p.parentId === currentExpandedItem.id
          );
          if (prevCurrentExpandedActiveItems) {
            prevCurrentExpandedActiveItems.isActive = false;
          }

          newExpandedItem.isExpanded = true;
          newExpandedItem.isActive = true;
        }

        return [...p];
      });
    } else {
      setActiveItems((p) => {
        const newExpandedItem = p.find((i) => i.id === id);
        const currentExpandedItem = p.find((i) => i.isExpanded);

        if (currentExpandedItem?.id === newExpandedItem?.id) {
          currentExpandedItem!.isActive = false;
          currentExpandedItem!.isExpanded = false;
          return [...p];
        }
        if (!currentExpandedItem && newExpandedItem) {
          newExpandedItem.isExpanded = !newExpandedItem.isExpanded;
          newExpandedItem.isActive = !newExpandedItem.isActive;
        }
        if (currentExpandedItem && newExpandedItem) {
          currentExpandedItem.isActive = false;
          newExpandedItem.isExpanded = !newExpandedItem.isExpanded;
          newExpandedItem.isActive = !newExpandedItem.isActive;
        }

        return [...p];
      });
    }
  }
  function setActiveItem(id: string) {
    setActiveItems((p) => {
      const newActiveItem = p.find((item) => item.id === id);
      const currentActiveItem = p.find(
        (item) => item.isActive && !item.isExpanded
      );

      if (newActiveItem) {
        newActiveItem.isActive = true;
      }
      if (currentActiveItem) {
        currentActiveItem.isActive = false;
      }

      return [...p];
    });
  }
  function getIsExpanded(id: string) {
    return !!activeItems.find((i) => i.id === id)?.isExpanded;
  }
  function getIsActive(id: string) {
    return !!activeItems.find((i) => i.id === id)?.isActive;
  }

  useEffect(() => {
    setActiveItems(initializeData(dataWithDepth));
  }, [dataWithDepth]);

  return (
    <AccordionContext.Provider
      value={{
        toggle: toggleItems,
        getIsExpanded,
        getIsActive,
        getActiveItems: () => activeItems,
      }}
    >
      <div
        className={css`
          display: grid;
        `}
      >
        {dataWithDepth.map((item) => (
          <RowItem
            {...item}
            key={item.id}
            activeItems={activeItems}
            toggle={toggleItems}
            getIsExpanded={getIsExpanded}
            setActiveItem={setActiveItem}
            getIsActive={getIsActive}
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
