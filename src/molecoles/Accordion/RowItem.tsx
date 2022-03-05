import { useEffect, useRef } from "react";
import { css, cx } from "linaria";
import { useMeasure } from "utils/useMeasure";
import { animated, useSpring } from "react-spring";
import React from "react";
import { AccordionRow, ContextProps, ActiveItem } from "./Accordion";

export type RowWithDepth = Omit<AccordionRow, "children"> & {
  id: string;
  renderItem: React.ReactNode;
  children?: RowWithDepth[];
  isInitiallyExpanded?: boolean;
  depth: number;
};

export type Props = RowWithDepth & {
  activeItems: ActiveItem[];
  toggle: ContextProps["toggle"];
  getIsExpanded: ContextProps["getIsExpanded"];
  setActiveItem(id: string): void;
  isExpanded: boolean;
  parentId: string;
};

export function RowItem({
  renderItem,
  children,
  activeItems,
  toggle,
  id,
  shouldBeInteractive = true,
  isInitiallyExpanded,
  props = {},
  getIsExpanded,
  setActiveItem,
  parentId,
  onItemShouldExpand,
  extraChildrenSlot,
  isExpanded,
}: Props) {
  const [{ ref }, { height }] = useMeasure();
  const { className, ...restProps } = props;
  const initiallyExpanded = useRef(isInitiallyExpanded);
  const itemHasChildren = Array.isArray(children) && children.length > 0;
  const isFirstMount = useRef(true);
  const { height: springHeight } = useSpring({
    immediate: !shouldBeInteractive || initiallyExpanded.current,
    height:
      initiallyExpanded.current || isExpanded || !shouldBeInteractive
        ? height
        : 0,
  });

  useEffect(() => {
    if (!isFirstMount.current) {
      initiallyExpanded.current = false;
    }
    isFirstMount.current = false;
  }, [isExpanded]);

  function handleToggleItem() {
    initiallyExpanded.current = false;

    if (onItemShouldExpand) {
      onItemShouldExpand({
        isExpanded: !isExpanded,
        toggle: () => toggle(id),
      });
    } else {
      toggle(id);
    }
  }

  function handleOnClick() {
    if (itemHasChildren) {
      handleToggleItem();
    } else {
      setActiveItem(id);
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
          position: relative;
        `}
      >
        {extraChildrenSlot}
        <div ref={ref}>
          {itemHasChildren &&
            children.map((child) => (
              <RowItem
                {...child}
                key={child.id}
                parentId={parentId}
                activeItems={activeItems}
                toggle={toggle}
                getIsExpanded={getIsExpanded}
                setActiveItem={setActiveItem}
                isExpanded={getIsExpanded(child.id)}
              />
            ))}
        </div>
      </animated.div>
    </div>
  );
}
