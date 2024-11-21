"use client";
import { useDonate } from "@/hooks/useDonate";

import Image from "next/image";
import {
  EmAbertoStatus,
  ProcessandoStatus,
  ConcluidoStatus,
  CanceladoStatus,
} from "@/components/StatusDonation";
import { Button } from "@/components/Button";

// PARA CANCELAR A DOAÇÃO
export default function UpdateDonation({ isOpen, onClose, donationID }) {
  const { GetDonation, UpdateDonationStatus } = useDonate();
  if (!isOpen) return null;

  const donation = GetDonation(donationID);

  const handleAccept = () => {
    UpdateDonationStatus(donationID, "processando");
    onClose();
  };

  const handleConclude = () => {
    UpdateDonationStatus(donationID, "concluido");
    onClose();
  };

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
          Atualizar Descarte
        </h2>

        <div className="flex flex-col items-center">
          <Image
            src="/assets/images/two-battery.png"
            height={120}
            width={183}
            alt="duas baterias"
            className="text-center mb-8"
          />

          {donation.status === "em-aberto" && <EmAbertoStatus />}
          {donation.status === "processando" && <ProcessandoStatus />}
          {donation.status === "concluido" && <ConcluidoStatus />}
          {donation.status === "cancelado" && <CanceladoStatus />}
        </div>

        <div className="text-black pl-[30px] mb-12">
          <p className="font-bold">INFORMAÇÕES DO ESTABELECIMENTO</p>
          <p className="font-semibold">{donation.companyName}</p>
          <p className="">{donation.companyPhone}</p>
          <p className="">{donation.companyAddress}</p>
          <p className="font-semibold">
            {" "}
            {new Date(donation.data).toLocaleDateString("pt-BR")} -{" "}
            {donation.time}
          </p>
        </div>

        <div className="mb-4 flex items-center justify-end gap-4 pr-[10px]">
          <Button variant="outline" text="Imprimir" />

          {donation.status === "em-aberto" && (
            <Button onClick={handleAccept} text="Aceitar Descarte" />
          )}

          {donation.status === "processando" && (
            <Button onClick={handleConclude} text="Concluir Descarte" />
          )}
        </div>
      </div>
    </div>
  );
}
