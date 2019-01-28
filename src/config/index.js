//测试环境
let test = {
  hostUrl: '',
}

//生产环境
let prod = {
  hostUrl: ''
}

//开发环境
let dev = test;

export default process.env.ENV === 'prod' ? prod : process.env.ENV === 'test' ? test : dev;
