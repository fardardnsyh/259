import axios from "axios";

export const fetchIpAddress = async (): Promise<string> => {
  try {
    const { data } = await axios.get("https://api.ipify.org?format=json");
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    throw error;
  }
};
