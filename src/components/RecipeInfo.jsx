export default function RecipeInfo({
  title,
  summary,
  cover,
  prepMinutes,
  cookMinutes,
}) {
  const totalMinutes = (prepMinutes || 0) + (cookMinutes || 0);
  return (
    <section className="space-y-6 sm:space-y-8">
      <img
        src={cover || "http://placehold.co/800x450?text=No+Image"}
        alt={title}
        className="aspect-video w-full rounded-lg object-cover sm:rounded-xl"
      />

      <div className="space-y-4 sm:space-y-6">
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>

      <div className="rounded-lg bg-rose-50 p-4 sm:rounded-xl sm:p-6">
        <h3>Preparation Time</h3>
        <ul>
          <li>
            <strong>Total</strong>:Aproximadamente {totalMinutes} minutos
          </li>
          <li>
            <strong>Preparação</strong>: {prepMinutes} minutos
          </li>
          <li>
            <strong>cozimento</strong>: {cookMinutes} minutos
          </li>
        </ul>
      </div>
    </section>
  );
}