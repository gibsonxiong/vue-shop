import router from '@/router';

let cachePrefix = '_cache_';
let watchsKey = '_watchs';
let tasksKey = '_tasks';


export default function (options = {}) {

  return {
    data() {
      return {
        $cid:'',
        $restored: false
      };
    },
    methods: {
      $routerCacheStore() {
        this.$cid = String(+new Date());

        let wrap = options.scrollWrapSelector ? this.$el.querySelector(options.scrollWrapSelector) : this.$el;
        let scrollTop = wrap ? wrap.scrollTop : 0;

        let data = {
          data: this.$data,
          scrollTop
        };
        data = JSON.stringify(data);

        //监听事件
        this.$routerCacheOn(this.$cid);

        let newRoute = {
          ...this.$route
        };
        newRoute.query.v = this.$cid;

        let url = location.origin + '/#' + this.$router.resolve(newRoute).route.fullPath;
        history.replaceState(null, null, url);

        sessionStorage.setItem(`${cachePrefix}${this.$cid}`, data);

        Object.values(this.$refs).forEach(refs => {
          //refs有可能是单个，也有可以是多个，统一按多个处理
          if (!Array.isArray(refs)) {
            refs = [refs];
          }

          refs.forEach((ref) => {
            ref.$routerCacheStore && ref.$routerCacheStore();
          })
        });
      },
      $routerCacheRestore() {
        this.$cid = this.$route.query.v;

        if (!this.$cid) return this.$restored = false;


        let data = sessionStorage.getItem(`${cachePrefix}${this.$cid}`);

        if (data) {

          data = JSON.parse(data);
          Object.assign(this.$data, data.data);

          this.$routerCacheCheck(this.$cid);

          this.$restored = true;

          //恢复滚动位置
          if (data.scrollTop) {
            this.$nextTick(() => {
              let wrap = options.scrollWrapSelector ? this.$el.querySelector(options.scrollWrapSelector) : this.$el;

              if (!wrap) return;

              wrap.scrollTop = data.scrollTop;
            });
          }

        } else {
          this.$restored = false;
        }

        
        sessionStorage.removeItem(`${cachePrefix}${this.$cid}`);
        
        this.$nextTick(()=>{
          let newRoute = {
            ...this.$route
          };
          delete newRoute.query['v'];
  
          let url = location.origin + '/#' + this.$router.resolve(newRoute).route.fullPath;
          history.replaceState(null, null, url);
        })

      },
      $routerCacheOn(key) {
        let watchEvents = this.$watchEvents ? this.$watchEvents() : null;

        if (!watchEvents) return;


        let watchs = sessionStorage.getItem(watchsKey);
        watchs = watchs ? JSON.parse(watchs) : {};


        Object.keys(watchEvents).forEach((name) => {
          let watch = watchs[name] || (watchs[name] = []);

          if (watch.indexOf(key) === -1) {
            watch.push(key);
          }
        });

        sessionStorage.setItem(watchsKey, JSON.stringify(watchs));
      },
      //把watchs变为task
      $routerCacheEmit(name,value) {
        let watchs = sessionStorage.getItem(watchsKey);
        watchs = watchs ? JSON.parse(watchs) : {};
        let tasks = sessionStorage.getItem(tasksKey);
        tasks = tasks ? JSON.parse(tasks) : {};

        let watch = watchs[name];
        let task = tasks[name] || (tasks[name] = {arr:[]});

        task.value = value;

        if (!watch) return;

        watch.forEach(key => {
          if (task.arr.indexOf(key) === -1) {
            task.arr.push(key);
          }
        });

        delete watchs[name];

        sessionStorage.setItem(watchsKey, JSON.stringify(watchs));
        sessionStorage.setItem(tasksKey, JSON.stringify(tasks));
      },
      $routerCacheCheck(key) {
        let watchEvents = this.$watchEvents ? this.$watchEvents() : null;

        if (!watchEvents) return;

        let watchs = sessionStorage.getItem(watchsKey);
        watchs = watchs ? JSON.parse(watchs) : {};
        let tasks = sessionStorage.getItem(tasksKey);
        tasks = tasks ? JSON.parse(tasks) : {};

        Object.keys(watchEvents).forEach((name) => {
          let task = tasks[name];
          let watch = watchs[name];
          let index;

          if (watch && (index = watch.indexOf(key)) >= 0) {
            watch.splice(index, 1);
          }

          if (task && (index = task.arr.indexOf(key)) >= 0) {
            watchEvents[name] && watchEvents[name].call(this, task.value);
            task.arr.splice(index, 1);
          }
        });

        sessionStorage.setItem(watchsKey, JSON.stringify(watchs));
        sessionStorage.setItem(tasksKey, JSON.stringify(tasks));
      }
    },

    beforeRouteLeave(to, from, next) {
      let route = router.resolve(router.history.getCurrentLocation()).route;

      //如果是后退，不做缓存
      // route.path !== from.path 有2个情况， 1.用户点击前进按钮  2.用户点击后退按钮
      if (!to.query.v && route.path === from.path) {
        this.$routerCacheStore();
      }

      next();
    },
    created() {
      this.$routerCacheRestore();
    }

  }
}
