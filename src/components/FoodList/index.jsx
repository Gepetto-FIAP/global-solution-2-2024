"use client";

import { useDonate } from "@/hooks/useDonate";
import React, { useState } from "react";

function FoodList() {
  const [items, setItems] = useState([
    { nome: "", quantidade: "", unidade: "" },
  ]);

  const { createdDonation, setCreatedDonation } = useDonate();

  const handleChange = (index, campo, valor) => {
    const novosItems = [...items];
    novosItems[index][campo] = valor;
    setItems(novosItems);

    if (index === items.length - 1 && campo === "nome" && valor.trim() !== "") {
      setItems([...items, { nome: "", quantidade: "", unidade: "" }]);
    }

    setCreatedDonation({
      ...createdDonation,
      items: novosItems.slice(0, -1).map((item) => ({
        nome: item.nome,
        quantidade: item.quantidade,
        unidade: item.unidade,
      })),
    });
  };

  return (
    <div className="grid grid-cols-[1fr_58px_94px] gap-4">
      <label className="text-black col-start-1 col-end-4">
        <span className="block text-sm font-semibold text-black mb-1">
          Nome comercial ou químico do material
        </span>
      </label>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <input
            type="text"
            placeholder="exemplo: Pilha Alcalina"
            value={item.nome}
            onChange={(e) => handleChange(index, "nome", e.target.value)}
            className="p-2 border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-gray-400"
          />
          <input
            type="number"
            placeholder="Qntd."
            value={item.quantidade}
            onChange={(e) => handleChange(index, "quantidade", e.target.value)}
            className="p-2 border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-gray-400"
          />
          <select
            value={item.unidade}
            onChange={(e) => handleChange(index, "unidade", e.target.value)}
            className="text-center border-gray-300 border-2 text-black placeholder:text-black rounded-md shadow-sm"
          >
            <option value="" disabled hidden>
              Selecione
            </option>
            <option>Un</option>
            <option>Kg</option>
          </select>
        </React.Fragment>
      ))}
    </div>
  );
}

export default FoodList;
