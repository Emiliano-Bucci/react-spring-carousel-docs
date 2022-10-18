import SwitchComponent from "react-switch";
import { BaseOption } from "./BaseOption";

type Props = {
  id: string;
  checked: boolean;
  label: string;
  onChange(value: boolean): void;
};

export function Switch({ id, checked, label, onChange }: Props) {
  return (
    <BaseOption id={id} label={label}>
      <SwitchComponent
        height={26}
        width={44}
        handleDiameter={18}
        id={id}
        checked={checked}
        onChange={onChange}
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </BaseOption>
  );
}
