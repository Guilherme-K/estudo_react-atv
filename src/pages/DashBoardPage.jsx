import StatCard from "../components/StatCard";
import RecentRecipes from "../components/RecentRecipes";
import stats from "../data/dashboard-stats.json";
import recipes from "../data/recent-recipes.json";

function DashBoardPage() {
  return (
    <div className="min-h-screen bg-orange-50 p-6 md:p-8">
      <h1 className="mb-6 text-3xl font-bold text-slate-900">Dashboard</h1>
      <section aria-label="Resumo" className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.id} title={stat.title} value={stat.value} />
        ))}
      </section>
      <RecentRecipes recipes={recipes} />
    </div>
  );
}

export default DashBoardPage;
