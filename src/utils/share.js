let wx = require("../assets/js/jweixin-1.4.0");
let mqq = require("../assets/js/qqapi");

const obj = {
    init() {
        const agent = this.getAgent();
        switch (agent) {
            case "qq":
                return this.qqShare;
            case "wx":
                return this.wxShare;
            case "wb":
                return this.wbShare;
            default:
                return () => {
                    console.log("not in qq、wx、wb no share");
                };
        }
    },
    getAgent() {
        var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
        const versions = this.versions();
        let kernel = "";
        if (versions.mobile) {
            kernel = "h5";
            if (versions.ios) {
                //是否在IOS浏览器打开
                kernel = "ios";
                this.version = "ios";
            }
            if (versions.android) {
                //是否在安卓浏览器打开
                kernel = "android";
                this.version = "android";
            }
            const regex = new RegExp(/QQ\//i);
            if (regex.test(ua)) {
                //在QQ空间打开
                kernel = "qq";
            }
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                //在微信中打开
                kernel = "wx";
            }
            if (ua.match(/WeiBo/i) == "weibo") {
                //在新浪微博客户端打开
                kernel = "wb";
            }
        } else {
            kernel = "pc";
        }

        return kernel;
    },
    versions() {
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
    },
    /**
     *  qq分享
     * @param {object} params
     */
    qqShare(params = {}) {
        let {
            link = location.href.split("#")[0],
            title = "一笑而过",
            imgUrl = "",
            desc = "",
            success = () => {}
        } = params;
        mqq.ui.setOnShareHandler(function(type) {
            mqq.ui.shareMessage(
                {
                    title,
                    desc,
                    share_type: type,
                    share_url: link,
                    image_url: imgUrl,
                    back: true
                },
                success
            );
        });
    },
    wbShare() {},
    /**
     *  微信分享
     * @param {object} params
     */
    async wxShare(params = {}) {
        /**
         * title, // 分享标题
         * desc, // 分享描述
         * link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
         * imgUrl, // 分享图标
         * success // 成功回调
         */
        let {
            link = location.href.split("#")[0],
            title = "一笑而过",
            imgUrl = "",
            desc = "",
            success = () => {}
        } = params;
        await this.wxConfig();

        wx.ready(function() {
            const opts = { link, title, imgUrl, desc, success };
            // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
            wx.updateAppMessageShareData(opts);
            // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
            wx.updateTimelineShareData(opts);

            // ----------- 兼容低版本 ----------- //
            wx.onMenuShareTimeline(opts);
            // 分享给朋友
            wx.onMenuShareAppMessage(opts);
            //  分享给qq
            wx.onMenuShareQQ(opts);
            // 分享到腾讯微博
            wx.onMenuShareWeibo(opts);
        });
    },
    async wxConfig() {
        // 请求后端获取参数
        let res = {};
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: [
                "updateAppMessageShareData",
                "updateTimelineShareData",
                "previewImage",
                "showOptionMenu",
                "hideAllNonBaseMenuItem",
                "showAllNonBaseMenuItem",
                "onMenuShareTimeline",
                "onMenuShareAppMessage",
                "onMenuShareQQ",
                "onMenuShareWeibo"
            ] // 必填，需要使用的JS接口列表
        });
    }
};

export default obj.init();
