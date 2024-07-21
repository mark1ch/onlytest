interface Fact {
  id: number;
  years: number;
  fact: string;
}

export interface FactsData {
  [key: number]: Fact[];
}
