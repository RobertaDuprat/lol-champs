import React, { useState, useEffect } from "react";
import ChampionCard from '../components/ChampionCard';
import './Champions.css';
import { API_URL } from "../constants";

export default function Champions() {
  const [championMap, setChampionMap] = useState({});
  const [filterText, setFilterText] = useState("");
  const [filterTags, setFilterTags] = useState("");

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

  const filteredChampions = championsArray.filter((champion) => {
    const textMatch = champion.name.toLowerCase().includes(filterText.toLowerCase());
    const tagMatch = filterTags === "" || champion.tags.includes(filterTags);
    
    return textMatch && tagMatch;
  });

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleFilterTagsChange = (event) => {
    setFilterTags(event.target.value);
  };

  return (
    <>
      
      <div className="bg-hextec-black min-h-screen">
        <input
          className="search"
          placeholder="Digite aqui"
          type="text"
          onChange={handleFilterTextChange}
          value={filterText}
          class="border-2 border-cold-gray bg-cold-gray p-2 mt-5 ms-8 w-3/6"
        />
        <select
          name="tags"
          id="tags"
          class="border-2 border-cold-gray bg-cold-gray p-2 mt-5 ms-8 "
          value={filterTags}
          onChange={handleFilterTagsChange}
        >
          <option value="">Todos</option>
          <option value="Mage">Mago</option>
          <option value="Assassin">Assassino</option>
          <option value="Fighter">Lutador</option>
          <option value="Marksman">Atirador</option>
          <option value="Support">Suporte</option>
          <option value="Tank">Tanque</option>
        </select>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-12 gap-1 justify-items-center">
        {/* <div className="grid grid-flow-col auto-cols-max gap-1 justify-items-center"> */}
          {filteredChampions.map((champion) => (
            <ChampionCard key={champion.id} id={champion.id} name={champion.name} />
          ))}
        </div>
      </div>
    </>
  );
}
