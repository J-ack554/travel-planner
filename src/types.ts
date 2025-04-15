export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  attractions: Array<{
    name: string;
    description: string;
    image: string;
    rating: number;
  }>;
}

export interface ExpenseCategory {
  name: string;
  percentage: number;
  amount: number;
  color: string;
}

export interface TravelPlan {
  from: string;
  to: string;
  expenses: ExpenseCategory[];
  totalBudget: number;
}