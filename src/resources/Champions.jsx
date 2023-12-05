import { useState, useEffect } from "react";

const API_BASE = "https://ddragon.leagueoflegends.com/cdn/13.23.1"; 
const API_URL = `${API_BASE}/data/en_US/champion.json`;

export default function App() {
  const [championMap, setChampionMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setChampionMap(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchData();
  }, []);

  const championsArray = Object.keys(championMap).map((key) => championMap[key]);

  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item>xs=2</Item>
    </Grid>
  ))}
</Grid>
      {championsArray.map((champion) => (
        <div key={champion.id} className="card">
          <div> 
          </div>
          <img alt={champion.id} src={`${API_BASE}/img/champion/${champion.id}.png`} />
        </div>
      ))}
    </div>
  );
}