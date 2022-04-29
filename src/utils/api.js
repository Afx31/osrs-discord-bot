import {
  BASE_HISCORE_URL,
  BASE_ITEM_URL
} from './constants';

export const getStats = (rsn) =>
  `${BASE_HISCORE_URL}${rsn}`;