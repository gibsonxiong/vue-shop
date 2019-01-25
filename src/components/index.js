import Vue from 'vue';
import Header from './Header';

import Home from './Home';
import Catalog from './Catalog';
import Shopcart from './Shopcart';
import Mine from './Mine';

import Search from './Search';
import SearchInput from './SearchInput';

import GoodsList from './GoodsList';

Vue.component('c-header', Header);

Vue.component('c-home', Home);
Vue.component('c-catalog', Catalog);
Vue.component('c-shopcart', Shopcart);
Vue.component('c-mine', Mine);

Vue.component('c-search', Search);
Vue.component('c-search-input', SearchInput);

Vue.component('c-goodslist', GoodsList);