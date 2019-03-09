import Vue from 'vue';
import Header from './Header';

import Home from './Home';
import Catalog from './Catalog';
import Shopcart from './Shopcart';
import Mine from './Mine';

import Search from './Search';
import SearchInput from './SearchInput';
import GoodsItem from './GoodsItem';
import NumberInput from './NumberInput';
import EmptyHint from './EmptyHint';
import Checkbox from './Checkbox';
import Radio from './Radio';

import Button from './Button';

import CellList from './CellList';
import Cell from './Cell';
import Share from './Share';
import RegionPicker from './RegionPicker';
import Popup from './Popup';
import SelectPopup from './SelectPopup';
import WrapPopup from './WrapPopup';
import Upload from './Upload';
import Rate from './Rate';
import M_button from './M_button';
import RecommendList from './RecommendList';
import CouponItem from './CouponItem';
import CountDown from './CountDown';


Vue.component('c-header', Header);

Vue.component('c-home', Home);
Vue.component('c-catalog', Catalog);
Vue.component('c-shopcart', Shopcart);
Vue.component('c-mine', Mine);

Vue.component('c-search', Search);
Vue.component('c-search-input', SearchInput);
Vue.component('c-goods-item', GoodsItem);
Vue.component('c-number-input', NumberInput);
Vue.component('c-empty-hint', EmptyHint);

Vue.component('c-checkbox', Checkbox);
Vue.component('c-button', Button);

Vue.component('c-cell-list', CellList);
Vue.component('c-cell', Cell);

Vue.component('c-popup', Popup);
Vue.component('c-select-popup', SelectPopup);
Vue.component('c-wrap-popup', WrapPopup);
Vue.component('c-region-picker', RegionPicker);
Vue.component('c-share', Share);

Vue.component('m-button', M_button);
Vue.component('c-radio', Radio);
Vue.component('c-upload', Upload);
Vue.component('c-rate', Rate);
Vue.component('c-recommend-list',RecommendList)
Vue.component('c-coupon-item',CouponItem)

Vue.component('c-count-down',CountDown)