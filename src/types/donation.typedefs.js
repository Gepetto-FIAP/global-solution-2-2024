/**
 * @typedef {Object} DonationItem
 * @property {string} item
 * @property {number} quantity
 * @property {"g" | "un" | "l"} measure
 */

/**
 * @typedef {Object} Donation
 * @property {string} donationID
 * @property {string} companyName
 * @property {string} companyCnpj
 * @property {string} companyAddress
 * @property {string} companyPhone
 * @property {string} ongName
 * @property {string} ongID
 * @property {"perecivel" | "nao-perecivel" | "ambos"} type
 * @property {DonationItem[]} items
 * @property {string} data
 * @property {"em-aberto" | "processando" | "concluido" | "cancelado"} status
 */
