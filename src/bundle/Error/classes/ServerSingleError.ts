class ServerSingleError extends Error {
  error_content: string | undefined;

  error_type: string | undefined;

  status_code: number;

  constructor(response: any) {
    super(response?.statusText);
    this.name = 'ServerSingleError';
    this.status_code = response?.status;
  }
}

export default ServerSingleError;
