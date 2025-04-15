import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { HttpAdapter } from "./http.adapter";

interface Options {
  baseUrl: string;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance;

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
    });
  }

  async get<T>(url: string = "", options?: AxiosRequestConfig): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options);
      return data;
    } catch {
      throw new Error("404");
    }
  }
}
