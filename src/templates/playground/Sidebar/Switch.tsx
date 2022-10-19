import SwitchComponent from "react-switch";
import { colors } from "theme";
import { BaseOption } from "./BaseOption";

type Props = {
  id: string;
  checked: boolean;
  label: string;
  isDisabled?: boolean;
  onChange(value: boolean): void;
};

export function Switch({
  id,
  checked,
  label,
  onChange,
  isDisabled = false,
}: Props) {
  return (
    <BaseOption id={id} label={label} isDisabled={isDisabled}>
      <SwitchComponent
        height={26}
        width={44}
        handleDiameter={18}
        id={id}
        checked={checked}
        onChange={onChange}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#2ECC71"
        offColor={colors.secondaryLight}
      />
    </BaseOption>
  );
}
