//测试环境
let test = {
  hostUrl: 'http://192.168.43.193:6868',
}

//生产环境
let prod = {
  hostUrl: 'http://129.204.43.133:6868'
}

//开发环境
let dev = test;

let config = process.env.ENV === 'prod' ? prod : process.env.ENV === 'test' ? test : dev;

//作为Vue插件
config.install = function (Vue) {
  Vue.prototype.$$config = config;
}

export default config;

