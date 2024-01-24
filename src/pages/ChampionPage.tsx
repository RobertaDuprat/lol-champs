import React, { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { API_BASE, CHAMPION_API_URL } from "../constants";

type Props = {};

export default function ChampionPage({}: Props) {
  const { championId } = useParams<{ championId: string }>(); // pegando o parâmetro da URL
  const [champion, setChampion] = useState();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${CHAMPION_API_URL}${championId}.json`);
        const data = await response.json();
        setChampion(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [championId]);

  console.log('dados do campeao desta pagina', champion);

  if (error) {
    return <Navigate to="/not-found" replace />;
    // return <div>Campeão não encontrado</div>
  }

  if (loading) {
    return <div>Loading...</div>;
  }

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
        Back to home
      </Link>
      <h1 className="pl-5 ">
        <img
          alt={championId}
          src={`${API_BASE}/img/champion/${championId}.png`}
        />
      </h1>
      <div className="pl-8">{championId}</div>
      <div>{champion.title}</div>
    </div>
  );
}
