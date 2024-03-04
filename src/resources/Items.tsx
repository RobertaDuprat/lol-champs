import React, { useState, useEffect, ChangeEvent } from "react";
import { API_ITEMS } from "../constants";
import ItemComponent from "./Item";

interface Item {
  name: string;
  tags: string[];
}

export default function Items() {
  const [itemsMap, setItemsMap] = useState<{ [key: string]: Item }>({});
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ITEMS);
        const data = await response.json();
        setItemsMap(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchData();
  }, []);

  const itemsArray = Object.keys(itemsMap).map((key) => {
    return {
      ...itemsMap[key], // spread operator
      id: key,
    };
  }); // incluir id no objeto
  const filteredItems = itemsArray.filter((items) => {
    const textMatch = items.name
      .toLowerCase()
      .includes(filterText.toLowerCase());

    return textMatch;
  });

  return (
    <>
      <div className="bg-hextec-black min-h-screen">
        <input
          placeholder="Digite aqui"
          type="text"
          onChange={handleFilterTextChange}
          value={filterText}
          className="border-2 border-cold-gray bg-cold-gray p-3 mt-8 ms-8 w-3/6"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-12 gap-1 justify-items-center">
        {filteredItems.map((item) => {
          console.log("item", item);
          return <ItemComponent item={item} />;
        })}
        </div>
      </div>
    </>
  );
}
