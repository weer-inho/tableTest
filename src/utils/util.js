import dayjs from 'dayjs';
import {Table} from '../view/table.js';
import {createEmptyRow} from '../view/row.js';
import {createEmptyTable} from '../view/table.js';
import {
  priorityArray,
  сustomersNumberArray,
  conditionArray,
  designationArray,
  PNArray,
  quantityArray,
  clientStateArray,
  activeArray
} from './const.js';

export const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

export const getRandomIntegerFloat = (min, max, numberOfDecimalPlaces = 0) => {
  let randomInt = Math.random() * (max - min + 1) + min;
  randomInt = randomInt.toFixed(numberOfDecimalPlaces);
  return parseFloat(randomInt);
};

export const getRandomArrayElement = (elements) => {
  return elements[getRandomIntegerFloat(0, elements.length - 1)];
};

const generateDate = () => {
  const daysGap = getRandomIntegerFloat(-36, 0);
  return dayjs().add(daysGap, 'day').toDate();
};

const generateValidityPeriod = () => {
  const daysGap = getRandomIntegerFloat(-365, 0);
  return dayjs().add(daysGap, 'day').toDate();
};


export const generateRow = () => {
  const dateVariable = generateDate();
  const validityPeriod = generateValidityPeriod();

  return {
    number: getRandomIntegerFloat(1, 200),
    date: dayjs(dateVariable).format('DD.MM.YYYY'),
    priority: getRandomArrayElement(priorityArray),
    сustomersNumber: getRandomArrayElement(сustomersNumberArray),
    condition: getRandomArrayElement(conditionArray),
    designation: getRandomArrayElement(designationArray),
    PN: getRandomArrayElement(PNArray),
    quantity: getRandomArrayElement(quantityArray),
    clientState: getRandomArrayElement(clientStateArray),
    summ: getRandomIntegerFloat(1000, 3000),
    validityPeriod,
    active: getRandomArrayElement(activeArray),
    EIquantity: getRandomIntegerFloat(50,250),
    price: getRandomIntegerFloat(500, 3500),
    NDSrate: getRandomIntegerFloat(50000, 100000),
    NDSsumm: getRandomIntegerFloat(150000, 600000),
    deliveryTime: getRandomIntegerFloat(10, 50),
    applicationNumber: getRandomIntegerFloat(500, 1000),
    applicationNumber: getRandomIntegerFloat(500, 1000),
    inTheOrder: getRandomIntegerFloat(0, 1),
  };
};

export const drawTable = (data, container) => {
  container.innerText = '';
  render(container, createEmptyTable());
  const table = document.querySelector('.products__tbody');

  for (let i = 0; i < data.length; i++) {
    render(table, createEmptyRow(data[i]));
  }
}

export const sortRows = (evt, array) => {
  switch(evt.target.className) {
    case 'products__number': {
      return [...array].sort((a, b) => {
        if (a.number < b.number) {
          return -1;
        }
        if (a.number > b.number) {
          return 1;
        }
        return 0;
      })
    }

    case 'products__data': {
      return [...array].sort((a, b) => {
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        return 0;
      })
    }

    default: {
      return;
    }
  }
};

