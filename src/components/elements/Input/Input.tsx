import { InputStyled } from "./Input.styled";
import type { InputProps } from "./input.types";

export const Input = ({ type, inputValue, setInputValue }: InputProps) => {
  let MaxDate = new Date().toISOString().split("T")[0];
  console.log(MaxDate);

  return (
    <>
      <InputStyled
        type={type}
        value={inputValue}
        min={"2022-11-01"}
        max={MaxDate}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </>
  );
};
