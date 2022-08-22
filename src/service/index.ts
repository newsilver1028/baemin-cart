import axios from 'axios';
import { MerchantInfoResponse } from '../types/index.d';

export const getMerchantInfoApi = () =>
  axios.get<MerchantInfoResponse>('https://us-central1-react-baemin.cloudfunctions.net/merchantInfo');
