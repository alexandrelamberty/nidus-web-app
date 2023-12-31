import { useEffect, useState } from "react";
import { Capability, NidusApiClient, UpdateCapability } from "../api/NidusAPIClient";

interface CapabilityAPIHook {
  capabilities: Capability[];
  loading : boolean;
  error : string | null;
  updateCapability: (deviceId: string, data : UpdateCapability) => void;
}

interface UseCapabilityApiProps {
  baseURL: string;
}

/**
 * Return an CapabilityAPIHook  containing state variables and functions for interacting with the Capability API.
 *
 * @param {UseCapabilityApiProps} baseURL - The base URL for the API.
 * @return {Object} An object containing the following properties:
 *   - `capabilities`: An array of Capability objects.
 *   - `loading`: A boolean indicating whether the API is currently loading.
 *   - `error`: A string containing any error message from the API.
 *   - `updateCapability`: A function for updating a capability.
 */
const useCapabilityAPI = ({ baseURL }: UseCapabilityApiProps) : CapabilityAPIHook => {
  const [apiClient] = useState(new NidusApiClient(baseURL));
  const [capabilities, setCapabilities] = useState<Capability[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setLoading(true);
        const fetchedCapabilities = await apiClient.getCapabilities();
        setCapabilities(fetchedCapabilities.data);
        setError(null);
      } catch (error:any) {
        setError(error.message || "Error fetching zones");
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, [apiClient]);

  const updateCapability = async (deviceId: string, data: UpdateCapability) => {
    try {
      setLoading(true);
      await apiClient.updateCapability(deviceId, data);
      setError(null);
    } catch (error: any) {
      setError(error.message || "Error updating zone");
    } finally {
      setLoading(false);
    }
  };


  return {
    capabilities,
    loading,
    error,
    updateCapability,
  };
};

export default useCapabilityAPI;
