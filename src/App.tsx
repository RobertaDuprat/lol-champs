import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Champions from "./resources/Champions.jsx";
import ChampionPage from "./pages/ChampionPage";

// declaração das rotas/páginas:
// https://reactrouter.com/en/main/start/tutorial
const routes = [
  // Home page:
  {
    path: "/",
    element: (
      <>
        <div className="head">
          <div className="title">
            <h1>LoL Champs</h1>
          </div>
          <div>
            <img src="favicon.png" className="icone" alt="Ícone"></img>
          </div>
        </div>
        <div>
          <Champions />
        </div>
      </>
    ),
  },
  // página do champ:
  {
    path: "/champions/:championId",
    element: <ChampionPage />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
