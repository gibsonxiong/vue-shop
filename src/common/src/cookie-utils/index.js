function trim(str) {
  return String.prototype.trim.call(str);
}

export default {
  //设置cookie: cookie名，cookie值，天数
  set(name, value, secode) {　　
    var t = new Date();　　
    t.getTime(t.getTime() + secode * 1000);　　
    document.cookie = name + '=' + value + '; expires = ' + t;
  },

  //获取cookie
  get(name) {　　
    var arr = document.cookie.split(';'); //将cookie切割成数组
    　　
    for (var i = 0; i < arr.length; i++) {　　　
      var arr2 = arr[i].split('='); //数组元素以等号切割
      　　　　
      if (trim(arr2[0]) == trim(name)) {　　　　　
        return arr2[1]; //获取cookie名对应的cookie值
        　　　　
      }　　
    }　　
    return ''; //如果没有获取到值，返回空字符串
  },

  //删除cookie
  remove(name) {　
    this.set(name, 1, -1);
  }

}
