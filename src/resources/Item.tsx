import React from "react";
import { API_ITEMS } from "../constants";

type Props = {
  item?: any;
};

// https://developer.riotgames.com/docs/lol#data-dragon_data-assets

export default function Item({ item }: Props) {
  if (!item) return null; // se não tiver item, não renderiza nada
    //  usar item.id na src da imagem
  return <div className="inline-block rounded-lg overflow-hidden shadow-lg" >{item.name}
  
  <img className="border-2 border-cold-gray bg-cold-gray p-1 flex items-center justify-center" 
  src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/item/${item.id}.png`} alt="" />
  </div>;
  
}
