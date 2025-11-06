import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  type AxiosError,
} from "axios";
import { loading } from "./loading";
import { notify } from "./notify";
import { API_TIMEOUT } from "./types";

export interface ApiConfig {
  baseURL?: string;
  timeout?: number;
  showLoadingOnMutations?: boolean;
  showErrorNotifications?: boolean;
  authTokenKey?: string;
  onUnauthorized?: () => void;
}

const defaultConfig: ApiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: API_TIMEOUT,
  showLoadingOnMutations: true,
  showErrorNotifications: true,
  authTokenKey: "auth_token",
  onUnauthorized: () => {
    localStorage.removeItem("auth_token");
    window.location.href = "/login";
  },
};

let currentConfig = { ...defaultConfig };

const api = axios.create({
  baseURL: currentConfig.baseURL,
  timeout: currentConfig.timeout,
  headers: {
    "Content-Type": "application/json",
  },
});

export function configureApi(config: Partial<ApiConfig>) {
  currentConfig = { ...currentConfig, ...config };
  
  if (config.baseURL) {
    api.defaults.baseURL = config.baseURL;
  }
  if (config.timeout) {
    api.defaults.timeout = config.timeout;
  }
}

function addAuthTokenToRequest(config: InternalAxiosRequestConfig) {
  const token = localStorage.getItem(currentConfig.authTokenKey!);
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

function showLoadingForMutations(config: InternalAxiosRequestConfig) {
  if (currentConfig.showLoadingOnMutations && config.method !== "get") {
    loading.show("Processing...");
  }
}

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    addAuthTokenToRequest(config);
    showLoadingForMutations(config);
    return config;
  },
  (error: AxiosError) => {
    loading.hide();
    return Promise.reject(error);
  }
);

function handleUnauthorized() {
  if (currentConfig.showErrorNotifications) {
    notify.error("Unauthorized", "Please log in again");
  }
  if (currentConfig.onUnauthorized) {
    currentConfig.onUnauthorized();
  }
}

function handleErrorResponse(error: AxiosError) {
  if (!currentConfig.showErrorNotifications) {
    return;
  }

  if (!error.response) {
    if (error.request) {
      notify.error("Network Error", "Unable to connect to the server");
    } else {
      notify.error("Error", error.message);
    }
    return;
  }

  const status = error.response.status;
  const message = (error.response.data as any)?.message || "An error occurred";

  switch (status) {
    case 401:
      handleUnauthorized();
      break;
    case 403:
      notify.error(
        "Forbidden",
        "You do not have permission to perform this action"
      );
      break;
    case 404:
      notify.error("Not Found", "The requested resource was not found");
      break;
    case 500:
      notify.error(
        "Server Error",
        "Internal server error. Please try again later."
      );
      break;
    default:
      notify.error("Error", message);
  }
}

api.interceptors.response.use(
  (response: AxiosResponse) => {
    loading.hide();
    return response;
  },
  (error: AxiosError) => {
    loading.hide();
    handleErrorResponse(error);
    return Promise.reject(error);
  }
);

export default api;
