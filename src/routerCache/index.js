// import router from '@/router';

// export default function (options = {}) {
//     return {
//         $saveVersion() {
//             let v = String(+new Date());

//             let newRoute = {
//                 ...this.$route
//             };
//             newRoute.query.v = v;

//             let url = location.origin + '/#' + router.resolve(newRoute).route.fullPath;
//             history.replaceState(null, null, url);
//         },

//         beforeRouteLeave(to, from, next) {
//             let route = router.resolve(router.history.getCurrentLocation()).route;

//             //如果是后退，不做缓存
//             // route.path !== from.path 有2个情况， 1.用户点击前进按钮  2.用户点击后退按钮
//             if (!to.query.v && route.path === from.path) {

//                 this.$saveVersion();
//             }

//             next();
//         },

//         created(){
//             // console.log(this);
//         }
//     }
// };