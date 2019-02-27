export default {
  decimal(num, digit) {
    digit = typeof digit === 'undefined' ? 2 : digit;

    num = (+num).toFixed(digit);

    return +num;
  },

  money(num, digit) {

    if (num < 1) {
      return this.this.decimal(num, 6);
    }

    if (num < 100) {
      return this.decimal(num, 4);
    }

    digit = typeof digit === 'undefined' ? 2 : digit;

    var behind = '';
    if (num >= 100000000) {
      num = this.decimal(num / 100000000, digit);
      behind = '亿';
    } else if (num >= 10000) {
      num = this.decimal(num / 10000, digit);
      behind = '万';
    }

    num = this.commaMoney(num, digit);

    return num + behind;
  },

  commaMoney(num, digit) {
    if (num < 1) {
      return this.decimal(num, 6);
    }

    if (num < 100) {
      return this.decimal(num, 4);
    }

    digit = typeof digit === 'undefined' ? 2 : digit;

    num = parseFloat((Number(num) + "").replace(/[^\d\.-]/g, "")).toFixed(digit) + "";
    var l = num.split(".")[0].split("").reverse(),
      r = num.split(".")[1];
    var t = "";

    for (var i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) != l.length ? "," : "");
    }

    if (r) {
      return t.split("").reverse().join("") + "." + r;
    } else {
      return t.split("").reverse().join("");
    }

  },

  comma (num, digit) {
    digit = typeof digit === 'undefined' ? 2 : digit;

    num = Number(num).toString();

    //是否有小数点
    if(num.split('.')[1]){
      num = parseFloat(num).toFixed(digit);
    }else{
      num = parseFloat(num).toString();
    }

    var l = num.split(".")[0].split("").reverse();
    var r = num.split(".")[1];
    var t = "";

    for (var i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 === 0 && (i + 1) != l.length ? "," : "");
    }

    if (r) {
      return t.split("").reverse().join("") + "." + r;
    } else {
      return t.split("").reverse().join("");
    }

  },

  date(date, format) {

    if (!date) return '';
    // if (typeof date === 'string') {
    //   date = date.replace(/\-/g, '/');
    //   if( /[^/]/.test(date) ) {
    //     date = Number(date);
        
    //   }
    //   console.log(date);
    // }
    date = new Date(date);
    format = format || 'yyyy-MM-dd';

    var o = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length == 1 ? o[k] :
          ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }
}
