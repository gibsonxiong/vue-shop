let cachePrefix = '_cache_';

export default {
    data() {
        return {
            restored: false
        };
    },
    props: {
        cacheId: String
    },
    methods: {
        restore() {
            let cacheId = this.cacheId;
            let version = this.$route.query.v;

            if (!(version || cacheId)) return this.restored = false;

            let data = sessionStorage.getItem(`${cachePrefix}${version}_${cacheId}`);

            if (data) {

                data = JSON.parse(data);
                Object.assign(this.$data, data.data);

                // this.$routerCacheCheck(version);

                this.restored = true;

                // this.$nextTick(() => {
                //     this.$el.scrollTop = data.scrollTop;
                // });
            } else {
                this.restored = false;
            }


            let url = location.href.split('?v=')[0];
            history.replaceState(null, null, url);

            sessionStorage.removeItem(`${cachePrefix}${version}_${cacheId}`);

        }
    },
    beforeRouteLeave(to, from, next) {
        let route = router.resolve(router.history.getCurrentLocation()).route;

        //如果是后退，不做缓存
        // route.path !== from.path 有2个情况， 1.用户点击前进按钮  2.用户点击后退按钮
        if (!to.query.v && route.path === from.path) {
            this.store();
        }

        next();
    },
    created() {
        this.restore();
    }

}