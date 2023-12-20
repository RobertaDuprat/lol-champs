import React from "react";
import { Link, useParams } from "react-router-dom";

type Props = {};

export default function ChampionPage({}: Props) {
  const { championId } = useParams<{ championId: string }>(); // pegando o parâmetro da URL

  return (
    <div>
      {/* Link serve como um elemento para navegar para outras páginas */}
      <Link className="text-blue-500 hover:text-blue-700" to={`/`}>
        Go back
      </Link>
      <h1 className="text-4xl">
        This page will contain details of a champion!
      </h1>
      Showing champion: {championId}
    </div>
  );
}
