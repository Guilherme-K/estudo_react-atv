export default function Ingredients({
    items
}) {
  return (
    <section>
      <div className="pt-10">
        <h2 className="text-4xl mb-5 text-amber-700 pl-5"><strong>Ingredients</strong></h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-7">
        {items.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
        </ul>
      </div>
    </section>
  );
}
