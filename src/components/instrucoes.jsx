export default function Instrucoes({
    passos
}) {
  return (
    <section>
      <div className="pt-10">
        <h2 className="text-3xl text-amber-700 mb-5 pl-5"><strong>Instrucoes</strong></h2>
        <ul className="list-decimal space-y-2 text-gray-700 pl-10">
        {passos.map((passos) => (
            <li key={passos.id}>{passos.description}</li>
        ))}
        </ul>
      </div>
    </section>
  );
}
