export default function RecentRecipes({
    recipes
}) {
  return (
    <section className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-3 text-xl font-bold text-teal-900">Receitas recentes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="flex items-center justify-between gap-4 border-b border-slate-900 py-3 last:border-b-0">
            <span className="font-medium text-slate-900">{recipe.name}</span>
            <span className="text-sm text-slate-500">{recipe.category}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
