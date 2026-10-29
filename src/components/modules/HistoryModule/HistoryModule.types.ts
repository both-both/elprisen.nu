export type PriceValues = {
  DKK_per_kWh: number;
  EUR_per_kWh: number;
  EXR: number;
  time_start: string;
  time_end: string;
};

export type HistoryModuleProps = {
  chrildren?: string;
  title?: string;
  data: PriceValues[];
};
