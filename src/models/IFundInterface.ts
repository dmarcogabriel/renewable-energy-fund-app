type IFundData = {[key: string]: number};

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

export interface IFund {
  totalAmount: number;
  year: number;
  earningsPercentage: number;
  data: {
    hour: IFundData[];
    day: IFundData[];
    week: IFundData[];
    month: IFundData[];
    year: IFundData[];
    all: IFundData[];
  };
  infoAndStats: IFundInfoAndStats;
}
