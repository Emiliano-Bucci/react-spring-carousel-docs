import { css } from "linaria";
import { colors, shadows } from "theme";
import { Radio } from "./Radio";
import {
  PreviewDevice,
  PreviewDeviceOrientation,
  Props as PlaygroundState,
} from "pages/playground";
import { Switch } from "./Switch";
import { BaseOption } from "./BaseOption";
import React, { ReactNode } from "react";
import { Select } from "./Select";

const previewDevices = [
  {
    value: "desktop",
    label: "Desktop",
  },
  {
    value: "laptop",
    label: "Laptop",
  },
  {
    value: "tablet",
    label: "Tablet",
  },
  {
    value: "mobile",
    label: "Mobile",
  },
  {
    value: "responsive",
    label: "Responsive",
  },
];
const previewDevicesOrientation = [
  {
    value: "portrait",
    label: "Portrait",
  },
  {
    value: "landscape",
    label: "Landscape",
  },
];

type BaseOption = {
  id: string;
  label: keyof PlaygroundState;
};

type SelectOption = BaseOption & {
  type: "select";
  minWidth?: boolean;
  getIsDisabled?(state: PlaygroundState): boolean;
  options: {
    value: string;
    label: string;
  }[];
};

type ToggleOption = BaseOption & {
  type: "toggle";
};
type NumberOption = BaseOption & {
  type: "number";
};

type Options = SelectOption | ToggleOption | NumberOption;

const configs = {
  useSpringCarousel: [
    {
      id: "slideType",
      label: "slideType",
      type: "select",
      minWidth: true,
      options: [
        {
          value: "fixed",
          label: "Fixed",
        },
        {
          value: "fluid",
          label: "Fluid",
        },
      ],
    },
    {
      id: "gutter",
      label: "gutter",
      type: "select",
      options: [
        {
          value: "0",
          label: "0",
        },
        {
          value: "8",
          label: "8",
        },
        {
          value: "16",
          label: "16",
        },
        {
          value: "24",
          label: "24",
        },
        {
          value: "32",
          label: "32",
        },
      ],
    },
    {
      id: "startEndGutter",
      label: "startEndGutter",
      type: "select",
      options: [
        {
          value: "0",
          label: "0",
        },
        {
          value: "8",
          label: "8",
        },
        {
          value: "16",
          label: "16",
        },
        {
          value: "24",
          label: "24",
        },
        {
          value: "32",
          label: "32",
        },
      ],
    },
    {
      id: "withLoop",
      label: "withLoop",
      type: "toggle",
    },
    {
      id: "itemsPerSlide",
      label: "itemsPerSlide",
      type: "select",
      minWidth: false,
      getIsDisabled: (state) => state.slideType !== "fixed",
      options: [
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
        {
          value: "6",
          label: "6",
        },
      ],
    },
    {
      id: "disableGestures",
      label: "disableGestures",
      type: "toggle",
    },
    {
      id: "slideWhenThresholdIsReached",
      label: "slideWhenThresholdIsReached",
      type: "toggle",
    },
    {
      id: "initialStartingPosition",
      label: "initialStartingPosition",
      type: "select",
      getIsDisabled: (state) => !state.withLoop,
      options: [
        {
          value: "start",
          label: "Start",
        },
        {
          value: "center",
          label: "Center",
        },
        {
          value: "end",
          label: "End",
        },
      ],
    },
    {
      id: "initialActiveItem",
      label: "initialActiveItem",
      type: "select",
      options: [
        {
          value: "0",
          label: "0",
        },
        {
          value: "1",
          label: "1",
        },
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
      ],
    },
    {
      id: "animateWhenActiveItemChange",
      label: "animateWhenActiveItemChange",
      type: "toggle",
    },
  ] as Options[],
  useTransitionCarousel: [{}] as Options[],
};

type SectionProps = {
  title: string;
  children: ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: 1.24rem;
        padding: 1.2rem;
        border: 2px solid ${colors.secondaryLight};
        border-radius: 12px;
        background-color: ${colors.warm};
        box-shadow: ${shadows.small};
      `}
    >
      <h2
        className={css`
          font-weight: bold;
          color: ${colors.secondary};
        `}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

type Props = {
  onChange(state: Partial<PlaygroundState>): void;
  state: PlaygroundState;
};

export function Sidebar({ onChange, state }: Props) {
  return (
    <aside
      className={css`
        display: grid;
        grid-gap: 1.6rem;
        align-content: start;
        width: 364px;
        height: calc(100vh - 56px);
        background-color: #fff;
        padding: 1.6rem;
        box-shadow: ${shadows.medium};
        overflow-y: auto;
      `}
    >
      <Section title="Choose your carousel">
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
      </Section>
      <Section title="Controls">
        <Switch
          id="show-controls"
          label="Show controls"
          checked={state.showControls}
          onChange={(v) => onChange({ showControls: v })}
        />
      </Section>
      <Section title="Preview device">
        <BaseOption id="previewDevice" label="Type">
          <Select
            id="previewDevice"
            options={previewDevices}
            defaultValue={state.previewDevice}
            onChange={(value) => {
              onChange({
                previewDevice: value as PreviewDevice,
              });
            }}
          />
        </BaseOption>
        <BaseOption
          id="previewDeviceOrientation"
          label="Orientation"
          isDisabled={
            state.previewDevice !== "mobile" && state.previewDevice !== "tablet"
          }
        >
          <Select
            id="previewDeviceOrientation"
            defaultValue={state.previewDeviceOrientation}
            options={previewDevicesOrientation}
            onChange={(value) => {
              onChange({
                previewDeviceOrientation: value as PreviewDeviceOrientation,
              });
            }}
          />
        </BaseOption>
      </Section>
      <Section title="Options">
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
              <BaseOption
                key={i.id}
                id={i.id}
                label={i.label}
                isDisabled={i.getIsDisabled && i.getIsDisabled(state)}
              >
                <Select
                  // @ts-ignore
                  defaultValue={state[i.id]}
                  id={i.id}
                  options={i.options}
                  minWidth={i.minWidth}
                  onChange={(value) => {
                    onChange({
                      [i.id]: value,
                    });
                  }}
                />
              </BaseOption>
            );
          }
          return null;
        })}
      </Section>
    </aside>
  );
}
