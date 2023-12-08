import { useState, useEffect } from "react"; 
import './Champions.css';

const API_BASE = "https://ddragon.leagueoflegends.com/cdn/13.23.1"; 
const API_URL = `${API_BASE}/data/en_US/champion.json`;

export default function App() {
  const [championMap, setChampionMap] = useState({});
  const [filterText, setFilterText] = useState("");

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
  const filteredChampions = championsArray.filter((champion) => champion.name.toLowerCase().includes(filterText.toLowerCase()));
  const handleFilterTextChange =  (event) => {setFilterText(event.target.value);
  };

  return (
  
  <>
    <div className="grid" class="bg-hextec-black">  
   
    <input
      className="search"
      placeholder=" Digite aqui"
      type="text"
      onChange={handleFilterTextChange}
      value={filterText}
      class="bg-cold-gray mt-5 ms-8 "

    />
    <div class="grid grid-cols-11 gap-1  bg-hextec-black grid justify-items-center">
      {filteredChampions.map((champion) => (
        <div key={champion.id} className="card">
          <div> 
          </div>
          <img alt={champion.id} src={`${API_BASE}/img/champion/${champion.id}.png`} />
        </div>
      ))}
    </div>
    </div>
    </>
  );
}