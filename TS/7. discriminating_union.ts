interface SuccessResponse<T> {
  status: 'success';
  payload: T;
}

interface ErrorResponse {
  status: 'error';
  error: string;
}

// wazne - unia dyskryminująca nie poradzi sobie z zagniezdzoną wartością
type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

const response: ApiResponse<number> = {} as ApiResponse<number>;

const handleResponse = (res: ApiResponse<number>) => {
  if(res.status === 'success') {
      console.log(res.payload.toFixed(2));
  }
  if(res.status === 'error') {
      console.log(res.error.length);
  }
}