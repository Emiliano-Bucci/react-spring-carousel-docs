import { css } from "linaria";
import { colors } from "theme";
import { Radio } from "./Radio";
import { Props as PlaygroundState } from "../../../../pages/playground";
import { Switch } from "./Switch";
import { BaseOption } from "./BaseOption";

type BaseOption = {
  id: string;
  label: keyof PlaygroundState;
};

type SelectOption = BaseOption & {
  type: "select";
  options: Array<string | number>;
};

type ToggleOption = BaseOption & {
  type: "toggle";
};

type Options = SelectOption | ToggleOption;

const configs = {
  useSpringCarousel: [
    {
      id: "withLoop",
      label: "withLoop",
      type: "toggle",
    },
    {
      id: "itemsPerSlide",
      label: "itemsPerSlide",
      type: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
  ] as Options[],
  useTransitionCarousel: [{}] as Options[],
};

type Props = {
  onChange(state: Partial<PlaygroundState>): void;
  state: PlaygroundState;
};

export function Sidebar({ onChange, state }: Props) {
  return (
    <aside
      className={css`
        display: grid;
        grid-gap: 2.4rem;
        align-content: start;
        width: 348px;
        height: calc(100vh - 56px);
        background-color: ${colors.dark};
        padding: 1.6rem;
        color: ${colors.warmLight};
      `}
    >
      <div
        className={css`
          display: grid;
          grid-gap: 0.8rem;
          padding: 1.2rem;
          border: 1px solid ${colors.dark60};
          border-radius: 8px;
        `}
      >
        <h2>Choose your carousel</h2>
        <div
          className={css`
            display: grid;
            grid-gap: 0.8rem;
            label {
              display: flex;
              align-items: center;
              span {
                margin-left: 0.4rem;
              }
            }
          `}
        >
          <Radio
            id="useSpringCarousel"
            name="carousel-type"
            defaultChecked
            onChange={(e) => {
              console.log(e.currentTarget.value);
            }}
          >
            useSpringCarousel
          </Radio>
          <Radio
            id="useTransitionCarousel"
            name="carousel-type"
            onChange={(e) => {
              console.log(e.currentTarget.value);
            }}
          >
            useTransitionCarousel
          </Radio>
        </div>
      </div>
      <div
        className={css`
          display: grid;
          grid-gap: 1.24rem;
          padding: 1.2rem;
          border: 1px solid ${colors.dark60};
          border-radius: 8px;
        `}
      >
        <h2>Options</h2>
        {configs[state.carouselType].map((i) => {
          if (i.type === "toggle") {
            return (
              <Switch
                checked={!!state[i.label]}
                key={i.id}
                id={i.id}
                label={i.label}
                onChange={(value) => {
                  onChange({
                    [i.id]: value,
                  });
                }}
              />
            );
          }
          if (i.type === "select") {
            return (
              <BaseOption key={i.id} id={i.id} label={i.label}>
                <select
                  key={i.id}
                  onChange={(v) => {
                    onChange({
                      [i.id]: Number(v.currentTarget.value),
                    });
                  }}
                >
                  {i.options.map((op) => (
                    <option key={`${i.id}-${op}`}>{op}</option>
                  ))}
                </select>
              </BaseOption>
            );
          }
          return null;
        })}
      </div>
    </aside>
  );
}
