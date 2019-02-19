import router from '@/router';

let cachePrefix = '_cache_';
let watchsKey = '_watchs';
let tasksKey = '_tasks';


export default function (options = {}) {

  return {
    props: {
      cacheId: String
    },
    data() {
      return {
        $restored: false
      };
    },
    methods: {
      $routerCacheStore() {
        let cacheId = this.cacheId;
        let version = this.$route.query.v;

        if (!(version || cacheId)) return;

        version = version + '_' + cacheId;

        let wrap = options.scrollWrapSelector ? this.$el.querySelector(options.scrollWrapSelector) : this.$el;
        let scrollTop = wrap ? wrap.scrollTop : 0;

        let data = {
          data: this.$data,
          scrollTop
        };
        data = JSON.stringify(data);

        //监听事件
        this.$routerCacheOn(version);

        sessionStorage.setItem(`${cachePrefix}${version}`, data);

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
        let cacheId = this.cacheId;
        let version = this.$route.query.v;

        if (!(version || cacheId)) return this.$restored = false;

        version = version + '_' + cacheId;

        let data = sessionStorage.getItem(`${cachePrefix}${version}`);

        if (data) {

          data = JSON.parse(data);
          Object.assign(this.$data, data.data);

          this.$routerCacheCheck(version);

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

        sessionStorage.removeItem(`${cachePrefix}${version}`);

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
      $routerCacheEmit(name) {
        let watchs = sessionStorage.getItem(watchsKey);
        watchs = watchs ? JSON.parse(watchs) : {};
        let tasks = sessionStorage.getItem(tasksKey);
        tasks = tasks ? JSON.parse(tasks) : {};

        let watch = watchs[name];
        let task = tasks[name] || (tasks[name] = []);


        if (!watch) return;

        watch.forEach(key => {
          if (task.indexOf(key) === -1) {
            task.push(key);
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

          if (task && (index = task.indexOf(key)) >= 0) {
            watchEvents[name] && watchEvents[name].call(this);
            task.splice(index, 1);
          }
        });

        sessionStorage.setItem(watchsKey, JSON.stringify(watchs));
        sessionStorage.setItem(tasksKey, JSON.stringify(tasks));
      }
    },

    created() {
      this.$routerCacheRestore();
    }

  }
}
