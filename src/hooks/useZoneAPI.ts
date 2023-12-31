import { useEffect, useState } from "react";
import { NidusApiClient, UpdateZone, Zone } from "../api/NidusAPIClient";

interface ZoneAPIHook {
  zones: Zone[];
  loading : boolean;
  error : string | null;
  updateZone: (deviceId: string, data : UpdateZone) => void;
}

interface UseZoneApiProps {
  baseURL: string;
}

/**
 * Return an ZoneAPIHook containing state variables and functions for interacting with the Zone API.
 *
 * @param {UseZoneApiProps} baseURL - The base URL for the API.
 * @return {ZoneAPIHook} An object containing the following properties:
 *   - `zones`: An array of Zone objects.
 *   - `loading`: A boolean indicating whether the API is currently loading.
 *   - `error`: A string containing any error message from the API.
 *   - `updateZone`: A function for updating a zone.
 */
const useZoneAPI = ({ baseURL }: UseZoneApiProps) : ZoneAPIHook => {
  const [apiClient] = useState(new NidusApiClient(baseURL));
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setLoading(true);
        const fetchedZones = await apiClient.getZones();
        setZones(fetchedZones.data);
        setError(null);
      } catch (error:any) {
        setError(error.message || "Error fetching zones");
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, [apiClient]);

  const updateZone = async (deviceId: string, data: UpdateZone) => {
    try {
      setLoading(true);
      await apiClient.updateZone(deviceId, data);
      setError(null);
    } catch (error: any) {
      setError(error.message || "Error updating zone");
    } finally {
      setLoading(false);
    }
  };


  return {
    zones,
    loading,
    error,
    updateZone,
  };
};

export default useZoneAPI;
