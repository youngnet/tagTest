export const Utils = {
    getQueryString: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var href = window.location.href;
        var search = href.substring(href.indexOf("?"));
        var r = search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    },

    getCookie: function(name) {
        var arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
        else return null;
    },

    setCookie: function(name, value, expireAfterSeconds) {
        var exp = new Date();
        exp.setTime(exp.getTime() + expireAfterSeconds * 1000);
        document.cookie =
            name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },

    cookie: function(key, value, options) {
        var days, time, result, decode;

        // A key and value were given. Set cookie.
        if (arguments.length > 1 && String(value) !== "[object Object]") {
            // Enforce object
            options = Object.assign({}, options);

            if (value === null || value === undefined) options.expires = -1;

            if (typeof options.expires === "number") {
                days = options.expires * 24 * 60 * 60 * 1000;
                time = options.expires = new Date();

                time.setTime(time.getTime() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key),
                "=",
                options.raw ? value : encodeURIComponent(value),
                options.expires
                    ? "; expires=" + options.expires.toUTCString()
                    : "",
                options.path ? "; path=" + options.path : "",
                options.domain ? "; domain=" + options.domain : "",
                options.secure ? "; secure" : ""
            ].join(""));
        }

        // Key and possibly options given, get cookie
        options = value || {};

        decode = options.raw
            ? function(s) {
                  return s;
              }
            : decodeURIComponent;

        return (result = new RegExp(
            "(?:^|; )" + encodeURIComponent(key) + "=([^;]*)"
        ).exec(document.cookie))
            ? decode(result[1])
            : null;
    }
};

export const validityTime = (startTime, endTime) => {
    let start = startTime.split(" ")[0];
    let end = endTime.split(" ")[0];
    let startY = start.split("-")[0];
    let endY = end.split("-")[0];
    if (Number(endY) > Number(startY)) {
        return `${start.replace(/-/g, ".")}-${end.replace(/-/g, ".")}`;
    } else if (Number(endY) === Number(startY)) {
        let endArr = end.split("-");
        return `${start.replace(/-/g, ".")}-${endArr[1]}.${endArr[2]}`;
    }
};

export const sectionTime = (startTime, endTime) => {
    return `${startTime.substring(0, 16)}-${endTime.substring(11, 16)}`;
};

export const browser = {
    versions: (function() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            //移动终端浏览器版本信息
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1 //是否web应该程序，没有头部与底部
        };
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

export const formatPhone = phone => {
    if (phone) {
        return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    } else {
        return phone;
    }
};

//时间转换时间戳
export const dataToTime = (str = "") => {
    let date = new Date(str.replace(/-/g, "/")); //传入一个时间格式，如果不传入就是获取现在的时间了，这样做不兼容火狐。
    return date.getTime();
};

export const isEnd = data => {
    const { startTime = "", endTime = "" } = data;
    const nowTime = new Date().getTime();
    let startDate = dataToTime(startTime.replace(/-/g, "/"));
    let endDate = dataToTime(endTime.replace(/-/g, "/"));
    if (startDate <= nowTime && endDate > nowTime) {
        return true;
    } else {
        return false;
    }
};

export const toTwoDate = n => {
    if (n < 10) {
        return `0${n}`;
    } else {
        return n;
    }
};

export const tryTime = (startTime = "", endTime = "") => {
    startTime = startTime.replace(/-/g, "/");
    endTime = endTime.replace(/-/g, "/");
    let startYear = new Date(startTime).getFullYear();

    let startMonth = toTwoDate(new Date(startTime).getMonth() + 1);
    let startDay = toTwoDate(new Date(startTime).getDate());
    let startHour =
        toTwoDate(new Date(startTime).getHours()) +
        ":" +
        toTwoDate(new Date(startTime).getMinutes()) +
        "-" +
        toTwoDate(new Date(endTime).getHours()) +
        ":" +
        toTwoDate(new Date(endTime).getMinutes());
    return `${startYear}-${startMonth}-${startDay} ${startHour}`;
};

export const showDate = data => {
    const { startTime = "", endTime = "" } = data;

    let start_time = startTime.replace(/-/g, "/");
    let end_time = endTime.replace(/-/g, "/");
    let startYear = new Date().getFullYear(start_time);
    let nowYear = new Date().getFullYear();
    let startMonth = new Date(start_time).getMonth() + 1;
    let startDay = new Date(start_time).getDate();
    let startHour =
        toTwoDate(new Date(start_time).getHours()) +
        ":" +
        toTwoDate(new Date(start_time).getMinutes()) +
        "-" +
        toTwoDate(new Date(end_time).getHours()) +
        ":" +
        toTwoDate(new Date(end_time).getMinutes());
    // alert(startYear);
    if (parseInt(startYear) > parseInt(nowYear)) {
        return `${startYear}年${startMonth}月${startDay}日 ${startHour}`;
    } else {
        return `${startMonth}月${startDay}日 ${startHour}`;
    }
};
/*压缩图片*/
export const ImgToBase64 = (file, maxLen, callBack) => {
    var img = new Image();

    var reader = new FileReader(); //读取客户端上的文件
    reader.onload = function() {
        var url = reader.result; //读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的.所以必须使用reader.onload，
        img.src = url; //reader读取的文件内容是base64,利用这个url就能实现上传前预览图片
        //log('url===='+url)
    };
    img.onload = function() {
        //生成比例
        var width = img.width,
            height = img.height;
        //计算缩放比例
        //log('width-height22'+width +height+maxLen)
        var rate = 1000;
        if (width >= height) {
            if (width >= maxLen) {
                rate = maxLen / width;
            } else {
                rate = 1;
            }
        } else {
            if (height >= maxLen) {
                rate = maxLen / height;
            } else {
                rate = 1;
            }
        }
        img.width = width * rate;
        img.height = height * rate;
        //log('width-height'+width * rate+height * rate)
        //生成canvas
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var base64 = canvas.toDataURL("image/jpeg", 0.8);
        //log('base-canvas64'+base64)
        callBack(base64);
    };
    reader.readAsDataURL(file);
};

export const isExpird = (expirdTime = "") => {
    expirdTime = expirdTime.replace(/-/g, "/");
    let expird = new Date(expirdTime).getTime();
    let now = new Date().getTime();
    if (now > expird) {
        return true;
    } else {
        return false;
    }
};

export const isWebH5 = () => {
    var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
    if (
        ua.match(/MicroMessenger/i) == "micromessenger" ||
        ua.match(/WeiBo/i) == "weibo"
    ) {
        return false;
    } else {
        return true;
    }
};
export const allTeacher = (chapters = []) => {
    let teachers = [];
    let teacher_id = [];
    chapters.forEach(chapter => {
        chapter.sections.forEach(section => {
            let repeat = teacher_id.filter(item => item === section.teacher.id)
                .length;
            if (repeat === 0) {
                teacher_id.push(section.teacher.id);
                teachers.push(section.teacher.nickname);
            }
        });
    });
    if (teachers.length > 3) {
        let name = teachers.slice(0, 3);
        return name.join(" ") + "···";
    } else {
        return teachers.join(" ");
    }
};
export const allTeacherJoint = section => {
    let teachers = [];
    if (section.teacherId.length > 0) {
        teachers.push(section.teacher.nickname);
    }
    if (section.secondaryIds.length > 0) {
        section.secondary.forEach(assistant => {
            teachers.push(assistant.nickname);
        });
    }
    if (teachers.length > 3) {
        let name = teachers.slice(0, 3);
        return name.join(" ") + "···";
    } else {
        return teachers.join(" ");
    }
};

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}
