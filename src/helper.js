import fetch from 'node-fetch';
import {
  getStats
} from './utils/index.js';

console.log('---- API Testing ----');

var rsn ='Afx31';
var res = await fetch(getStats(rsn));
console.log(res)