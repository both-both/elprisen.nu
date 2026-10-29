import type { InputProps } from "./input.types";

export const Input = ({ type, value }: InputProps) => {
  let MaxDate = new Date().toISOString().split("T")[0];
  console.log(MaxDate);

  return (
    <>
      <input type={type} value={value} min={"2022-11-01"} max={MaxDate} />
    </>
  );
};
