import Link from "next/link";

const Index = () => {
  type person = {
    name: string;
    id: string;
  };
  const people = [
    { name: "Xico", id: "xd" },
    { name: "André", id: "af" },
    { name: "Karina", id: "ka" },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {people.map((el: person) => {
          return (
            <li key={el.id}>
              <Link href={`/clients/${el.id}`}>{el.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
