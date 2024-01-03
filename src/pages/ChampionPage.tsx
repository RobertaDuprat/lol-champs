import React from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE } from "../constants";


type Props = {};

export default function ChampionPage({}: Props) {
  const { championId } = useParams<{ championId: string }>(); // pegando o parâmetro da URL
  
  
  return (
    <div>
      {/* Link serve como um elemento para navegar para outras páginas */}
      <div className="head">
      <div className="title">
        <h1>LoL Champs</h1>
      </div>
      <div>
        <img src="../favicon.png" className="icone" alt="Ícone" />
      </div>
    </div>
      <Link className="text-blue-500 hover:text-blue-700" to={`/`}>
      
      </Link>
      <h1 className="text-4xl">
      
      </h1>
      
      Showing champion: {championId}
    </div>
  );
}
