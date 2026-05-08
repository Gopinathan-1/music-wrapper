import { AlterEgoCard } from "./AlterEgoCard";
import { MonthlyTrends } from "./MonthlyTrends";

export function LowerSection() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <AlterEgoCard />
      <MonthlyTrends />
    </div>
  );
}
