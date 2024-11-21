"use client";

import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuid } from "uuid";

export const DonateContext = createContext({});

export default function DonateProvider({ children }) {
  const { setItem, setItems, getItem, removeItem } = useLocalStorage(
    "fome-zero-donations"
  );
  const [createdDonation, setCreatedDonation] = useState({});
  /**
   * @param {Donation} donation
   * @returns {boolean}
   */
  function RegisterDonation(donation) {
    const newDonation = {
      donationID: uuid(),
      companyName: donation.companyName,
      companyCnpj: donation.companyCnpj,
      companyPhone: donation.companyPhone,
      ongName: donation.ongName,
      ongEmail: donation.ongEmail,
      ongAddress: donation.ongAddress,
      ongID: donation.ongID,
      type: donation.type,
      items: donation.items,
      data: donation.data,
      time: donation.time,
      status: "em-aberto",
    };

    setItems(newDonation);
    return true;
  }

  /**
   * @param {string} donationID
   * @returns {Donation}
   */
  function GetDonation(donationID) {
    const donations = getItem() || [];
    return donations.find((donation) => donation.donationID === donationID);
  }

  /**
   * @param {string} ongID
   * @returns {Donation}
   */
  function GetDonationsByOng(ongID) {
    const donations = getItem() || [];
    return donations.filter((donation) => donation.ongID === ongID);
  }

  /**
   * @param {string} companyCnpj
   * @returns {Donation}
   */
  function GetDonationsByCompany(companyCnpj) {
    const donations = getItem() || [];
    const NonOrderedDonations = donations.filter(
      (donation) => donation.companyCnpj === companyCnpj
    );

    return NonOrderedDonations.sort((a, b) => {
      const dateA = new Date(`${a.data}T${a.time}`);
      const dateB = new Date(`${b.data}T${b.time}`);
      return dateB - dateA;
    });
  }

  /**
   * @param {string} donationID
   * @param {"em-aberto" | "processando" | "concluido" | "cancelado"} status
   * @returns {boolean}
   */
  function UpdateDonationStatus(donationID, status) {
    const donations = getItem();
    const donationIndex = donations.findIndex(
      (donation) => donation.donationID === donationID
    );
    donations[donationIndex].status = status;
    removeItem();
    setItem(donations);
    return true;
  }

  return (
    <DonateContext.Provider
      value={{
        RegisterDonation,
        GetDonation,
        GetDonationsByCompany,
        GetDonationsByOng,
        UpdateDonationStatus,
        setCreatedDonation,
        createdDonation,
      }}
    >
      {children}
    </DonateContext.Provider>
  );
}
