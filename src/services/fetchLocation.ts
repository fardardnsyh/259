import axios from "axios";
import { LocationData } from "./types";

export const fetchLocation = async (ip: string): Promise<LocationData> => {
  try {
    const API_KEY = import.meta.env.VITE_IP_API_KEY;

    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );

    const { lat, lng, city, region, country, postalCode } =
      response.data.location;
    const position: [number, number] = [lat, lng];
    let location = `${city}, ${region}, ${country}`;
    let timezone = response.data.location.timezone;
    let isp = response.data.isp;

    if (country === "ZZ" || isp === "" || timezone === "") {
      location = "N/A";
      timezone = "N/A";
      isp = "N/A";
    }

    return { ipAddress: ip, position, location, postalCode, timezone, isp };
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};
