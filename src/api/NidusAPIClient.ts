import axios, { AxiosRequestConfig } from "axios";

export interface Device {
  id: string;
  name: string;
  mac: string;
  ip: string;
  capabilities: Capability[];
  zone: Zone;
  paired: boolean;
  zoned: boolean;
}

export interface PairDevice {
  mac: string;
  ip: string;
  capabilities: Capability[];
}

export interface UpdateDevice {
  name?: string;
  mac?: string;
  zone?: Zone;
  floor: string;
  bgColor?: string;
}

export interface Capability {
  id: string;
  type: string;
  kind: string;
}

export interface CreateCapability {
  type: string;
  kind: string;
}

export interface UpdateCapability {
  type?: string;
  kind?: string;
}

export interface Zone {
  id: string;
  name: string;
  floor: string;
}
export interface CreateZone {
  name?: string;
  floor?: string;
}

export interface UpdateZone {
  name?: string;
  floor?: string;
}

export interface FetchZoneSuccess {
  success: boolean;
  data: Zone[];
  message: string;
}

export interface FetchDevicesSuccess {
  success: boolean;
  data: Device[];
  message: string;
}

export interface FetchCapabilitiesSuccess {
  success: boolean;
  data: Capability[];
  message: string;
}

export class NidusApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error.message;
    }
  }

  // Devices Endpoints
  public async pairDevice(data: PairDevice): Promise<void> {
    await this.request({
      method: "post",
      url: `${this.baseURL}/devices/pair`,
      data,
    });
  }

  public async getDevices(
    skip?: string,
    limit?: string,
    zoneId?: string,
    capabilityId?: string
  ): Promise<FetchDevicesSuccess> {
    const params = {
      skip,
      limit,
      zone_id: zoneId,
      capability_id: capabilityId,
    };
    return this.request({
      method: "get",
      url: `${this.baseURL}/devices`,
      params,
    });
  }

  public async getDevice(deviceId: string): Promise<Device> {
    return this.request({
      method: "get",
      url: `${this.baseURL}/devices/${deviceId}`,
    });
  }

  public async deleteDevice(deviceId: string): Promise<void> {
    await this.request({
      method: "delete",
      url: `${this.baseURL}/devices/${deviceId}`,
    });
  }

  public async updateDevice(
    deviceId: string,
    data: UpdateDevice
  ): Promise<void> {
    await this.request({
      method: "patch",
      url: `${this.baseURL}/devices/${deviceId}`,
      data,
    });
  }

  public async unpairDevice(deviceId: string): Promise<void> {
    await this.request({
      method: "get",
      url: `${this.baseURL}/devices/${deviceId}/unpair`,
    });
  }

  public async resetDevice(deviceId: string): Promise<void> {
    await this.request({
      method: "get",
      url: `${this.baseURL}/devices/${deviceId}/reset`,
    });
  }

  // Zones Endpoints
  // ... Implement methods for zones endpoints

  public async getZones(skip?: string, limit?: string): Promise<FetchZoneSuccess> {
    const params = {
      skip,
      limit,
    };
    return this.request({
      method: "get",
      url: `${this.baseURL}/zones`,
      params,
    });
  }

  public async updateZone(deviceId: string, data: UpdateZone): Promise<void> {
    await this.request({
      method: "patch",
      url: `${this.baseURL}/zones/${deviceId}`,
      data,
    });
  }

  // Capabilities Endpoints
  // ... Implement methods for capabilities endpoints

  public async getCapabilities(
    skip?: string,
    limit?: string
  ): Promise<FetchCapabilitiesSuccess> {
    const params = {
      skip,
      limit,
    };
    return this.request({
      method: "get",
      url: `${this.baseURL}/capabilities`,
      params,
    });
  }

    public async updateCapability(
    deviceId: string,
    data: UpdateCapability
  ): Promise<void> {
    await this.request({
      method: "patch",
      url: `${this.baseURL}/capabilities/${deviceId}`,
      data,
    });
  }
  // Measurements Endpoints
  // ... Implement methods for measurements endpoints

  // Network Endpoints
  // ... Implement methods for network endpoints

  // Messaging Endpoints
  // ... Implement methods for messaging endpoints

  // Widgets Endpoints
  // ... Implement methods for widgets endpoints
}
