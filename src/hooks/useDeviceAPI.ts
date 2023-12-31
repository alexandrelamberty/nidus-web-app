import { useEffect, useState } from "react";
import { Device, NidusApiClient, PairDevice, UpdateDevice } from "../api/NidusAPIClient";

interface DeviceAPIHook {
  devices: Device[];
  loading : boolean;
  error : string | null;
  pairDevice: (data : PairDevice) => void;
  updateDevice: (deviceId: string, data : UpdateDevice) => void;
}

interface UseDeviceApiProps {
  baseURL: string;
}

/**
 * Return an DeviceAPIHook containing state variables and functions for interacting with the Device API.
 *
 * @param {UseDeviceApiProps} baseURL - The base URL for the API.
 * @return {Object} An object containing the following properties:
 *   - `devices`: An array of Device objects.
 *   - `loading`: A boolean indicating whether the API is currently loading.
 *   - `error`: A string containing any error message from the API.
 *   - `updateDevice`: A function for updating a device.
 */
const useDeviceAPI = ({ baseURL }: UseDeviceApiProps) : DeviceAPIHook => {
  const [apiClient] = useState(new NidusApiClient(baseURL));
  const [devices, setDevices] = useState<Device[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        setLoading(true);
        const fetchedDevices = await apiClient.getDevices();
        setDevices(fetchedDevices.data);
        setError(null);
      } catch (error:any) {
        setError(error.message || "Error fetching devices");
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, [apiClient]);

  const pairDevice = async (data: PairDevice) => {
    try {
      setLoading(true);
      await apiClient.pairDevice(data);
      setError(null);
    } catch (error: any) {
      setError(error.message || "Error pairing device");
    } finally {
      setLoading(false);
    }
  };

  const updateDevice = async (deviceId: string, data: UpdateDevice) => {
    try {
      setLoading(true);
      await apiClient.updateDevice(deviceId, data);
      setError(null);
    } catch (error: any) {
      setError(error.message || "Error updating device");
    } finally {
      setLoading(false);
    }
  };

  return {
    devices,
    loading,
    error,
    pairDevice,
    updateDevice,
  };
};

export default useDeviceAPI;
