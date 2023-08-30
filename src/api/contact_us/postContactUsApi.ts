// import ApiService from '../ApiService';
import { PayloadData } from './type';
import MockApiService from '../MockApiService';
import json from './__mock__/success_201.json';

const postContactUsApi = (
  data: PayloadData
): Promise<any> => {
  const uri = '';

  // return ApiService.POST(uri, data);
  return MockApiService.POST(json, { timeout: 3000 });
};

export default postContactUsApi;
