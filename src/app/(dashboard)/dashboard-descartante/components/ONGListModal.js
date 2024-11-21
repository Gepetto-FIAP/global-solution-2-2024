"use client";

import { Button } from "@/components/Button";
import { OngRow } from "@/components/OngRow";
import { useDonate } from "@/hooks/useDonate";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function ONGListModal({ isOpen, onClose, toggleDonation }) {
  const { createdDonation, setCreatedDonation, RegisterDonation } = useDonate();
  const { getItem } = useLocalStorage("ongs");
  const { getItem: getBussines } = useLocalStorage("businessLogged");
  const business = getBussines();

  const ongList = getItem() || [];

  function createDonation() {
    RegisterDonation(createdDonation);
    alert("Doação cadastrado com sucesso!");
    onClose();
  }
  if (!isOpen) return null;
  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg w-full max-w-lg p-12 relative max-h-[90vh] overflow-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex w-full justify-center items-center">
          <h2 className="text-xl font-bold text-green-600">
            Lista de Estabelecimentos
          </h2>
        </div>

        <div className="mt-8 space-y-4">
          {ongList.map((ong) => (
            <OngRow
              key={ong.id}
              ongName={ong.name}
              ongEmail={ong.email}
              onChange={(event) =>
                setCreatedDonation({
                  ...createdDonation,
                  ongName: event.target.value,
                  ongID: ong.id,
                  ongEmail: ong.email,
                  ongAddress: ong.address,
                  companyName: business.fantasyName,
                  companyCnpj: business.cnpj,
                  companyPhone: business.phone,
                })
              }
            />
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <Button
            className="text-green-600 font-semibold px-8 border-green-600 border-2 py-2 rounded hover:bg-gray-200"
            onClick={toggleDonation}
            text="Voltar"
            variant="outline"
          />
          <Button
            onClick={() => createDonation()}
            className="bg-green-500 text-white py-2 font-bold px-8 rounded hover:bg-green-600"
            text="Solicitar Doação"
          />
        </div>
      </div>
    </div>
  );
}
