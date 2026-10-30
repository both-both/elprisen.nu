import { PriceTable } from "../../elements/PriceTable/PriceTable";
import { useFetch } from "../../../hooks/useFetch";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper";
import type { PriceValues } from "./HistoryModule.types";
import { Li } from "../../../styles/Elements";
import { Input } from "../../elements/Input/Input";
import { useState } from "react";

export const HistoryModule = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const area = "DK2";

  const [inputValue, setInputValue] = useState(
    today.toISOString().split("T")[0],
  );

  const url = `https://www.elprisenligenu.dk/api/v1/prices/${new Date(inputValue).getFullYear()}/${new Date(inputValue).getMonth() + 1}-${new Date(inputValue).getDate()}_${area}.json`;

  const { data, error } = useFetch<PriceValues[]>(url);

  if (error) {
    return <p>{error}</p>;
  }

  function formatTime(time: string) {
    return new Date(time).toLocaleTimeString("da-DK").substring(0, 5);
  }

  return (
    <ContentWrapper title="Historik" heading="Historik">
      <Input
        type="date"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <p>Elpriserne d. {inputValue}</p>
      {data &&
        data.map((item) => (
          <PriceTable key={`${item.time_start}`}>
            <Li>
              <p>
                kl.
                {formatTime(item.time_start)}- {formatTime(item.time_end)}
              </p>
              {item.DKK_per_kWh} kr.
            </Li>
          </PriceTable>
        ))}
      ;
    </ContentWrapper>
  );
};
