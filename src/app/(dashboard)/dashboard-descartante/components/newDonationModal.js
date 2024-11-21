"use client";
//não usado por enquanto 20/11/2024
export default function NewDonationModal({
  isOpen,
  onClose,
  CreateDonationAndListOngs,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-lg w-full max-w-lg p-12 relative max-h-[90vh] overflow-auto">
        <button
          className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold text-[#008E28]-500 mb-4 text-center">
          Cadastrar nova 
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-1">
              Tipo de alimento*
            </label>
            <select className="w-full border-gray-300 border-2 text-gray-400 rounded-md shadow-sm px-2 py-3 focus:border-[#008E28]-500 focus:ring-[#008E28]-500">
              <option value="" disabled selected hidden>
                Selecione um tipo de alimento
              </option>
              <option>Somente Alimentos Perecíveis</option>
              <option>Somente Alimentos Não Perecíveis</option>
              <option>Alimentos Perecíveis e Não Perecíveis</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-1">
              Peso total*
            </label>
            <input
              type="text"
              placeholder="Exemplo: 4kg"
              className="w-full p-2 border-gray-300 border-2 text-gray-400 rounded-lg shadow-sm focus:border-[#008E28]-500 focus:ring-[#008E28]-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-black mb-1">
              Lista de alimentos*
            </label>
            <input type="file" className="hidden" />
            <label className="w-full cursor-pointer flex border border-dashed text-gray-400 border-gray-300 rounded-lg p-2 focus:border-[#008E28]-500 focus:ring-[#008E28]-500">
              Escolher arquivo
            </label>
            <p className="text-sm text-gray-400">Apenas .csv ou .xls</p>
          </div>

          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-semibold text-black mb-1">
                Dia da semana*
              </label>
              <input
                type="date"
                className="w-full  border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-[#008E28]-500 focus:ring-[#008E28]-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-semibold text-black mb-1">
                Horário*
              </label>
              <input
                type="time"
                className="w-full  border-gray-300 border-2 text-gray-400 p-2 rounded-lg shadow-sm focus:border-[#008E28]-500 focus:ring-[#008E28]-500"
              />
            </div>
          </div>

          <div className="w-full flex justify-end">
            <button
              type="button"
              onClick={CreateDonationAndListOngs}
              className="bg-[#008E28]-500 text-white font-semibold py-2 px-7 rounded-lg hover:bg-[#008E28]-600"
            >
              Ver Lista de ONGs
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
