import Vue from 'vue';
import Header from './Header';

import Home from './Home';
import Catalog from './Catalog';
import Shopcart from './Shopcart';
import Mine from './Mine';

import Search from './Search';
import SearchInput from './SearchInput';

import GoodsList from './GoodsList';
import NumberInput from './NumberInput';
import EmptyHint from './EmptyHint';

import Button from './Button';


Vue.component('c-header', Header);

Vue.component('c-home', Home);
Vue.component('c-catalog', Catalog);
Vue.component('c-shopcart', Shopcart);
Vue.component('c-mine', Mine);

Vue.component('c-search', Search);
Vue.component('c-search-input', SearchInput);

Vue.component('c-goodslist', GoodsList);
Vue.component('c-number-input', NumberInput);
Vue.component('c-empty-hint', EmptyHint);

Vue.component('c-button', Button);


