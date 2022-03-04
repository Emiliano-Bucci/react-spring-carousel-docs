import { useRef } from "react";
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
  getIsActive: ContextProps["getIsActive"];
  setActiveItem(id: string): void;
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
  getIsActive,
}: Props) {
  const [{ ref }, { height }] = useMeasure();
  const { className, ...restProps } = props;
  const initiallyExpanded = useRef(isInitiallyExpanded);

  const isExpanded = getIsExpanded(id);
  const isActive = getIsActive(id);
  const itemHasChildren = Array.isArray(children) && children.length > 0;

  const { height: springHeight } = useSpring({
    immediate: !shouldBeInteractive || initiallyExpanded.current,
    height:
      initiallyExpanded.current ||
      isExpanded ||
      isActive ||
      !shouldBeInteractive
        ? height
        : 0,
  });
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
                getIsActive={getIsActive}
              />
            ))}
        </div>
      </animated.div>
    </div>
  );
}
