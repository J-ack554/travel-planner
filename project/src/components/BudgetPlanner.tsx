import React, { useState } from 'react';
import { IndianRupee } from 'lucide-react';
import { ExpenseCategory } from '../types';

interface BudgetPlannerProps {
  onUpdateBudget: (expenses: ExpenseCategory[]) => void;
}

export const BudgetPlanner: React.FC<BudgetPlannerProps> = ({ onUpdateBudget }) => {
  const [totalBudget, setTotalBudget] = useState(50000);
  const [expenses, setExpenses] = useState<ExpenseCategory[]>([
    { name: 'Travel', percentage: 30, amount: 15000, color: 'bg-blue-500' },
    { name: 'Accommodation', percentage: 40, amount: 20000, color: 'bg-green-500' },
    { name: 'Food', percentage: 20, amount: 10000, color: 'bg-yellow-500' },
    { name: 'Activities', percentage: 10, amount: 5000, color: 'bg-purple-500' },
  ]);

  const handleBudgetChange = (value: number) => {
    setTotalBudget(value);
    const updatedExpenses = expenses.map(expense => ({
      ...expense,
      amount: (value * expense.percentage) / 100
    }));
    setExpenses(updatedExpenses);
    onUpdateBudget(updatedExpenses);
  };

  const handlePercentageChange = (index: number, percentage: number) => {
    const newExpenses = [...expenses];
    newExpenses[index].percentage = percentage;
    newExpenses[index].amount = (totalBudget * percentage) / 100;
    setExpenses(newExpenses);
    onUpdateBudget(newExpenses);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-6">Budget Planner</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Total Budget
        </label>
        <div className="relative">
          <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="number"
            value={totalBudget}
            onChange={(e) => handleBudgetChange(Number(e.target.value))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="space-y-4">
        {expenses.map((expense, index) => (
          <div key={expense.name} className="flex items-center gap-4">
            <div className="w-32">{expense.name}</div>
            <input
              type="range"
              min="0"
              max="100"
              value={expense.percentage}
              onChange={(e) => handlePercentageChange(index, Number(e.target.value))}
              className="flex-1"
            />
            <div className="w-32 text-right">
              <span className="font-medium">₹{expense.amount.toLocaleString()}</span>
              <span className="text-gray-500 ml-1">({expense.percentage}%)</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 h-8 flex rounded-full overflow-hidden">
        {expenses.map((expense) => (
          <div
            key={expense.name}
            className={`${expense.color}`}
            style={{ width: `${expense.percentage}%` }}
          />
        ))}
      </div>
    </div>
  );
};