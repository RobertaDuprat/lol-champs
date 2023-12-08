import React from "react";
import { API_BASE } from "../constants";

type Props = {
  id: string;
  name: string;
};

function ChampionCard(props: Props) {
  // destructuring:
  const { id, name } = props;

  return (
    <div key={id} className="border-2 border-cold-gray bg-cold-gray">
      <div>{name}</div>
      <img alt={id} src={`${API_BASE}/img/champion/${id}.png`} />
    </div>
  );
}

export default ChampionCard;
