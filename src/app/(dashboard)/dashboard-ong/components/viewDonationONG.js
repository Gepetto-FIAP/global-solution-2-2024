"use client";
import { useDonate } from "@/hooks/useDonate";
import React from "react";

export default function ViewDonationONG({ isOpen, onClose, donationID }) {
const { GetDonation } = useDonate();
if (!isOpen) return null;

const donation = GetDonation(donationID);
const type = {
  perecivel: "Somente pilhas",
  "nao-perecivel": "Baterias mais complexas",
  ambos: "Todo e qualquer tipo de bateria",
};

const calculateTotalByUnit = (items) => {
  return items.reduce((acc, item) => {
    if (item.unidade && item.quantidade) {
      if (!acc[item.unidade]) {
        acc[item.unidade] = 0;
      }
      acc[item.unidade] += parseFloat(item.quantidade);
    }
    return acc;
  }, {});
};

const total = calculateTotalByUnit(donation.items);

function handleTotal(total, unidade) {
  return Object.entries(total)
    .filter(([unit]) => unit === unidade)
    .map(([unit, quantity]) => `${quantity} ${unit}`)
    .join(", ");
}

return (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    onClick={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}
  >
    <div className="bg-white rounded-[24px] w-[678px] p-12 relative max-h-[90vh] overflow-auto">
      <button
        className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-[#008E28]"
        onClick={onClose}
      >
        &times;
      </button>
      <h2 className="text-[32px] font-bold text-[#008E28] mb-4 text-center">
        Visualizar descarte
      </h2>
      <form className="my-8">
        <div className="flex gap-x-4 mb-4 flex-col">
          <div className="mb-4 w-[60%]">
            <label className="mb-4 text-sm font-semibold text-black">
              Tipo de bateria
            </label>
            <input
              type="text"
              value={type[donation.type]}
              readOnly
              className="h-[52px] w-full text-center p-2 border-gray-300 border-2 text-black placeholder:text-black rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div className="flex flex-row justify-start items-center gap-10">
            {total["Kg"] && (
              <div className="mb-4 flex flex-col text-center">
                <label className="text-sm font-semibold text-black">
                  Peso total
                </label>
                <input
                  type="text"
                  placeholder={handleTotal(total, "Kg")}
                  className="w-[67px] h-[52px] text-center p-2 border-gray-300 border-2 text-black placeholder:text-black rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            )}

            {total["Lt"] && (
              <div className="mb-4 flex flex-col text-center">
                <label className="text-sm font-semibold text-black">
                  Volume total
                </label>
                <input
                  type="text"
                  placeholder={handleTotal(total, "Lt")}
                  className="w-[67px] h-[52px] text-center p-2 border-gray-300 border-2 text-black placeholder:text-black rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            )}

            {total["Un"] && (
              <div className="mb-4 flex flex-col text-center">
                <label className="text-sm font-semibold text-black">
                  Total em unidades
                </label>
                <input
                  type="text"
                  placeholder={handleTotal(total, "Un")}
                  className="w-[67px] h-[52px] text-center p-2 border-gray-300 border-2 text-black placeholder:text-black rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-[1fr_58px_94px] gap-4">
          <label className="text-black col-start-1 col-end-4">
            <span className="mb-4 text-sm font-semibold text-black">
              Lista de materias
            </span>
          </label>
          {donation.items.map((item, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                value={item.nome}
                readOnly
                className="text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
              />
              <input
                type="text"
                value={item.quantidade}
                readOnly
                className="text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
              />
              <input
                type="text"
                value={item.unidade}
                readOnly
                className="text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
              />
            </React.Fragment>
          ))}
        </div>

        <div className="my-8 flex gap-4">
          <div className="w-auto">
            <label className="block text-sm font-semibold text-black mb-1">
              Horário do descarte
            </label>
            <input
              type="date"
              value={donation.data}
              className="border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div className="w-auto self-end">
            <input
              type="time"
              value={donation.time}
              className="border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
);
}
