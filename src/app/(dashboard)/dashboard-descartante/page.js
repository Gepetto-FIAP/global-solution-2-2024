"use client";

import { useState } from "react";
import ONGListModal from "./components/ONGListModal";
import ViewDonationModal from "./components/viewDonationModal";
import { TableRow } from "@/components/TableRow";
import { CreateDonation } from "@/components/Modals/CreateDonation";
import { useDonate } from "@/hooks/useDonate";
import { Button } from "@/components/Button";
import { useLogin } from "@/hooks/useLogin";

const Doar = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isONGListModalOpen, setIsONGListModalOpen] = useState(false);
  const [isViewDonationModal, setIsViewDonationModal] = useState(false);
  const [isViewDonationId, setIsViewDonationId] = useState("");

  const { business } = useLogin();

  const { GetDonationsByCompany } = useDonate();
  const allDonations = GetDonationsByCompany(business.cnpj);

  const toggleList = () => {
    setIsDonationModalOpen(false);
    setIsONGListModalOpen(true);
  };

  const registerNewDonation = () => {
    setIsDonationModalOpen(true);
    setIsONGListModalOpen(false);
  };

  return (
    <div className="h-screen overflow-y-auto flex flex-col justify-between relative">
      <main className="flex-1">
        <div className="pt-14 flex flex-col items-center bg-white w-full h-full">
          <h1 className="text-black text-4xl font-bold">
            {business.fantasyName}
          </h1>
          <p className="text-black text-xl pb-12 pt-4">Lista de Descartes</p>

          <table className="w-4/5">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  STATUS
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  INFORMAÇÕES DO ESTABELECIMENTO
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-black">
                  SOBRE O DESCARTE
                </th>
                <th className="py-3 border-b-2 border-gray-300 text-right text-sm font-semibold">
                  <Button
                    onClick={() => setIsDonationModalOpen(true)}
                    text="Novo Descarte"
                    className="-mr-[2px]"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {allDonations.length > 0 ? (
                allDonations.map((donation) => (
                  <TableRow
                    key={donation.donationID}
                    status={donation.status}
                    ongName={donation.ongName}
                    ongEmail={donation.ongEmail}
                    type={donation.type}
                    data={donation.data}
                    time={donation.time}
                    donationID={donation.donationID}
                    setIsViewDonationModal={setIsViewDonationModal}
                    setIsViewDonationId={setIsViewDonationId}
                  />
                ))
              ) : (
                <tr className="text-center text-2xl text-gray-500 font-semibold">
                  <td colSpan="5" className="pt-5">
                    Nenhum descarte cadastrado! 😥
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <CreateDonation
          isOpen={isDonationModalOpen}
          onClose={() => setIsDonationModalOpen(false)}
          toggleList={toggleList}
        />
        <ONGListModal
          isOpen={isONGListModalOpen}
          onClose={() => setIsONGListModalOpen(false)}
          toggleDonation={registerNewDonation}
        />
        <ViewDonationModal
          isOpen={isViewDonationModal}
          donationID={isViewDonationId}
          onClose={() => setIsViewDonationModal(false)}
        />
      </main>
    </div>
  );
};

export default Doar;
