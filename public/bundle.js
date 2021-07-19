/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/table.js */ "./src/view/table.js");
/* harmony import */ var _view_row_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/row.js */ "./src/view/row.js");
/* harmony import */ var _utils_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/util.js */ "./src/utils/util.js");




const ALL_ROWS = 5;

const rows = new Array(ALL_ROWS).fill().map(_utils_util_js__WEBPACK_IMPORTED_MODULE_2__["generateRow"]);
console.log(rows)

const shop = document.querySelector(".shop");
Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_2__["render"])(shop, Object(_view_table_js__WEBPACK_IMPORTED_MODULE_0__["createEmptyTable"])());
const table = shop.querySelector('.products__block');

Object(_utils_util_js__WEBPACK_IMPORTED_MODULE_2__["drawTable"])(rows, shop);


/***/ }),

/***/ "./src/utils/const.js":
/*!****************************!*\
  !*** ./src/utils/const.js ***!
  \****************************/
/*! exports provided: priorityArray, сustomersNumberArray, conditionArray, designationArray, PNArray, quantityArray, clientStateArray, activeArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priorityArray", function() { return priorityArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "сustomersNumberArray", function() { return сustomersNumberArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conditionArray", function() { return conditionArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designationArray", function() { return designationArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PNArray", function() { return PNArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantityArray", function() { return quantityArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientStateArray", function() { return clientStateArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeArray", function() { return activeArray; });
const priorityArray = [
  'Низкий',
  'Средний',
  'Высокий',
];

const сustomersNumberArray = [
  '!@1E6]f!wq[H',
  'Flacon',
  '@7$&A{O9~#bQ',
  '@#+5khMb**v8',
  'LJ[9fh8|U=?!',
  '$J32sjIw$-Cc',
];

const conditionArray = [
  'КП выдано частично',
  'Отменена',
  'Принято в работу',
];

const designationArray = [
  'ЕЕУ0417 Аккумулятроная батарея(производитель Societe SERMAT)',
  '863080-00 Пиропатрон/Pyrothechnic Cartridge',
  'Пиротехнический картридж 8w0823823 audi a4 a5 8w0 купить',
  '88959951 GM ЗАПЧАСТЬ бу купить в Челябинске по цене от 1120 руб',
  '--',
  '',
];

const PNArray = [
  'Аккумулятроная батарея',
  'Пиропатрон',
  'Пиротехнический картридж',
  'GM ЗАПЧАСТЬ',
];

const quantityArray = [
  '1шт',
  '2шт',
  '3шт',
  '4шт',
  '5шт',
  '6шт',
];

const clientStateArray = [
  'Проработка прекращена',
  'Проработка запущена',
  'Проработка остановлена',
];

const activeArray = [
  'Действует',
  'Не действует',
];






/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! exports provided: render, getRandomIntegerFloat, getRandomArrayElement, generateRow, drawTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerFloat", function() { return getRandomIntegerFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayElement", function() { return getRandomArrayElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRow", function() { return generateRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawTable", function() { return drawTable; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_table_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/table.js */ "./src/view/table.js");
/* harmony import */ var _view_row_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/row.js */ "./src/view/row.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./const.js */ "./src/utils/const.js");





const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const getRandomIntegerFloat = (min, max, numberOfDecimalPlaces = 0) => {
  let randomInt = Math.random() * (max - min + 1) + min;
  randomInt = randomInt.toFixed(numberOfDecimalPlaces);
  return parseFloat(randomInt);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntegerFloat(0, elements.length - 1)];
};

const generateDate = () => {
  const daysGap = getRandomIntegerFloat(-36, 0);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, 'day').toDate();
};

const generateValidityPeriod = () => {
  const daysGap = getRandomIntegerFloat(-365, 0);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, 'day').toDate();
};


const generateRow = () => {
  const dateVariable = generateDate();
  const validityPeriod = generateValidityPeriod();

  return {
    number: getRandomIntegerFloat(1, 200),
    date: dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateVariable).format('DD.MM.YYYY'),
    priority: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["priorityArray"]),
    сustomersNumber: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["сustomersNumberArray"]),
    condition: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["conditionArray"]),
    designation: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["designationArray"]),
    PN: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["PNArray"]),
    quantity: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["quantityArray"]),
    clientState: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["clientStateArray"]),
    summ: getRandomIntegerFloat(1000, 3000),
    validityPeriod,
    active: getRandomArrayElement(_const_js__WEBPACK_IMPORTED_MODULE_3__["activeArray"]),
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

const drawTable = (data, container) => {
  container.innerText = '';
  render(container, Object(_view_table_js__WEBPACK_IMPORTED_MODULE_1__["createEmptyTable"])());
  const table = document.querySelector('.products__block');

  for (let i = 0; i < data.length; i++) {
    render(table, Object(_view_row_js__WEBPACK_IMPORTED_MODULE_2__["createEmptyRow"])(data[i]));
  }
}




/***/ }),

/***/ "./src/view/row.js":
/*!*************************!*\
  !*** ./src/view/row.js ***!
  \*************************/
/*! exports provided: createEmptyRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyRow", function() { return createEmptyRow; });
const createEmptyRow = (row) => {
  const {number, date, priority, сustomersNumber, designation} = row;

  return `<div class="product-item-container" >
        <tr class="product__item">
            <td class="product__info">
               <a href="#">${number}</a>
             </td>
          <td class="product__info">
            <a href="#">${date}</a>
          </td>
          <td class="product__info">${priority}</td>
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


/***/ }),

/***/ "./src/view/table.js":
/*!***************************!*\
  !*** ./src/view/table.js ***!
  \***************************/
/*! exports provided: createEmptyTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyTable", function() { return createEmptyTable; });
const createEmptyTable = () => {
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



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map