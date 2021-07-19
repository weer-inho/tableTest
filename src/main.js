import {createEmptyTable} from './view/table.js';
import {createEmptyRow} from './view/row.js';
import {render, getRandomArrayElement, getRandomIntegerFloat, generateRow, drawTable} from './utils/util.js';

const ALL_ROWS = 5;

const rows = new Array(ALL_ROWS).fill().map(generateRow);
console.log(rows)

const shop = document.querySelector(".shop");
render(shop, createEmptyTable());
const table = shop.querySelector('.products__block');

drawTable(rows, shop);
