import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Champions from "./resources/Champions.jsx";
import ChampionPage from "./pages/ChampionPage";
import HomePage from "./pages/HomePage";

// declaração das rotas/páginas:
// https://reactrouter.com/en/main/start/tutorial
const routes = [
  // Home page:
  {
    path: "/",
    element: <HomePage />,
  },
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
