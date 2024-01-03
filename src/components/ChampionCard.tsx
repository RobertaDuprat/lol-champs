import React from "react";
import { API_BASE } from "../constants";
import { Link} from "react-router-dom";

type Props = {
  id: string;
  name: string;
};

function ChampionCard(props: Props) {
  // destructuring:
  const { id, name } = props;
  
  return (
    <div key={id} className="border-2 border-cold-gray bg-cold-gray">
      <Link to={`/champions/${id}`}>
      <div>{name}</div>
      <img alt={id} src={`${API_BASE}/img/champion/${id}.png`} />
      </Link>
    </div>
  );
}

export default ChampionCard;
