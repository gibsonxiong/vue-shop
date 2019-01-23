//测试环境
let test = {
  hostUrl: 'https://yolotest.yzhchain.com/bmfwSystem',
}

//生产环境
let prod = {
  hostUrl: 'https://yoloserver.yzhchain.com/bmfwSystem'
}

//开发环境
let dev = test;

export default process.env.ENV === 'prod' ? prod : process.env.ENV === 'test' ? test : dev;
