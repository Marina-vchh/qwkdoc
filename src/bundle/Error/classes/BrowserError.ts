class BrowserError extends Error {
  status: number;

  constructor(response: any) {
    super(response?.statusText);
    this.name = 'BrowserError';
    this.status = response?.status;
  }
}

export default BrowserError;
