import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Li } from "../../../styles/Elements";
import { OverviewTable } from "../../elements/PriceCircle/OverviewTable/OverviewTable";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper";
import type { Prices } from "../OverviewModule/OverviewModule.types";

export const OverviewModule = () => {
  const today = new Date();
  const area = "DK2";

  const [inputValue] = useState(today.toISOString().split("T")[0]);

  const url = `https://www.elprisenligenu.dk/api/v1/prices/${new Date(inputValue).getFullYear()}/${new Date(inputValue).getMonth() + 1}-${new Date(inputValue).getDate()}_${area}.json`;

  const { data, error } = useFetch<Prices[]>(url);

  if (error) {
    return <p>{error}</p>;
  }

  function formatTime(time: string) {
    return new Date(time).toLocaleTimeString("da-DK").substring(0, 5);
  }

  return (
    <ContentWrapper title="Oversigt" heading="Oversigt">
      {data &&
        data.map((item) => (
          <OverviewTable>
            <Li>
              <p>
                kl.{formatTime(item.time_start)} - {formatTime(item.time_end)}
              </p>
              <p>{item.DKK_per_kWh}kr.</p>
            </Li>
          </OverviewTable>
        ))}
    </ContentWrapper>
  );
};
