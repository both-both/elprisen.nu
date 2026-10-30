import { useFetch } from "../../../hooks/useFetch";
import { timeFormatting } from "../../../utils/TimeFormatting";
import { PriceCicle } from "../../elements/PriceCircle/PriceCircle";
import { ContentWrapper } from "../../layout/ContentWrapper/ContentWrapper";
import { NowModuleStyled } from "./NowModule.styled";
import type { NowProps, PriceItem } from "./NowModule.types";

export const NowModule = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const area = "DK2";

  const url = `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_${area}.json`;
  const { data, isLoading, error } = useFetch<PriceItem[]>(url);

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

  return (
    <NowModuleStyled>
      <ContentWrapper title="Lige nu" heading="Elprisen lige nu">
        <PriceCicle>
          <h2>{currentTime?.DKK_per_kWh}</h2> <h3>kr./KWh</h3>
        </PriceCicle>
        {
          <p>
            {currentTimeStart} - {currentTimeEnd}
          </p>
        }
      </ContentWrapper>
    </NowModuleStyled>
  );
};
