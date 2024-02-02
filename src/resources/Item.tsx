import React from "react";

type Props = {
  item?: any;
};

// https://developer.riotgames.com/docs/lol#data-dragon_data-assets

export default function Item({ item }: Props) {
  if (!item) return null; // se não tiver item, não renderiza nada
    //  usar item.id na src da imagem
  return <div>{item.name}</div>;
}
