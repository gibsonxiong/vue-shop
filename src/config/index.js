//测试环境
let test = {
  hostUrl: 'http://localhost:6868',
}

//生产环境
let prod = {
  hostUrl: 'http://182.61.53.191:6868'
}

//开发环境
let dev = test;

let config = process.env.ENV === 'prod' ? prod : process.env.ENV === 'test' ? test : dev;

//作为Vue插件
config.install = function (Vue) {
  Vue.prototype.$$config = config;
}

export default config;

