import { PriceTable } from "../../elements/PriceTable/PriceTable";
import { useFetch } from "../../../hooks/useFetch";
import { timeFormatting } from "../../../utils/TimeFormatting";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper";
import type { PriceValues } from "./HistoryModule.types";
import { Li } from "../../../styles/Elements";
import { Input } from "../../elements/Input/Input";

export const HistoryModule = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const area = "DK2";

  const url = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${area}.json`;
  const { data, isLoading, error } = useFetch<PriceValues[]>(url);

  if (isLoading) {
    return <p>Henter prisen...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const currentTime =
    data &&
    data.find(
      (item) =>
        new Date(item.time_start) < today && new Date(item.time_end) > today,
    );
  const { currentTimeStart, currentTimeEnd } = timeFormatting(currentTime);

  console.log(currentTimeStart, currentTimeEnd);

  return (
    <ContentWrapper title="Historik" heading="Historik">
      <Input type="date" value="date" />
      <p>Elpriserne d. `${}`</p>
      {data &&
        data.map((item) => (
          <PriceTable key={`${item.time_start}`}>
            <Li>
              <p>kl. {item.time_start}</p>
              {item.DKK_per_kWh} kr.
            </Li>
          </PriceTable>
        ))}
      ;
    </ContentWrapper>
  );
};
