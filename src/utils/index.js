const utils = {
    padZero(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    },

    adjustDate(date, type, num) {
        let adjust = 0;

        if(type == 'd'){
            adjust = 24 * 60 * 60 * 1000 * num;
        }else if(type == 'h'){
            adjust = 60 * 60 * 1000 * num;
        }else if(type == 'm'){
            adjust = 60 * 1000 * num;
        }else if(type == 's'){
            adjust = 1000 * num;
        }
        
        return new Date(
            date.getTime() + adjust
        );
    },

    countdown(endTime, ignore) {
        //获取当前时间
        var date = new Date();
        var now = date.getTime();
        var end = endTime.getTime();

        //时间差
        var leftTime = end - now;
        //定义变量 d,h,m,s保存倒计时的时间
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;

        if (leftTime >= 0) {
            d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
            h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
            m = Math.floor((leftTime / 1000 / 60) % 60);
            s = Math.floor((leftTime / 1000) % 60);
        }

        if (ignore == 'd') {
            h = h + (d * 24);
            d = 0;
        } else if (ignore == 'h') {
            m = m + ((h + (d * 24)) * 60);
            h = 0;
            d = 0;
        } else if (ignore == 'm') {
            s = s + (m + ((h + (d * 24)) * 60)) * 60;
            m = 0;
            h = 0;
            d = 0;
        }

        return {
            d,
            h,
            m,
            s
        }
    }
}

export default utils;