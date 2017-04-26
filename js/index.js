/**
 * Created by qucy on 2017/1/9.
 */
window.onload=function () {
    var aShowShop=document.getElementsByClassName("showShop")[0];
    var oContext=document.getElementsByClassName("content")[0];
    var oShopCar=document.getElementsByClassName("shopCar")[0];
    var oSearchWords=document.getElementsByClassName("searchWords")[0];
    var oCarDiv=document.getElementsByClassName("shpCar")[0];
    var aShopList=document.getElementsByClassName("shopList")[0].children;
    var oShopCon=document.getElementsByClassName("shopCon")[0];
    var oLunBoShow=document.getElementsByClassName("lunBoShow2")[0];
    var oVideoDiv=document.getElementsByClassName("VideoDiv")[0];
    var oVideoUl=oVideoDiv.getElementsByTagName("ul")[0];
    var aVideoLi=oVideoDiv.getElementsByTagName("li");
    var oVideoBox=document.getElementsByClassName("videoShow")[0];
    var oVideoWarp=document.getElementsByClassName("videoShow")[0];
    var oIntelligent=document.getElementsByClassName("intelligent")[0];
    var oIntelligent2=document.getElementsByClassName("intelligent")[1];
    var oIntelligent3=document.getElementsByClassName("intelligent")[2];
    var oIntelligent4=document.getElementsByClassName("intelligent")[3];
    var intelligentRi=oIntelligent.getElementsByClassName("Ri")[0];
    var intelligentRi2=oIntelligent2.getElementsByClassName("Ri")[0];
    var intelligentRi3=oIntelligent3.getElementsByClassName("Ri")[0];
    var intelligentRi4=oIntelligent4.getElementsByClassName("Ri")[0];
    var oSelect1=oIntelligent2.getElementsByClassName("select")[0];
    var oSelect2=oIntelligent3.getElementsByClassName("select")[0];
    var oSelect3=oIntelligent4.getElementsByClassName("select")[0];
    var oLunbo1=document.getElementsByClassName("contentLunBo1")[0].getElementsByTagName("ul")[0];
    var oLunbo2=document.getElementsByClassName("contentLunBo1")[1].getElementsByTagName("ul")[0];
    var oLunbo3=document.getElementsByClassName("contentLunBo1")[2].getElementsByTagName("ul")[0];
    var oLunbo4=document.getElementsByClassName("contentLunBo1")[3].getElementsByTagName("ul")[0];
    var oSearch=document.getElementById("search");
    var oConUl=oContext.getElementsByTagName("ul")[0];
    var aLi=aShowShop.children;
    var str,Json=json.data,videoModel;

    init();

    /*获取商品、视频数据和初始化设置函数*/
    function init() {
        shoppingShow();   // 多种商品栏鼠标事件函数
        shopCar(oShopCar,oCarDiv);  //购物车鼠标事件函数 参数1：购物车按钮;参数2：购物车商品div
        getShops("zn",intelligentRi,"znShops");     //获取智能商品数据  参数1：数据名称;参数2：加载数据div;参数3：数据分类名称
        getShops("hot",intelligentRi2,"dpShops","热门");   //获取搭配商品数据  参数1：数据名称;参数2：加载数据div;参数3：数据分类名称;参数4：设置浏览更多名称
        getShops("hot",intelligentRi3,"pjShops","热门");   //获取配件商品数据  参数1：数据名称;参数2：加载数据div;参数3：数据分类名称;参数4：设置浏览更多名称
        getShops("hot",intelligentRi4,"zbShops","热门");   //获取周边商品数据  参数1：数据名称;参数2：加载数据div;参数3：数据分类名称;参数4：设置浏览更多名称
        kindShops(oSelect1,intelligentRi2,"dpShops");     //添加鼠标悬浮切换显示商品内容函数   参数1：鼠标悬浮目标;参数2：加载数据div;参数3：数据分类名称
        kindShops(oSelect2,intelligentRi3,"pjShops");     //添加鼠标悬浮切换显示商品内容函数   参数1：鼠标悬浮目标;参数2：加载数据div;参数3：数据分类名称
        kindShops(oSelect3,intelligentRi4,"zbShops");     //添加鼠标悬浮切换显示商品内容函数   参数1：鼠标悬浮目标;参数2：加载数据div;参数3：数据分类名称
        getShops("shop",oLunBoShow,"tjShops");     //获取推荐商品数据  参数1：数据名称;参数2：加载数据div;参数3：数据分类名称
        getLunBo("n1",oLunbo1);     //获取多栏滚动数据  参数1：数据名称;参数2:加载数据div
        getLunBo("n2",oLunbo2);     //获取多栏滚动数据  参数1：数据名称;参数2:加载数据div
        getLunBo("n3",oLunbo3);     //获取多栏滚动数据  参数1：数据名称;参数2:加载数据div
        getLunBo("n4",oLunbo4);     //获取多栏滚动数据  参数1：数据名称;参数2:加载数据div
        getVideo(oVideoUl,"all")     //获取视频数据  参数1:加载数据div;参数2：数据名称
        videoShow(aVideoLi);        //视频盒子显示和视频组件函数   参数：视频区所有li

        /*初始化视频半透明黑色遮罩高度*/
        oVideoWarp.style.height=window.innerHeight+"px";
        /*获取视频布局model*/
        videoModel=oVideoWarp.innerHTML;
       /* 创建新轮播对象*/
        var lunbo1=new lunBo("lunBo","0");
        lunbo1.init();

        var lunbo2=new lunBo("oneShow","0");
        lunbo2.point=function () {};
        lunbo2.pointClick=function () {};
        lunBoLeft(lunbo2,1,5);      //设置滚动栏滚动样式函数   参数1：轮播对象;参数2：滚动页数;从那时3：滚动商品个数

        var lunbo3=new lunBo("oneShow","1");
        lunbo3.point=function () {};
        lunbo3.pointClick=function () {};
        lunbo3.circulation=function () {};
        lunBoLeft(lunbo3,3,5);      //设置滚动栏滚动样式函数   参数1：轮播对象;参数2：滚动页数;从那时3：滚动商品个数

        var lunbo4=new lunBo("contentLunBo1","0");
        lunbo4.circulation=function () {};
        lunBoLeft(lunbo4,2,1);      //设置滚动栏滚动样式函数   参数1：轮播对象;参数2：滚动页数;从那时3：滚动商品个数

        var lunbo5=new lunBo("contentLunBo1","1");
        lunbo5.circulation=function () {};
        lunBoLeft(lunbo5,3,1);      //设置滚动栏滚动样式函数   参数1：轮播对象;参数2：滚动页数;从那时3：滚动商品个数

        var lunbo6=new lunBo("contentLunBo1","2");
        lunbo6.circulation=function () {};
        lunBoLeft(lunbo6,3,1);      //设置滚动栏滚动样式函数   参数1：轮播对象;参数2：滚动页数;从那时3：滚动商品个数

        var lunbo7=new lunBo("contentLunBo1","3");
        lunbo7.circulation=function () {};
        lunBoLeft(lunbo7,3,1);      //设置滚动栏滚动样式函数   参数1：轮播对象;参数2：滚动页数;从那时3：滚动商品个数
    }
    // 多种商品栏鼠标事件函数
    function shoppingShow() {
        for(var i=0,len=aLi.length-2;i<len;i++){
            aLi[i].onmouseenter=function () {
                str="";
                oContext.style.opacity="1";
                oContext.style.height="230px";
                getNavShops(this.dataset.name);
                oConUl.innerHTML=str;
            }
            aLi[i].onmouseleave=function () {
                oContext.style.opacity="0";
                oContext.style.height="0";
            }
        }
        oContext.onmouseenter=function () {
            this.style.opacity="1";
            this.style.height="230px";
        }
        oContext.onmouseleave=function () {
            oContext.style.opacity="0";
            oContext.style.height="0";
        }
        for(var i2=0,len2=aShopList.length;i2<len2;i2++){
            aShopList[i2].onmouseenter=function () {
                str="";
                oShopCon.style.display="block";
                getShopsShow(this.dataset.name);
                oShopCon.innerHTML=str;
            }
            aShopList[i2].onmouseleave=function () {
                oShopCon.style.display="none";
            }
        }
        oShopCon.onmouseenter=function () {
            oShopCon.style.display="block";
        }
        oShopCon.onmouseleave=function () {
            oShopCon.style.display="none";
        }
    }
    /*购物车鼠标事件效果函数 参数1：购物车按钮;参数2：购物车商品div*/
    function shopCar(obj,div) {
        obj.onmouseenter=function () {
            obj.style.backgroundColor="white";
            obj.style.color="#f56600";
            div.style.minHeight = "98px";
        }
        obj.onmouseleave=function () {
            obj.style.backgroundColor="#424242";
            obj.style.color="white";
            div.style.minHeight = "0px";
        }
        div.onmouseenter=function () {
            obj.style.backgroundColor="white";
            obj.style.color="#f56600";
            div.style.minHeight = "98px";
        }
        div.onmouseleave=function () {
            obj.style.backgroundColor="#424242";
            obj.style.color="white";
            div.style.minHeight = "0px";
        }
        // 搜索框焦点事件
        oSearch.onfocus=function () {
            oSearchWords.style.display="none";
        }
        oSearch.onblur=function () {
            if(oSearch.value!=""){
                oSearchWords.style.display="none";
            }else {
                oSearchWords.style.display="block";
            }
        }
    }
    /*获取导航栏商品显示数据    参数：数据名称*/
    function getNavShops(name) {
        for(var i in Json){
            for (var n in Json[i]){
                if(n=="navShops"){
                    for(var a in Json[i][n]){
                        for (var j in Json[i][n][a][name]){
                            str+="<li><div><a href='#'><img src="+Json[i][n][a][name][j].img+" alt=''></a></div> <div><a href='#'>";
                            str+=Json[i][n][a][name][j].shopName+"</a></div><p>";
                            if(name=="xmPhone"&&Json[i][n][a][name][j].activity!=""){
                                str+=Json[i][n][a][name][j].price+"</p>"+"<div class=\"activity\">"+Json[i][n][a][name][j].activity+"</div></li>"
                            }else {
                                str+=Json[i][n][a][name][j].price+"</p></li>"
                            }
                        }
                    }
                }
            }
        }
    }
    /*获取二级菜单商品数据    参数：数据名称*/
    function getShopsShow(name) {
        var num=0;
        for(var i in Json){
            for (var n in Json[i]){
                if(n=="shopsShow"){
                    for(var a in Json[i][n]){
                        for (var j in Json[i][n][a][name]){
                            num++;
                            if(num==1||num==7||num==13||num==19){
                                str+="<ul>"
                            }
                            str+="<li><a href='#'><img src="+Json[i][n][a][name][j].img+" alt=''><span>";
                            str+=Json[i][n][a][name][j].name+"</span></a>";
                            if(Json[i][n][a][name][j].select!=""){
                                str+="<a href='#'>"+Json[i][n][a][name][j].select+"</a></li>";
                            }else {
                                str+="</li>";
                            }
                            if(num==6||num==12||num==18||num==Json[i][n][a][name].length){
                                str+="</ul>"
                            }
                        }
                    }
                }
            }
        }
    }
    /*获取商品数据  参数1：数据名称;参数2：加载数据div;参数3：数据分类名称;参数4：设置浏览更多名称*/
    function getShops(obj,name,kind,select) {
        str="<ul>";
        for(var i in Json){
            for (var n in Json[i]){
                if(n==kind){
                    for(var a in Json[i][n]){
                        for (var j in Json[i][n][a][obj]){
                            str+="<li><p><a href='#'><img src="+Json[i][n][a][obj][j].img+" alt=''></a></p>";
                            str+="<p><a href='#'>"+Json[i][n][a][obj][j].name+"</a></p>";
                            if(obj=="zn"&&Json[i][n][a][obj][j].intro!=""){
                                str+="<p class='p3'>"+Json[i][n][a][obj][j].intro+"</p>";
                            }
                            if(Json[i][n][a][obj][j].price!=""){
                                str+="<p class='p4'>"+Json[i][n][a][obj][j].price;
                                if(Json[i][n][a][obj][j].oldPrice!=""){
                                    str+="<span>"+Json[i][n][a][obj][j].oldPrice+"</span>";
                                }else {
                                    str+="</p>";
                                }
                            }
                            if(Json[i][n][a][obj][j].comment!=""){
                                str+="<p class='p5'>"+Json[i][n][a][obj][j].comment+"</p>";
                            }
                            if(Json[i][n][a][obj][j].activity!=""){
                                var str2=Json[i][n][a][obj][j].activity.join("");
                                if(str2.indexOf("享")!=-1){
                                    str+="<div class='color2'>"+Json[i][n][a][obj][j].activity+"</div>";
                                }else if(str2.indexOf("新")!=-1){
                                    str+="<div class='color1'>"+Json[i][n][a][obj][j].activity+"</div>";
                                }

                            }
                            if(Json[i][n][a][obj][j].content!=""){
                                str+="<a href='#'><span>"+Json[i][n][a][obj][j].content+"</span><span>来自于 "+Json[i][n][a][obj][j].userName+" 的评论</span></a>"
                            }

                        }
                    }
                    if(n!="znShops"&&n!="tjShops"){
                        str+="<li><div class='more'><a href='#' class='clearFix'><span>浏览更多</span><span>"+select+"</span><img src=\"./icon/jiantou.png\"></a></div></li>";
                    }
                }
            }
        }
        str+="</ul>";
        name.innerHTML=str;
    }
    /*获取多栏滚动数据  参数1：数据名称;参数2：加载数据div*/
    function getLunBo(obj,name) {
        str="";
        for(var i in Json){
            for (var n in Json[i]){
                if(n=="lunBo"){
                    for(var a in Json[i][n]){
                        for (var j in Json[i][n][a][obj]){
                            str+="<li>";
                            if(Json[i][n][a][obj][j].name!=""){
                                str+="<h3><a href='#'>"+Json[i][n][a][obj][j].name+"</a></h3>";
                            }
                            if(Json[i][n][a][obj][j].intro!=""){
                                str+="<p><a href='#'>"+Json[i][n][a][obj][j].intro+"</a></p>";
                            }
                            if(Json[i][n][a][obj][j].btn!=undefined&&Json[i][n][a][obj][j].btn!=""){
                                str+="<p class='lBBtn"+obj.slice(1)+"'><a href='#'>"+Json[i][n][a][obj][j].btn+"</a></p>";
                            }
                            if(Json[i][n][a][obj][j].price!=""){
                                str+="<p><a href='#'>"+Json[i][n][a][obj][j].price+"</a></p>";
                            }
                            if(Json[i][n][a][obj][j].img!=""){
                                str+="<p><a href='#'><img src="+Json[i][n][a][obj][j].img+" alt=''></a></p></li>";
                            }
                        }
                    }
                }
            }
        }
        name.innerHTML=str;
    }
    /*添加鼠标悬浮切换显示商品内容函数   参数1：鼠标悬浮目标;参数2：加载数据div;参数3：数据分类名称*/
    function kindShops(oSelect,intelligentRi,kind) {
        for(var i5=0,len5=oSelect.children.length;i5<len5;i5++){
            oSelect.children[i5].onmouseenter=function () {
                for(var j=0;j<oSelect.children.length;j++){
                    delCls(oSelect.children[j],"active");
                }
                addCls(this,"active");
                getShops(this.dataset.name,intelligentRi,kind,this.innerText);
            }
        }
    }
    /*设置滚动栏滚动样式函数   参数1：轮播对象;参数2：滚动页数;从那时3：滚动商品个数*/
    function lunBoLeft(obj,num,index) {
        obj.Ul.style.width=(obj.Li[0].clientWidth+15)*obj.Li.length+"px";
        obj.pd=true;
        obj.lunbo=function () {
            if(this.num>=num){
                obj.pd=false;
            }else if(this.num<=0){
                obj.pd=true;
            }
            if(obj.pd){
                this.num++;
            }else {
                this.num--;
            }
            if(this.num<=0){
                addCls(this.lastBtn,"active");
                delCls(this.nextBtn,"active");
            }else if(this.num>=num){
                addCls(this.nextBtn,"active");
                delCls(this.lastBtn,"active");
            }else {
                delCls(this.lastBtn,"active");
                delCls(this.nextBtn,"active");
            }
            this.Ul.style.left=-(this.Li[0].clientWidth+15)*index*this.num+"px";
            if(index==1){
                for(var i=0;i<this.pointDiv.children.length;i++){
                    delCls(this.pointDiv.children[i],"active");
                }
                addCls(this.pointDiv.children[this.num],"active");
            }
        };
        obj.Btn=function () {
            var _this=this;
            this.lastBtn.onclick=function () {
                _this.num-=2;
                if(_this.num<=-1) _this.num=-1;
                _this.lunbo();
            }
            this.nextBtn.onclick=function () {
                if(_this.num>=num) _this.num=num-1;
                _this.lunbo();
            }
        }
        obj.init();
    }
    /*视频盒子显示和视频组件函数*/
    function videoShow(obj) {
        for(var i=0;i<obj.length;i++){
            obj[i].getElementsByTagName("p")[0].onclick=function (e) {
                var e = e||window.event;
                if(e.preventDefault){
                    e.preventDefault();
                }else{
                    e.returnValue=true;
                }
                delCls(oVideoBox,"hid");
                getVideo("videoShowWarp",this.dataset.name);
                setTimeout(function () {
                    addCls(oVideoBox.children[0],"toBottom");
                },100);
                var oVideoPlay=document.getElementsByClassName("videoPlay")[0];
                var oControl=document.getElementsByClassName("control")[0];
                var nowText=oControl.getElementsByClassName("nowTime")[0];
                var sumText=oControl.getElementsByClassName("sumTime")[0];
                var oAdjust=oControl.getElementsByClassName("adjust")[0];
                var oBarBgColor=document.getElementsByClassName("barBgColor")[0];
                var oBgColor=oControl.getElementsByClassName("bgColor")[0];
                var oControlSound=oControl.getElementsByClassName("controlSound")[0];
                var oControlStart=document.getElementsByClassName("controlStart")[0];
                var oVideoImg=document.getElementsByClassName("videoImg")[0];
                var oStartDiv=document.getElementsByClassName("startDiv")[0];
                var newMouseX=0,oldMouseX=0;
                oldMouseX=oAdjust.getBoundingClientRect().left+2;
                oVideoPlay.volume=0;
                oVideoPlay.addEventListener("loadedmetadata",videoLoad,false);
                oVideoPlay.addEventListener("timeupdate",changeTime,false);
                oAdjust.addEventListener("mousedown",downSound,false);
                oControl.addEventListener("mouseup",upSound,false);
                oBarBgColor.parentNode.addEventListener("click",progress,false);
                oVideoBox.addEventListener("click",boxClick,false);
                function videoLoad() {
                    var nowTime=oVideoPlay.currentTime;
                    var sumTime=oVideoPlay.duration;
                    nowText.innerHTML=getTime(nowTime);
                    sumText.innerHTML=getTime(sumTime);
                }
                function getTime(time) {
                   return checkTime(parseInt(time/60))+":"+checkTime(parseInt(time%60));
                }
                function checkTime(time) {
                    var newTime="";
                    if(time.toString().length<2){
                        newTime="0"+time;
                    }else {
                        newTime=time;
                    }
                    return newTime;
                }
                function changeTime() {
                    var nowTime=oVideoPlay.currentTime;
                    nowText.innerHTML=getTime(nowTime);
                    oBarBgColor.style.width=(oVideoPlay.currentTime/oVideoPlay.duration).toFixed(5)*oVideoPlay.clientWidth+"px";
                }
                function downSound() {
                    oAdjust.parentNode.parentNode.addEventListener("mousemove",changeSound,false);
                }
                function upSound() {
                    oAdjust.parentNode.parentNode.removeEventListener("mousemove",changeSound);
                }
                function changeSound(e){
                    var e=e||window.event;
                    newMouseX=e.clientX;
                    oAdjust.style.left=parseInt(newMouseX-oldMouseX)+"px";
                    if(oAdjust.offsetLeft<=0) {
                        oAdjust.style.left="0";
                    }else if(oAdjust.offsetLeft>=90) {
                        oAdjust.style.left="90px";
                    }
                    oBgColor.style.width=oAdjust.offsetLeft+"px";
                    if(oAdjust.offsetLeft<=5){
                        oControlSound.style.backgroundPosition="0 -78px";
                    }else if(oAdjust.offsetLeft<=60){
                        oControlSound.style.backgroundPosition="0 -58px";
                    }else {
                        oControlSound.style.backgroundPosition="0 -40px";
                    }
                    if(parseInt(oAdjust.offsetLeft).toString().length<2){
                        oVideoPlay.volume="0.0"+parseInt(oAdjust.offsetLeft);
                    }else {
                        oVideoPlay.volume="0."+parseInt(oAdjust.offsetLeft);
                    }
                }
                function progress(e) {
                    var e=e||window.event;
                    addCls(oStartDiv,"hid");
                    addCls(oVideoImg,"hid");
                    oControlStart.style.backgroundPosition="0 -21px";
                    oVideoPlay.play();
                    oVideoPlay.currentTime=(((e.clientX-oVideoPlay.getBoundingClientRect().left)/oVideoPlay.clientWidth)*oVideoPlay.duration).toFixed(5);
                }
            }
        }
        function boxClick(e) {
            var oVideoPlay=document.getElementsByClassName("videoPlay")[0];
            var oVideoImg=document.getElementsByClassName("videoImg")[0];
            var oStartDiv=document.getElementsByClassName("startDiv")[0];
            var oControlShow=document.getElementsByClassName("controlShow")[0];
            var videoBox=document.getElementsByClassName("videoBox")[0];
            var oControlStart=document.getElementsByClassName("controlStart")[0];
            var tTimes="";
            var e=e||window.event;
            var target=e.target||e.srcElement;
            if(target.tagName.toLowerCase()=="i"&&target.className=="closeBtn"){
                delCls(oVideoBox.children[0],"toBottom");
                oVideoPlay.pause();
                setTimeout(function () {
                    addCls(oVideoBox,"hid");
                    oVideoWarp.innerHTML=videoModel;
                    delCls(oVideoImg,"hid");
                },200)
            }
            if(target.className=="startBtn"||target.className=="controlStart"||target.tagName.toLowerCase()=="video"){
                if(oStartDiv.className.split(" ").indexOf("hid")!=-1){
                    delCls(oStartDiv,"hid");
                    oVideoPlay.pause();
                    oControlStart.style.backgroundPosition="0 0";
                }else {
                    addCls(oStartDiv,"hid");
                    addCls(oVideoImg,"hid");
                    oControlStart.style.backgroundPosition="0 -21px";
                    oVideoPlay.play();
                }
            }
            if(target.className=="controlChange"){
                if(videoBox.getBoundingClientRect().left!=0){
                    videoBox.style.position="fixed";
                    videoBox.style.width=document.body.clientWidth+"px";
                    videoBox.style.height=window.outerHeight+"px";
                    videoBox.style.left="0";
                    videoBox.style.top="0";
                    oControlShow.style.transform="translateY(30px)";
                    /*全屏显示*/
                    function launchFullScreen(element) {
                        if(element.requestFullscreen) {
                            element.requestFullscreen();
                        } else if(element.mozRequestFullScreen) {
                            element.mozRequestFullScreen();
                        } else if(element.webkitRequestFullscreen) {
                            element.webkitRequestFullscreen();
                        } else if(element.msRequestFullscreen) {
                            element.msRequestFullscreen();
                        }
                    }
                    launchFullScreen(oVideoBox);
                    target.style.backgroundPosition="0 -120px";
                }else {
                    videoBox.style.position="";
                    videoBox.style.width="880px";
                    videoBox.style.height="536px";
                    target.style.backgroundPosition="0 -100px";
                    oControlShow.style.transform="translateY(0px)";
                    /*退出全屏显示*/
                    function exitFullscreen() {
                        if(document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if(document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if(document.webkitExitFullscreen) {						
                            document.webkitExitFullscreen();
                        }else if(document.msExitFullscreen){
                            document.msExitFullscreen();
                        }
                    }

                // 退出全屏模式
                    exitFullscreen();
                }

            }
        }
    }
    /*获取视频数据  参数1:加载数据div;参数2：数据名称*/
    function getVideo(obj,name) {
        str="";
        for(var i in Json){
            for (var n in Json[i]){
                if(n=="video"){
                    for(var a in Json[i][n]){
                        if(name=="all"){
                            for(var m in Json[i][n][a]){
                                for (var j in Json[i][n][a][m]){
                                    str+="<li><p data-name="+m+"><a href='#'><img src="+Json[i][n][a][m][j].img+" title='点击播放视频'  alt=''></a><span>▷</span></p>";
                                    str+="<p><a href='#'>"+Json[i][n][a][m][j].name+"</a></p>";
                                    str+="<p>"+Json[i][n][a][m][j].intro+"</p></li>";
                                }
                            }
                            obj.innerHTML=str;
                        }else {
                            var oVideoShowWarp=document.getElementsByClassName(obj)[0];
                            for (var j in Json[i][n][a][name]){
                                str=oVideoShowWarp.innerHTML;
                                str=str.replace("[name]",Json[i][n][a][name][j].name);
                                str=str.replace("./img/ef68a52e6a4e3d131994eeadb6f6ade9.jpg",Json[i][n][a][name][j].videoSrc);
                                str=str.replace("./img/c1c4d2c2e37e49e2bc58ff66e7363043.jpg",Json[i][n][a][name][j].videoImg);
                            }
                            oVideoShowWarp.innerHTML=str;
                        }
                    }
                }

            }
        }
    }
}