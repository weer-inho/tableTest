export const createEmptyTable = () => {
  return `<table class="products__block">
        <tbody>
           <tr class="products__head">
              <th class="products__number">№</th>
              <th class="products__data">Дата</th>
              <th class="products__priority">Приоритет</th>
              <th class="products__customer-number">№ Заказчика</th>
              <th class="products__condition">Состояние</th>
              <th class="products__name">actions</th>
           </tr>
        </tbody>

          <colgroup class="table-colgroup">
          <col width="100" valign="top">
          <col width="150" valign="top">
          <col width="150" valign="top">
          <col width="600" valign="top">
          <col width="100" valign="top">
          <col width="100" valign="top">
          </colgroup>
    </table>`;
};

