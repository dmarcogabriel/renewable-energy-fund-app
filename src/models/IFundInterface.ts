interface IFundInfoAndStats {
  aum: number;
  vintageRange: {
    min: number;
    max: number;
  };
  priceAtClose: number;
  issueDate: string;
  ter: number;
  priceAtOpen: number;
}

export interface IFundData {
  hour: number[];
  day: number[];
  week: number[];
  month: number[];
  year: number[];
  all: number[];
}

export interface IFund {
  totalAmount: number;
  year: number;
  earningsPercentage: number;
  data: IFundData;
  infoAndStats: IFundInfoAndStats;
}
