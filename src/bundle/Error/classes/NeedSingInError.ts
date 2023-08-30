class NeedSingInError extends Error {
  status: number;

  constructor(errorText = 'Token is invalid or expired') {
    super(errorText);
    this.name = 'NeedSingInError';
    this.status = 401;
  }
}

export default NeedSingInError;
