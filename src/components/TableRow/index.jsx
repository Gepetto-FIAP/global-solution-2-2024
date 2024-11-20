import Image from "next/image";

export function TableRow({
  status,
  ongName,
  ongEmail,
  type,
  data,
  time,
  setIsViewDonationModal,
  setIsViewDonationId,
  donationID,
}) {
  let statusColor = "";
  if (status === "em-aberto") statusColor = "bg-yellow-500";
  if (status === "processando") statusColor = "bg-blue-500";
  if (status === "concluido") statusColor = "bg-green-500";
  if (status === "cancelado") statusColor = "bg-red-500";

  let formatedStatus = "";
  if (status === "em-aberto") formatedStatus = "Em aberto";
  if (status === "processando") formatedStatus = "Processando";
  if (status === "concluido") formatedStatus = "Concluído";
  if (status === "cancelado") formatedStatus = "Cancelado";

  let formatedType = "";
  if (type === "perecivel") formatedType = "Somente pilhas";
  if (type === "nao-perecivel") formatedType = "Baterias mais complexas";
  if (type === "ambos") formatedType = "Todo e qualquer tipo de bateria";

  const handleOpenViewModal = () => {
    setIsViewDonationModal(true);
    setIsViewDonationId(donationID);
  };

  return (
    <>
      <tr className="bg-gray-100 border-t-2 border-gray-300">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
          <span
            className={`${statusColor} h-3 w-3 rounded-full inline-block mr-2`}
          ></span>
          {formatedStatus}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
          <b>{ongName}</b>
          <p>{ongEmail}</p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
          <b>{formatedType}</b>
          <p>
            {new Date(data).toLocaleDateString("pt-BR")} - {time}
          </p>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">
          <button className="text-green-500 hover:text-green-600">
            <Image
              onClick={handleOpenViewModal}
              src="/assets/images/eye.svg"
              height={25}
              width={25}
              alt="vizualizar"
            />
          </button>
        </td>
      </tr>
    </>
  );
}
