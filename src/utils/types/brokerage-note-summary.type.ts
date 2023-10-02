export type TBrokerageNoteSummary = {
  id: number;
  date: string;
  exchange: string;
  purchases: number;
  sales: number;
  costs: number;
  net: number;
  debitOrCredit: string;
};
