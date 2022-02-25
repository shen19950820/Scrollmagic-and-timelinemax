$(function () {
    // 获取头部信息，并转为小写字符
    var userAgentInfo = navigator.userAgent.toLowerCase();
    getExplorer()

    //判断浏览器
    function getExplorer() {
        var isEdge = userAgentInfo.indexOf('edge') > -1;
        var isIE11 = userAgentInfo.indexOf('trident') > -1 && userAgentInfo.indexOf('rv:11.0') > -1;
        var isUC = userAgentInfo.indexOf("ucbrowser") > -1
        var isHW = userAgentInfo.indexOf("huaweibrowser") > -1
        var isFF = userAgentInfo.indexOf("firefox") > -1
        var isEdgeNew = userAgentInfo.indexOf('edg') > -1
        var isSafari = (userAgentInfo.indexOf('safari') > -1 || userAgentInfo.indexOf('iphone') > -1) && (userAgentInfo.indexOf('chrome') == -1)
        var isWeixin = userAgentInfo.indexOf("micromessenger") > -1;

        if (isEdge) {
            return 'Edge';
        } else if (isIE11) {
            return 'ie';
        } else if (isUC) {
            return 'uc'
        } else if (isHW) {
            return 'hw'
        } else if (isFF) {
            return 'ff'
        } else if (isEdgeNew) {
            return 'EdgeNew'
        } else if (isSafari) {
            return 'Safari'
        } else if (isWeixin) {
            return 'WX'
        }
    }


    //获取屏幕宽高
    var viewportHeight = window.innerHeight,
        viewportWidth = window.innerWidth,
        aspectRatio = viewportWidth / viewportHeight;


    //ScrollMagic全局
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            reverse: true
        }
    });


    //dom加载完初始化
    init();

    // 初始化
    function init() {

        if (!isIE()) {
            // 不是IE浏览器

        } else {
            // 是IE浏览器

        }

        //判断是否是IE浏览器
        function isIE() {
            if (getExplorer() == 'ie' || getExplorer() == 'Edge') {
                // $('.dirac').addClass('dirac-isIE')
                return true
            } else if (getExplorer() == 'hw') {
                // $('.dirac').addClass('dirac-isHW')
            } else if (getExplorer() == 'ff') {
                // $('.dirac').addClass('dirac-isFF')
            } else if (getExplorer() == 'Safari') {
                // $('body').addClass('dirac-isSafari')
            } else if (getExplorer() == 'WX') {
                // $('.dirac').addClass('dirac-isWX')
            } else if (getExplorer() == 'uc') {
                // $('.dirac').addClass('dirac-isUC')
            }
            return false
        }

        //根据分辨率设置动效
        function layout() {
            if (viewportWidth > 600 && viewportWidth < 900 && aspectRatio < 1.1) {
                return 'matex' //matex和pad竖版
            } else if (viewportWidth < 1024 && aspectRatio < 1) {
                return 'mob' //mobile
            } else if (viewportWidth < 1200 && aspectRatio > 1.1) {
                return 'pad' //pad横版
            } else if (viewportWidth >= 1200 && aspectRatio > 1) {
                return 'pc' //pc
            }
        }

    }


    

})