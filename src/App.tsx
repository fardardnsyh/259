import React, { useState, useEffect } from "react";
import Error from "./components/Error";
import Header from "./components/Header";
import IPAddressInfo from "./components/IPAddressInfo";
import IPSearch from "./components/IPSearch";
import MapComponent from "./components/MapComponent";
import MapSkeleton from "./components/MapSkeleton";
import { LocationData, fetchLocation, fetchIpAddress } from "./services";
import "leaflet/dist/leaflet.css";

const App: React.FC = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const ip = await fetchIpAddress();
      const locationData = await fetchLocation(ip);
      setLocationData(locationData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError("");
    try {
      const locationData = await fetchLocation(query);
      setLocationData(locationData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-rubik max-h-svh">
      <div className="w-full h-[300px] md:h-[280px] bg-mobile bg-cover bg-center bg-blue md:bg-desktop"></div>

      <div className="absolute z-10 top-5 lg:top-10 left-1/2 transform -translate-x-1/2">
        <Header />
        <IPSearch onSearch={handleSearch} />
        <IPAddressInfo data={locationData} loading={loading} />
      </div>

      {loading ? (
        <MapSkeleton />
      ) : (
        <>
          {!loading && locationData && (
            <MapComponent position={locationData.position} />
          )}
        </>
      )}

      {error && <Error message={error} />}
    </div>
  );
};

export default App;
