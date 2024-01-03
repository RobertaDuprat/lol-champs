import React from "react";
import Champions from "../resources/Champions.jsx";
import { API_BASE } from "../constants";

const HomePage = () => (
  <>
    <div className="head">
      <div className="title">
        <h1>LoL Champs</h1>
      </div>
      <div>
        <img src="../favicon.png" className="icone" alt="Ícone" />
      </div>
    </div>
    <div>
      <Champions />
    </div>
  </>
);

export default HomePage;