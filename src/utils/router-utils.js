import router from '@/router';

export default {
  getQuery() {
    return router.resolve(router.history.getCurrentLocation()).resolved.query;
  },

  setQuery(obj) {
    let route = router.resolve(router.history.getCurrentLocation()).resolved;

    Object.assign(route.query, obj);

    router.replace(route);
  }
}
