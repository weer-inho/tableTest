import {createEmptyTable} from './view/table.js';
import {createEmptyRow} from './view/row.js';
import {render,
        getRandomArrayElement,
        getRandomIntegerFloat,
        generateRow,
        drawTable,
        sortRows
} from './utils/util.js';

// создаю массив данных
const ALL_ROWS = 5;
const rows = new Array(ALL_ROWS).fill().map(generateRow);

// нахожу нужный див и рисую в нем таблицу из полученных выше данных
const shop = document.querySelector(".shop");
drawTable(rows, shop);

// нахожу первую строчку таблицы
const mainRow = shop.querySelector(".products__head");
mainRow.addEventListener('click', (evt) => {
  console.log('номер')

  drawTable(
    sortRows(evt, rows),
    shop
  );
})

