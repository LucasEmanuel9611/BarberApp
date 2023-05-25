export type ThunkOptions<SuccessData = never, ErrorData = never> = {
  onSuccess?: (data: SuccessData) => void;
  onError?: (data: ErrorData) => void;
};
