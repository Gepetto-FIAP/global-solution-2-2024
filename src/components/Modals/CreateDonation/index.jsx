"use client";

import { Button } from "@/components/Button";
import FoodList from "@/components/FoodList";
import { Select } from "@/components/Select";
import { useDonate } from "@/hooks/useDonate";

export function CreateDonation({ isOpen, onClose, toggleList }) {
  const { createdDonation, setCreatedDonation } = useDonate();

  console.log(createdDonation);

  const handleToggleList = () => {
    if (!createdDonation.type) {
      return alert("Selecione o tipo de alimento para continuar");
    }

    if (!createdDonation.items) {
      return alert("Adicione pelo menos um alimento para continuar");
    }

    if (!createdDonation.data || !createdDonation.time) {
      return alert("Selecione a data e horário para continuar");
    }

    toggleList();
  };

  if (!isOpen) return null;
  return (
    <div className="max-h-[50%] overflow-x-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div className="bg-white rounded-[24px] w-[678px] p-12 relative max-h-[90vh] overflow-auto z-50">
          <button
            className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-[#FF9800]"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-[32px] font-bold text-[#FF9800] mb-4 text-center">
            Cadastrar nova doação
          </h2>
          <form className="mt-8">
            <div className="flex gap-x-4 mb-4">
              <div className="mb-4">
                <Select
                  label="Tipo de alimento"
                  id="tipo-alimento"
                  required
                  onChange={(event) =>
                    setCreatedDonation({
                      ...createdDonation,
                      type: event.target.value,
                    })
                  }
                >
                  <option defaultValue="" disabled selected hidden>
                    Selecione o tipo de alimento
                  </option>
                  <option value="perecivel">
                    Somente Alimentos Perecíveis
                  </option>
                  <option value="nao-perecivel">
                    Somente Alimentos Não Perecíveis
                  </option>
                  <option value="ambos">
                    Alimentos Perecíveis e Não Perecíveis
                  </option>
                </Select>
              </div>
            </div>

            <FoodList />

            <div className="my-8 flex gap-4">
              <div className="w-auto">
                <label className="block text-sm font-semibold text-black mb-1">
                  Horário da doação
                </label>
                <input
                  type="date"
                  className="border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  required
                  onChange={(event) =>
                    setCreatedDonation({
                      ...createdDonation,
                      data: event.target.value,
                    })
                  }
                />
              </div>
              <div className="w-auto self-end">
                <input
                  type="time"
                  className="border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  required
                  onChange={(event) =>
                    setCreatedDonation({
                      ...createdDonation,
                      time: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Button
                text="Ver lista de ONGs"
                type="button"
                onClick={() => handleToggleList()}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
