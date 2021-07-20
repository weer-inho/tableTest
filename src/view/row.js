// import AbstractView from 'abstract.js';

export const createEmptyRow = (row) => {
  const {number, date, priority, сustomersNumber, designation} = row;
  const priorityTag = (priority) => {
    switch(priority) {
      case 1: {
        return 'Низкий';
      }

      case 2: {
        return 'Средний';
      }

      case 3: {
        return 'Высокий';
      }

      default: {
        return;
      }
    }
  };

  return `<div class="product-item-container" >
        <tr class="product__item">
            <td class="product__info">
               <a href="#">${number}</a>
             </td>
          <td class="product__info">
            <a href="#">${date}</a>
          </td>
          <td class="product__info">${priorityTag(priority)}</td>
          <td class="product__info">
            ${сustomersNumber}
          </td>
          <td class="product__info">${designation}</td>
          <td class="product__info">
            <a class="product__btn popup" href="#">Посмотреть</a>
            </td>
        </tr>
      </div>`;
};

// export default class Row extends AbstractView {
//   constructor(row) {
//     super();
//     this._row = row;
//   }

//   getTemplate() {
//     return createEmptyRow(row);
//   }
// }
