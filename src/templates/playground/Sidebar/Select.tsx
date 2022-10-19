import { css } from "linaria";
import Arrow from "public/arrow.svg";
import { colors } from "theme";

type Props = {
  options: { value: string; label: string }[];
  defaultValue: string;
  onChange(value: string): void;
  id: string;
  minWidth?: boolean;
};

export function Select({
  options,
  defaultValue,
  onChange,
  id,
  minWidth = true,
}: Props) {
  return (
    <div
      data-min-width={minWidth}
      className={css`
        display: flex;
        position: relative;
        align-items: center;
        background-color: #fff;
        padding: 0.64rem 0.8rem;
        border-radius: 8px;
        border: 1px solid ${colors.light};
        line-height: 1.2;
        min-width: 48px;
        &[data-min-width="true"] {
          min-width: 112px;
        }
      `}
    >
      <select
        id={id}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.currentTarget.value)}
        className={css`
          appearance: none;
          border: none;
          font-size: 1.48rem;
          padding: 0;
          flex: 1;
          outline: none;
          color: ${colors.primary};
        `}
      >
        {options.map((i) => (
          <option key={i.value} value={i.value}>
            {i.label}
          </option>
        ))}
      </select>
      <div
        className={css`
          position: absolute;
          right: 8px;
          background-color: inherit;
          width: 8px;
          pointer-events: none;
          margin-left: 0.8rem;
          svg {
            transform: rotate(180deg);
          }
        `}
      >
        <Arrow />
      </div>
    </div>
  );
}
