<template>
    <div class="choseIcon-container">
      <ul class="icon_lists clear" v-if="isShow">
        <li>
          <i class="icon iconfont icon-documents"></i>
          <div class="name">documents</div>
          <div class="fontclass">.icon-documents</div>
        </li>

        <li>
          <i class="icon iconfont icon-weixiu"></i>
          <div class="name">维修</div>
          <div class="fontclass">.icon-weixiu</div>
        </li>

        <li>
          <i class="icon iconfont icon-84"></i>
          <div class="name">分支</div>
          <div class="fontclass">.icon-84</div>
        </li>

        <li>
          <i class="icon iconfont icon-fenlei"></i>
          <div class="name">分类</div>
          <div class="fontclass">.icon-fenlei</div>
        </li>

        <li>
          <i class="icon iconfont icon-weixiugongju"></i>
          <div class="name">维修工具</div>
          <div class="fontclass">.icon-weixiugongju</div>
        </li>

        <li>
          <i class="icon iconfont icon-jueseguanli"></i>
          <div class="name">角色管理</div>
          <div class="fontclass">.icon-jueseguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbbaobiao"></i>
          <div class="name">wxb报表</div>
          <div class="fontclass">.icon-wxbbaobiao</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbbiaowang"></i>
          <div class="name">wxb标王</div>
          <div class="fontclass">.icon-wxbbiaowang</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbgongju"></i>
          <div class="name">wxb工具</div>
          <div class="fontclass">.icon-wxbgongju</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbmingxingdianpu"></i>
          <div class="name">wxb明星店铺</div>
          <div class="fontclass">.icon-wxbmingxingdianpu</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbpinpaibao"></i>
          <div class="name">wxb品牌宝</div>
          <div class="fontclass">.icon-wxbpinpaibao</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbzhanghu"></i>
          <div class="name">wxb账户</div>
          <div class="fontclass">.icon-wxbzhanghu</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbzhuye"></i>
          <div class="name">wxb主页</div>
          <div class="fontclass">.icon-wxbzhuye</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbsousuotuiguang"></i>
          <div class="name">wxb搜索推广</div>
          <div class="fontclass">.icon-wxbsousuotuiguang</div>
        </li>

        <li>
          <i class="icon iconfont icon-wxbdingwei"></i>
          <div class="name">wxb定位</div>
          <div class="fontclass">.icon-wxbdingwei</div>
        </li>

        <li>
          <i class="icon iconfont icon-shijian"></i>
          <div class="name">时间</div>
          <div class="fontclass">.icon-shijian</div>
        </li>

        <li>
          <i class="icon iconfont icon-juzhuanchang"></i>
          <div class="name">聚专场</div>
          <div class="fontclass">.icon-juzhuanchang</div>
        </li>

        <li>
          <i class="icon iconfont icon-ai-article"></i>
          <div class="name">文章</div>
          <div class="fontclass">.icon-ai-article</div>
        </li>

        <li>
          <i class="icon iconfont icon-wenzhangguanli"></i>
          <div class="name">文章管理02</div>
          <div class="fontclass">.icon-wenzhangguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontyouhuiquan"></i>
          <div class="name">iconfont-youhuiquan</div>
          <div class="fontclass">.icon-iconfontyouhuiquan</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontxingxing"></i>
          <div class="name">iconfont-xingxing</div>
          <div class="fontclass">.icon-iconfontxingxing</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontmingpian"></i>
          <div class="name">iconfont-mingpian</div>
          <div class="fontclass">.icon-iconfontmingpian</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontshouji"></i>
          <div class="name">iconfont-shouji</div>
          <div class="fontclass">.icon-iconfontshouji</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontriyongbaihuo"></i>
          <div class="name">iconfont-riyongbaihuo</div>
          <div class="fontclass">.icon-iconfontriyongbaihuo</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontphone"></i>
          <div class="name">iconfont-phone</div>
          <div class="fontclass">.icon-iconfontphone</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontqicheyongpin"></i>
          <div class="name">iconfont-qicheyongpin</div>
          <div class="fontclass">.icon-iconfontqicheyongpin</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontjingxihuaxue"></i>
          <div class="name">iconfont-jingxihuaxue</div>
          <div class="fontclass">.icon-iconfontjingxihuaxue</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontjiafangjiashi"></i>
          <div class="name">iconfont-jiafangjiashi</div>
          <div class="fontclass">.icon-iconfontjiafangjiashi</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontjixieqimo"></i>
          <div class="name">iconfont-jixieqimo</div>
          <div class="fontclass">.icon-iconfontjixieqimo</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontshumajiadian"></i>
          <div class="name">iconfont-shumajiadian</div>
          <div class="fontclass">.icon-iconfontshumajiadian</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontmeizhuangrihua"></i>
          <div class="name">iconfont-meizhuangrihua</div>
          <div class="fontclass">.icon-iconfontmeizhuangrihua</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfonthuangguan"></i>
          <div class="name">iconfont-huangguan</div>
          <div class="fontclass">.icon-iconfonthuangguan</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontshipin"></i>
          <div class="name">iconfont-shipin</div>
          <div class="fontclass">.icon-iconfontshipin</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfonthuagongyuanliao"></i>
          <div class="name">iconfont-huagongyuanliao</div>
          <div class="fontclass">.icon-iconfonthuagongyuanliao</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfonttongzhuangmuying"></i>
          <div class="name">iconfont-tongzhuangmuying</div>
          <div class="fontclass">.icon-iconfonttongzhuangmuying</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontwujingongju"></i>
          <div class="name">iconfont-wujingongju</div>
          <div class="fontclass">.icon-iconfontwujingongju</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontxiangjiaosuliao"></i>
          <div class="name">iconfont-xiangjiaosuliao</div>
          <div class="fontclass">.icon-iconfontxiangjiaosuliao</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontxiebaopeishi"></i>
          <div class="name">iconfont-xiebaopeishi</div>
          <div class="fontclass">.icon-iconfontxiebaopeishi</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontyejinkuangchan"></i>
          <div class="name">iconfont-yejinkuangchan</div>
          <div class="fontclass">.icon-iconfontyejinkuangchan</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontyiqiyibiao"></i>
          <div class="name">iconfont-yiqiyibiao</div>
          <div class="fontclass">.icon-iconfontyiqiyibiao</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontzhaomingdianzi"></i>
          <div class="name">iconfont-zhaomingdianzi</div>
          <div class="fontclass">.icon-iconfontzhaomingdianzi</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontgongyichongwu"></i>
          <div class="name">iconfont-gongyichongwu</div>
          <div class="fontclass">.icon-iconfontgongyichongwu</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfontfuzhuangneiyi"></i>
          <div class="name">iconfont-fuzhuangneiyi</div>
          <div class="fontclass">.icon-iconfontfuzhuangneiyi</div>
        </li>

        <li>
          <i class="icon iconfont icon-yingckjian"></i>
          <div class="name">隐藏可见</div>
          <div class="fontclass">.icon-yingckjian</div>
        </li>

        <li>
          <i class="icon iconfont icon-shouye"></i>
          <div class="name">服务中</div>
          <div class="fontclass">.icon-shouye</div>
        </li>

        <li>
          <i class="icon iconfont icon-zhuye"></i>
          <div class="name">主页</div>
          <div class="fontclass">.icon-zhuye</div>
        </li>

        <li>
          <i class="icon iconfont icon-guanli"></i>
          <div class="name">管理</div>
          <div class="fontclass">.icon-guanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-service"></i>
          <div class="name">服务</div>
          <div class="fontclass">.icon-service</div>
        </li>

        <li>
          <i class="icon iconfont icon-combinedshapecopy2"></i>
          <div class="name">写文章</div>
          <div class="fontclass">.icon-combinedshapecopy2</div>
        </li>

        <li>
          <i class="icon iconfont icon-wenzhang-copy"></i>
          <div class="name">文章</div>
          <div class="fontclass">.icon-wenzhang-copy</div>
        </li>

        <li>
          <i class="icon iconfont icon-wenjian"></i>
          <div class="name">文件</div>
          <div class="fontclass">.icon-wenjian</div>
        </li>

        <li>
          <i class="icon iconfont icon-pptwenjian"></i>
          <div class="name">PPT文件</div>
          <div class="fontclass">.icon-pptwenjian</div>
        </li>

        <li>
          <i class="icon iconfont icon-chengyuan"></i>
          <div class="name">成员</div>
          <div class="fontclass">.icon-chengyuan</div>
        </li>

        <li>
          <i class="icon iconfont icon-jiugongge"></i>
          <div class="name">九宫格</div>
          <div class="fontclass">.icon-jiugongge</div>
        </li>

        <li>
          <i class="icon iconfont icon-dingdanguanli"></i>
          <div class="name">订单管理</div>
          <div class="fontclass">.icon-dingdanguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-map"></i>
          <div class="name">map</div>
          <div class="fontclass">.icon-map</div>
        </li>

        <li>
          <i class="icon iconfont icon-all"></i>
          <div class="name">all</div>
          <div class="fontclass">.icon-all</div>
        </li>

        <li>
          <i class="icon iconfont icon-cart"></i>
          <div class="name">cart</div>
          <div class="fontclass">.icon-cart</div>
        </li>

        <li>
          <i class="icon iconfont icon-set"></i>
          <div class="name">set</div>
          <div class="fontclass">.icon-set</div>
        </li>

        <li>
          <i class="icon iconfont icon-arrowdown"></i>
          <div class="name">arrow-down</div>
          <div class="fontclass">.icon-arrowdown</div>
        </li>

        <li>
          <i class="icon iconfont icon-arrowleft"></i>
          <div class="name">arrow-left</div>
          <div class="fontclass">.icon-arrowleft</div>
        </li>

        <li>
          <i class="icon iconfont icon-arrowright"></i>
          <div class="name">arrow-right</div>
          <div class="fontclass">.icon-arrowright</div>
        </li>

        <li>
          <i class="icon iconfont icon-arrowup"></i>
          <div class="name">arrow-up</div>
          <div class="fontclass">.icon-arrowup</div>
        </li>

        <li>
          <i class="icon iconfont icon-favorite"></i>
          <div class="name">favorite</div>
          <div class="fontclass">.icon-favorite</div>
        </li>

        <li>
          <i class="icon iconfont icon-good"></i>
          <div class="name">good</div>
          <div class="fontclass">.icon-good</div>
        </li>

        <li>
          <i class="icon iconfont icon-close"></i>
          <div class="name">close</div>
          <div class="fontclass">.icon-close</div>
        </li>

        <li>
          <i class="icon iconfont icon-refresh"></i>
          <div class="name">refresh</div>
          <div class="fontclass">.icon-refresh</div>
        </li>

        <li>
          <i class="icon iconfont icon-map1"></i>
          <div class="name">map</div>
          <div class="fontclass">.icon-map1</div>
        </li>

        <li>
          <i class="icon iconfont icon-account"></i>
          <div class="name">account</div>
          <div class="fontclass">.icon-account</div>
        </li>

        <li>
          <i class="icon iconfont icon-search"></i>
          <div class="name">search</div>
          <div class="fontclass">.icon-search</div>
        </li>

        <li>
          <i class="icon iconfont icon-download"></i>
          <div class="name">download</div>
          <div class="fontclass">.icon-download</div>
        </li>

        <li>
          <i class="icon iconfont icon-compass"></i>
          <div class="name">compass</div>
          <div class="fontclass">.icon-compass</div>
        </li>

        <li>
          <i class="icon iconfont icon-comments"></i>
          <div class="name">comments</div>
          <div class="fontclass">.icon-comments</div>
        </li>

        <li>
          <i class="icon iconfont icon-down"></i>
          <div class="name">down</div>
          <div class="fontclass">.icon-down</div>
        </li>

        <li>
          <i class="icon iconfont icon-up"></i>
          <div class="name">up</div>
          <div class="fontclass">.icon-up</div>
        </li>

        <li>
          <i class="icon iconfont icon-play"></i>
          <div class="name">play</div>
          <div class="fontclass">.icon-play</div>
        </li>

        <li>
          <i class="icon iconfont icon-error"></i>
          <div class="name">error</div>
          <div class="fontclass">.icon-error</div>
        </li>

        <li>
          <i class="icon iconfont icon-prompt"></i>
          <div class="name">prompt</div>
          <div class="fontclass">.icon-prompt</div>
        </li>

        <li>
          <i class="icon iconfont icon-success"></i>
          <div class="name">success</div>
          <div class="fontclass">.icon-success</div>
        </li>

        <li>
          <i class="icon iconfont icon-stop"></i>
          <div class="name">stop</div>
          <div class="fontclass">.icon-stop</div>
        </li>

        <li>
          <i class="icon iconfont icon-help"></i>
          <div class="name">help</div>
          <div class="fontclass">.icon-help</div>
        </li>

        <li>
          <i class="icon iconfont icon-time"></i>
          <div class="name">time</div>
          <div class="fontclass">.icon-time</div>
        </li>

        <li>
          <i class="icon iconfont icon-cry"></i>
          <div class="name">cry</div>
          <div class="fontclass">.icon-cry</div>
        </li>

        <li>
          <i class="icon iconfont icon-add"></i>
          <div class="name">add</div>
          <div class="fontclass">.icon-add</div>
        </li>

        <li>
          <i class="icon iconfont icon-minus"></i>
          <div class="name">minus</div>
          <div class="fontclass">.icon-minus</div>
        </li>

        <li>
          <i class="icon iconfont icon-link"></i>
          <div class="name">link</div>
          <div class="fontclass">.icon-link</div>
        </li>

        <li>
          <i class="icon iconfont icon-atm"></i>
          <div class="name">atm</div>
          <div class="fontclass">.icon-atm</div>
        </li>

        <li>
          <i class="icon iconfont icon-skip"></i>
          <div class="name">skip</div>
          <div class="fontclass">.icon-skip</div>
        </li>

        <li>
          <i class="icon iconfont icon-attachment"></i>
          <div class="name">attachment</div>
          <div class="fontclass">.icon-attachment</div>
        </li>

        <li>
          <i class="icon iconfont icon-browse"></i>
          <div class="name">browse</div>
          <div class="fontclass">.icon-browse</div>
        </li>

        <li>
          <i class="icon iconfont icon-phone"></i>
          <div class="name">phone</div>
          <div class="fontclass">.icon-phone</div>
        </li>

        <li>
          <i class="icon iconfont icon-bad"></i>
          <div class="name">bad</div>
          <div class="fontclass">.icon-bad</div>
        </li>

        <li>
          <i class="icon iconfont icon-text"></i>
          <div class="name">text</div>
          <div class="fontclass">.icon-text</div>
        </li>

        <li>
          <i class="icon iconfont icon-iconfont-shanzi"></i>
          <div class="name">iconfont-shanzi</div>
          <div class="fontclass">.icon-iconfont-shanzi</div>
        </li>

        <li>
          <i class="icon iconfont icon-erweima1688"></i>
          <div class="name">二维码</div>
          <div class="fontclass">.icon-erweima1688</div>
        </li>

        <li>
          <i class="icon iconfont icon-renminbi1688"></i>
          <div class="name">人民币</div>
          <div class="fontclass">.icon-renminbi1688</div>
        </li>

        <li>
          <i class="icon iconfont icon-xiangce"></i>
          <div class="name">相册</div>
          <div class="fontclass">.icon-xiangce</div>
        </li>

        <li>
          <i class="icon iconfont icon-7tianbaotui"></i>
          <div class="name">7天包退</div>
          <div class="fontclass">.icon-7tianbaotui</div>
        </li>

        <li>
          <i class="icon iconfont icon-tupianbaohu"></i>
          <div class="name">图片保护</div>
          <div class="fontclass">.icon-tupianbaohu</div>
        </li>

        <li>
          <i class="icon iconfont icon-dongtaiwenben"></i>
          <div class="name">动态文本</div>
          <div class="fontclass">.icon-dongtaiwenben</div>
        </li>

        <li>
          <i class="icon iconfont icon-home"></i>
          <div class="name">主页</div>
          <div class="fontclass">.icon-home</div>
        </li>

        <li>
          <i class="icon iconfont icon-icon-test"></i>
          <div class="name">编辑文章</div>
          <div class="fontclass">.icon-icon-test</div>
        </li>

        <li>
          <i class="icon iconfont icon-book_"></i>
          <div class="name">book_2</div>
          <div class="fontclass">.icon-book_</div>
        </li>

        <li>
          <i class="icon iconfont icon-kaoqinguanli"></i>
          <div class="name">考勤管理</div>
          <div class="fontclass">.icon-kaoqinguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-guanliyuan"></i>
          <div class="name">管理员</div>
          <div class="fontclass">.icon-guanliyuan</div>
        </li>

        <li>
          <i class="icon iconfont icon-laptop"></i>
          <div class="name">笔记本电脑</div>
          <div class="fontclass">.icon-laptop</div>
        </li>

        <li>
          <i class="icon iconfont icon-icon-test1"></i>
          <div class="name">组织管理</div>
          <div class="fontclass">.icon-icon-test1</div>
        </li>

        <li>
          <i class="icon iconfont icon-guanlikehu"></i>
          <div class="name">管理客户</div>
          <div class="fontclass">.icon-guanlikehu</div>
        </li>

        <li>
          <i class="icon iconfont icon-layers"></i>
          <div class="name">layers</div>
          <div class="fontclass">.icon-layers</div>
        </li>

        <li>
          <i class="icon iconfont icon-guanlikehu1"></i>
          <div class="name">管理客户</div>
          <div class="fontclass">.icon-guanlikehu1</div>
        </li>

        <li>
          <i class="icon iconfont icon-zhanhuiguanli"></i>
          <div class="name">展会管理</div>
          <div class="fontclass">.icon-zhanhuiguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-menu"></i>
          <div class="name">菜单</div>
          <div class="fontclass">.icon-menu</div>
        </li>

        <li>
          <i class="icon iconfont icon-wangzhan"></i>
          <div class="name">网站</div>
          <div class="fontclass">.icon-wangzhan</div>
        </li>

        <li>
          <i class="icon iconfont icon-dingdanguanli1"></i>
          <div class="name">订单管理</div>
          <div class="fontclass">.icon-dingdanguanli1</div>
        </li>

        <li>
          <i class="icon iconfont icon-yidongdiannao"></i>
          <div class="name">移动电脑</div>
          <div class="fontclass">.icon-yidongdiannao</div>
        </li>

        <li>
          <i class="icon iconfont icon-shijian1"></i>
          <div class="name">时间</div>
          <div class="fontclass">.icon-shijian1</div>
        </li>

        <li>
          <i class="icon iconfont icon-tuihuobaozhang"></i>
          <div class="name">退货保障</div>
          <div class="fontclass">.icon-tuihuobaozhang</div>
        </li>

        <li>
          <i class="icon iconfont icon-wenjian1"></i>
          <div class="name">文件</div>
          <div class="fontclass">.icon-wenjian1</div>
        </li>

        <li>
          <i class="icon iconfont icon-baoming"></i>
          <div class="name">报名</div>
          <div class="fontclass">.icon-baoming</div>
        </li>

        <li>
          <i class="icon iconfont icon-zmxy"></i>
          <div class="name">芝麻信用</div>
          <div class="fontclass">.icon-zmxy</div>
        </li>

        <li>
          <i class="icon iconfont icon-jiaoseziliao"></i>
          <div class="name">角色资料</div>
          <div class="fontclass">.icon-jiaoseziliao</div>
        </li>

        <li>
          <i class="icon iconfont icon-icon--"></i>
          <div class="name">主页</div>
          <div class="fontclass">.icon-icon--</div>
        </li>

        <li>
          <i class="icon iconfont icon-fuwuguwen"></i>
          <div class="name">服务顾问</div>
          <div class="fontclass">.icon-fuwuguwen</div>
        </li>

        <li>
          <i class="icon iconfont icon-yanjizhushou-shangchuan_weixiuchaijishi"></i>
          <div class="name">维修拆机史</div>
          <div class="fontclass">.icon-yanjizhushou-shangchuan_weixiuchaijishi</div>
        </li>

        <li>
          <i class="icon iconfont icon-caidan"></i>
          <div class="name">菜单</div>
          <div class="fontclass">.icon-caidan</div>
        </li>

        <li>
          <i class="icon iconfont icon-caidanshezhi"></i>
          <div class="name">菜单设置</div>
          <div class="fontclass">.icon-caidanshezhi</div>
        </li>

        <li>
          <i class="icon iconfont icon-jiaoseguanli"></i>
          <div class="name">角色管理</div>
          <div class="fontclass">.icon-jiaoseguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-biaodanguanli"></i>
          <div class="name">表单管理</div>
          <div class="fontclass">.icon-biaodanguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-fuwuguanli"></i>
          <div class="name">服务管理</div>
          <div class="fontclass">.icon-fuwuguanli</div>
        </li>

        <li>
          <i class="icon iconfont icon-PPT"></i>
          <div class="name">PPT</div>
          <div class="fontclass">.icon-PPT</div>
        </li>

        <li>
          <i class="icon iconfont icon-xinwendongtai"></i>
          <div class="name">新闻动态</div>
          <div class="fontclass">.icon-xinwendongtai</div>
        </li>
      </ul>
      <ul class="icon_lists">
        <li v-for="item in list" v-bind:key="item.key" @click="handleChoose(item.iconName, item.iconClass)">
          <i :class="item.iconClass"></i>
          <div class="name">{{ item.iconName }}</div>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        list: [],
        isShow: true
      };
    },
    mounted() {
      this.getList()
      this.isShow = false
    },
    methods: {
      getList: function() {
        const iconNameList = document.getElementsByClassName('name')
        const iconClassList = document.getElementsByClassName('fontclass')
        this.list = []
        let obj = {}
          for(let i = 0; i < iconNameList.length; i++) {
          obj = {
            iconName: '',
            iconClass: ''
          }
          obj.iconName = iconNameList[i].innerHTML
          obj.iconClass = 'icon iconfont ' + iconClassList[i].innerHTML.substr(1)
          this.list.push(obj)
        }
      },
      handleChoose: function(iconName, iconClass) {
        this.$emit('icon-data', iconName, iconClass)
        this.$emit('dialog-visible', false)
      }
    }
  }
</script>

<style lang="scss">

  .choseIcon-container {
    .el-dialog__title {
      font-weight: bold;
    }
    .icon_lists li {
      display: inline-block;
      width: 100px;
      height: 180px;
      text-align: center;
      list-style: none !important;
      .icon {
        font-size: 42px;
        line-height: 100px;
        margin: 10px 0;
        color: #333;
        -webkit-transition: font-size 0.25s ease-out 0s;
        transition: font-size 0.25s ease-out 0s;
        &:hover {
          color: #45aed6;
        }
      }
    }
    .fontclass {
      display: none;
    }
  }
</style>
