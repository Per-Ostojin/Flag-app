import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

/**
 * Hämtar alla länder från REST Countries API.
 * @returns {Promise<Array>} En lista med länder.
 */
export const fetchAllCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    return response.data; // Returnera data från API:et
  } catch (error) {
    console.error("Kunde inte hämta länder:", error);
    throw error;
  }
};

/**
 * Hämtar länder baserat på en sökfråga.
 * @param {string} name Namnet på landet att söka efter.
 * @returns {Promise<Array>} En lista med länder som matchar sökningen.
 */
export const fetchCountriesByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/name/${name}`);
    return response.data;
  } catch (error) {
    console.error(`Kunde inte hämta länder med namnet "${name}":`, error);
    throw error;
  }
};

/**
 * Hämtar länder baserat på en region.
 * @param {string} region Regionen att filtrera på.
 * @returns {Promise<Array>} En lista med länder i den valda regionen.
 */
export const fetchCountriesByRegion = async (region) => {
  try {
    const response = await axios.get(`${BASE_URL}/region/${region}`);
    return response.data;
  } catch (error) {
    console.error(`Kunde inte hämta länder i regionen "${region}":`, error);
    throw error;
  }
};