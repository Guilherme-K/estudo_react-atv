export default function StatCard({
  title,
  value
}) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-2 text-sm text-slate-500">{title}</h2>
      <p className="text-3xl font-bold text-teal-900">{value}</p>
    </div>
  );
}
