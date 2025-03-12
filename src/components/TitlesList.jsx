import Item from "./Item";

function TitlesList({ titles, deleteTitle }) {
  return (
    <ul className="space-y-2">
      {titles.map((t) => (
        <Item key={t.id} t={t} deleteTitle={deleteTitle} />
      ))}
    </ul>
  );
}

export default TitlesList;
