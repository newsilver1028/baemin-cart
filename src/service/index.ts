import axios from 'axios';
import { camelizeKeys } from 'humps';

export const getMerchantInfoApi = () =>
  axios.get('https://us-central1-react-baemin.cloudfunctions.net/merchantInfo').then((res) => camelizeKeys(res.data));
