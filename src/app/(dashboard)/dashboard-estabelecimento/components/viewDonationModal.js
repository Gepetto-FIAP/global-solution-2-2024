"use client";
import React from "react";
import { useDonate } from "@/hooks/useDonate";
export default function ViewDonationModal({ isOpen, onClose, donationID }) {
  const { GetDonation, UpdateDonationStatus } = useDonate();
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

  function handleTotal(total) {
    return Object.entries(total)
      .map(([unit, quantity]) => `${quantity} ${unit}`)
      .join(", ");
  }

  function handleCancel() {
    UpdateDonationStatus(donationID, "cancelado");
    onClose();
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
          className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-[32px] font-bold text-[#008E28] mb-6 text-center">
          Visualizar doação
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-black mb-1">
            Tipo de descarte
          </label>
          <input
            type="text"
            value={type[donation.type]}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-black mb-1">
            Quantidade total
          </label>
          <input
            type="text"
            value={handleTotal(calculateTotalByUnit(donation.items))}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700"
          />
        </div>

        <div className="mb-4 grid grid-cols-[1fr_58px_94px] gap-4">
          <label className="text-black font-semibold col-start-1 col-end-4">
            Lista de materiais
          </label>
          {donation.items.map((item, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                value={item.nome}
                readOnly
                className="font-semibold text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
              />
              <input
                type="text"
                value={item.quantidade}
                readOnly
                className="font-semibold text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
              />
              <input
                type="text"
                value={item.unidade}
                readOnly
                className="font-semibold text-center border-b-2 py-2 border-gray-300 outline-none w-full text-black placeholder:text-black"
              />
            </React.Fragment>
          ))}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-black mb-1">
            Horário da doação
          </label>
          <div className="flex space-x-2">
            <input
              type="date"
              value={donation.data}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-gray-700"
              readOnly
            />
            <input
              type="time"
              value={donation.time}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md text-gray-700"
              readOnly
            />
          </div>
        </div>

        <div className="mt-6 text-right">
          {donation.status === "em-aberto" && (
            <button
              className="text-red-600 hover:text-red-700"
              onClick={handleCancel}
            >
              Cancelar doação
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
