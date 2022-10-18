import { InputHTMLAttributes } from "react";

export function Radio({
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label htmlFor={props.id}>
      <input {...props} type="radio" id={props.id} name={props.name} />
      <span>{children}</span>
    </label>
  );
}
