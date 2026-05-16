export interface NotifyComponentRef {
  show: (type: NotifyType, title: string, message?: string) => void;
  hide: () => void;
}

export interface ConfirmOptions {
  persistent?: boolean;
  confirmText?: string;
  cancelText?: string;
  confirmColor?: string;
  cancelColor?: string;
}

export interface ConfirmComponentRef {
  ConfirmDialog: (title: string, message: string, options?: ConfirmOptions) => Promise<boolean>;
}

// Utility Types
export type NotifyType = 'success' | 'error' | 'warning' | 'info';

export interface NotifyOptions {
  type: NotifyType;
  title: string;
  message?: string;
  duration?: number;
}

// Constants
export const NOTIFY_DURATION = 3000;
export const API_TIMEOUT = 30000;
