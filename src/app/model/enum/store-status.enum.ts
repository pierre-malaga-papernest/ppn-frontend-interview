export enum StoreStatus {
  idle = 'idle',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export type StoreStatusType = keyof typeof StoreStatus;
