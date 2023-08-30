import IApiServiceResponse from './types';

const handleNotJsonErrors = () => {
  throw new Error('Not JSON response');
};

const handleBrowserErrors = (response: any) => {
  switch (response.status) {
    default:
      handleNotJsonErrors();
  }
};

const handleErrors = (response: any) => {
  handleBrowserErrors(response);

  return true;
};

class ApiService {
  static async POST<T>(
    uri: string,
    data: any,
    params?: any
  ): Promise<IApiServiceResponse<T>> {
    const options = {
      'Content-Type': 'application/json',
    };

    const response = await fetch(uri, {
      method: 'POST',
      headers: options,
      body: JSON.stringify(data),
    });

    if (response.headers.get('content-type') !== 'application/json') {
      handleErrors(response);
    }

    const json = await response.json();

    return { response, json };
  }
}

export default ApiService;
