import { useState, useEffect } from "react"; 
import ChampionCard from '../components/ChampionCard';
import './Champions.css';
import { API_URL } from "../constants";

export default function Champions() {
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
    <div className="bg-hextec-black min-h-screen">  
   
    <input
      className="search"
      placeholder=" Digite aqui"
      type="text"
      onChange={handleFilterTextChange}
      value={filterText}
      class="border-2 border-cold-gray bg-cold-gray p-2 mt-5 ms-8 w-3/6" 

    />
    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    <div className="grid grid-cols-11 gap-1 justify-items-center">
      {filteredChampions.map((champion) => (
        <ChampionCard id={champion.id} name={champion.name}/>
      ))}
    </div>
    </div>
    </>
  );
}