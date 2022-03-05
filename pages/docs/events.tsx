import { HighlightText } from "atoms/HighlightText";
import { EventsExample } from "templates/docs/Examples/events";
import { colors, shadows } from "src/theme";
import { css } from "linaria";

import { SyntaxHiglight } from "atoms/SyntaxHiglight";
import { mediaQueries } from "src/mediaQueries";

const onSlideStartChangeCode = `{
  // Indicates where you're sliding to
  slideActionType: 'prev' | 'next', 
  // Props of the next active item
  nextItem: { 
    id: string
    index: number
  }
}`;
const onSlideChangeCode = `{
  // Indicates where the slide came from
  slideActionType: 'prev' | 'next', 
  // Props of the current active item
  currentItem: { 
    id: string
    index: number
  }
}`;
const onFullscreenChangeCode = `{
  isFullscreen: boolean
}`;
const onDragCode = `{
  // Indicates the direction of the drag action
  slideActionType: 'prev' | 'next', 
  /* 
  * For all other props you'll get, 
  * please refer to https://use-gesture.netlify.app/docs/state/
  **/
  ...useGestureProps
}`;

type Props = {
  title: string;
  description: string;
  extraProps?: string;
};

function TypeDescriptor({ title, description, extraProps }: Props) {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 1.2rem;
        justify-items: start;
        background-color: #fff;
        border: 1px solid ${colors.warmDarker};
        border-radius: 8px;
        padding: 3.2rem;
        box-shadow: ${shadows.small};
        ${mediaQueries.until.tabletSM} {
          padding: 2.4rem;
        }
      `}
    >
      <span
        className={css`
          display: block;
          font-size: 2rem;
          background-color: ${colors.secondary};
          color: #fff;
          border-radius: 8px;
          padding: 0.8rem 1.6rem;
          box-shadow: ${shadows.small};
          margin-bottom: 1.2rem;
          ${mediaQueries.until.tabletSM} {
            margin-bottom: 0.4rem;
            font-size: 1.8rem;
          }
        `}
      >
        {title}
      </span>
      <div>
        <strong>Description</strong>: {description}
      </div>
      {extraProps && (
        <div
          className={css`
            display: grid;
            grid-gap: 0.8rem;
            width: 100%;
            pre {
              width: 100%;
            }
          `}
        >
          <strong>Extra event props:</strong>
          <SyntaxHiglight showLineNumbers={false} code={extraProps} />
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <h1>Events</h1>
      <p>
        If you're wondering how to <strong>react</strong> to the carousel
        actions, you're in the right section 🥳
      </p>
      <EventsExample />
      <HighlightText>
        Keep in mind that the events will unsubscribe automatically 🤓
      </HighlightText>
      <p>
        Every event will also came with some extra/useful data that you can
        eventually use; remember also that epending on the hook you're using,
        the events will slightly vary:
      </p>
      <h2>useSpringCarousel events</h2>
      <div
        className={css`
          display: grid;
          grid-gap: 3.2rem;
        `}
      >
        <TypeDescriptor
          title="onSlideStartChange"
          description="Event emitted every time an item is about to slide."
          extraProps={onSlideStartChangeCode}
        />
        <TypeDescriptor
          title="onSlideChange"
          description="Event emitted when a slide animation is completed (when react spring calls the onRest() callback)."
          extraProps={onSlideChangeCode}
        />
        <TypeDescriptor
          title="onFullscreenChange"
          description="Event emitted when you enter/exit from fullscreen mode."
          extraProps={onFullscreenChangeCode}
        />
        <TypeDescriptor
          title="onDrag"
          description="Event emitted when you start to drag."
          extraProps={onDragCode}
        />
      </div>
      <h2>useTransitionCarousel events</h2>
      <div
        className={css`
          display: grid;
          grid-gap: 3.2rem;
        `}
      >
        <TypeDescriptor
          title="onSlideStartChange"
          description="Event emitted every time an item is about to slide."
          extraProps={onSlideStartChangeCode}
        />
        <TypeDescriptor
          title="onSlideChange"
          description="Event emitted when a slide animation is completed (when react spring calls the onRest() callback)."
          extraProps={onSlideChangeCode}
        />
        <TypeDescriptor
          title="onFullscreenChange"
          description="Event emitted when you enter/exit from fullscreen mode."
          extraProps={onFullscreenChangeCode}
        />
        <TypeDescriptor
          title="onLeftSwipe"
          description="Event emitted when you swipe to the left."
        />
        <TypeDescriptor
          title="onRightSwipe"
          description="Event emitted when you swipe to the left."
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "React Spring Carousel docs - Events",
    },
  };
}
