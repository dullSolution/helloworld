import { useEffect, useState } from "react";
import { Dino } from "../types/Dino.ts";
import { Link } from "react-router";

export default function Index() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs/`);
      const allDinosaurs = await response.json() as Dino[];
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
    <main>
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <ol className="list-decimal">
        {dinosaurs.map((dinosaur: Dino) => {
          return (
            <li
              key={dinosaur.name}
            >
              <Link
                to={`/${dinosaur.name.toLowerCase()}`}
              >
                {dinosaur.name}
              </Link>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
