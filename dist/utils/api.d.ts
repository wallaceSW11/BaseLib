export interface ApiConfig {
    baseURL?: string;
    timeout?: number;
    showLoadingOnMutations?: boolean;
    showErrorNotifications?: boolean;
    authTokenKey?: string;
    onUnauthorized?: () => void;
}
declare const api: import("axios").AxiosInstance;
export declare function configureApi(config: Partial<ApiConfig>): void;
export default api;
//# sourceMappingURL=api.d.ts.map