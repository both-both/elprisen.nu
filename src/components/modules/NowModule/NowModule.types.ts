export type PriceItem = {
  DKK_per_kWh: number;
  EUR_per_kWh: number;
  EXR: number;
  time_start: string;
  time_end: string;
};

export type NowProps = {
  children: React.ReactNode;
  title?: string;
  PriceItemProps: PriceItem[];
};
