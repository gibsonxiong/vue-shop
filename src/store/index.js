import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        city: '',
        cityStatus: 0,   //0-未定位 1-定位中 2-定位成功 3-定位失败,
        cityStatusMap: {
            0: '未定位',
            1: '定位中',
            2: '定位成功',
            3: '定位失败'
        }
    },
    mutations: {
        setCity(state, city) {
            state.city = city;
        },
        setCityStatus(state, cityStatus) {
            state.cityStatus = cityStatus;
        },

    },

    actions: {
        // 百度地图获取经纬度
        location({ commit }) {
            try {
                var geolocation = new BMap.Geolocation();
                // 开启SDK辅助定位
                geolocation.enableSDKLocation();

                commit('setCityStatus', 1);

                geolocation.getCurrentPosition(function (r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        let city = r.address.city.replace(/市$/g, "");

                        commit('setCity', city);
                        commit('setCityStatus', 2);
                    } else {
                        throw new Error();
                    }
                });
            } catch (err) {
                commit('setCity', '');
                commit('setCityStatus', 3);
            }
        }
    }
});


export default store;
