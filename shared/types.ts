export interface Payment {
  type: string;
  month?: string;
  amount: number;
  dueDate: Date | null;
  status: string;
  paidBy: Record<string, boolean | number>;
}

export interface Property {
  id: string;
  name: string;
  unit: string;
  totalUSD: number;
  investors: string[];
  payments: Payment[];
}

export interface UpcomingPayment {
  total: number;
  properties: string[];
}
