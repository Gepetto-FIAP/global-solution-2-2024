"use client";

import { useEffect, useState } from "react";
import ViewDonationONG from "./components/viewDonationONG";
import UpdateDonation from "./components/updateDonation";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDonate } from "@/hooks/useDonate";
import { OngTableRow } from "@/components/OngTableRow";
import { useLogin } from "@/hooks/useLogin";

const Doar = () => {
  const [isViewDonationONG, setIsViewDonationONG] = useState(false);
  const [isViewDonationId, setIsViewDonationId] = useState("");
  const [isUpdateDonation, setUpdateDonation] = useState(false);
  const [isUpdateDonationId, setIsUpdateDonationId] = useState("");

  const { ong } = useLogin();
  const { GetDonationsByOng } = useDonate();
  const allDonations = GetDonationsByOng(ong.id);

  return (
    <div className="h-screen overflow-y-auto flex flex-col justify-between relative">
      <main className="flex-1">
        <div className="pt-14 flex flex-col items-center bg-white w-full h-full">
          <h1 className="text-black text-4xl font-bold">{ong.name}</h1>
          <p className="text-black text-xl pb-12 pt-4">Lista de Doações</p>

          <table className="w-4/5">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  STATUS
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  ESTABELECIMENTO
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  SOBRE A DOAÇÃO
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody>
              {allDonations.length > 0 ? (
                allDonations.map((donation) => (
                  <OngTableRow
                    key={donation.donationID}
                    status={donation.status}
                    companyName={donation.companyName}
                    companyPhone={donation.companyPhone}
                    companyAddress={donation.companyAddress}
                    items={donation.items}
                    type={donation.type}
                    data={donation.data}
                    time={donation.time}
                    donationID={donation.donationID}
                    setIsViewDonationModal={setIsViewDonationONG}
                    setIsViewDonationId={setIsViewDonationId}
                    setIsUpdateDonationModal={setUpdateDonation}
                    setIsUpdateDonationId={setIsUpdateDonationId}
                  />
                ))
              ) : (
                <tr className="text-center text-2xl text-gray-500 font-semibold">
                  <td colSpan="5" className="pt-5">
                    Nenhuma doação recebida! 😥
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <ViewDonationONG
          isOpen={isViewDonationONG}
          onClose={() => setIsViewDonationONG(false)}
          donationID={isViewDonationId}
        />
        <UpdateDonation
          isOpen={isUpdateDonation}
          onClose={() => setUpdateDonation(false)}
          donationID={isUpdateDonationId}
        />
      </main>
    </div>
  );
};

export default Doar;
