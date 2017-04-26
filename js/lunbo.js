/**
 * Created by qucy on 2017/1/11.
 */
function lunBo(div,num) {
    this.oDiv=document.getElementsByClassName(div)[num];
    this.pointDiv=this.oDiv.getElementsByTagName("div")[0];
    this.Ul=this.oDiv.getElementsByTagName('ul')[0];
    this.Li=this.Ul.children;
    this.lastBtn=this.oDiv.getElementsByTagName("span")[0];
    this.nextBtn=this.oDiv.getElementsByTagName("span")[1];
    this.num=-1;
    this.time;
    this.span="<span></span>";
}
lunBo.prototype={
    init:function () {
        this.point();
        this.lunbo();
        this.circulation();
        this.pointClick();
        this.Btn();
        this.stop();
    },
    point:function () {
        for(var i=0;i<this.Li.length;i++){
            this.pointDiv.innerHTML+=this.span;
        }
        this.pointDiv.children[0].className="active";
    },
    lunbo:function () {
        var _this=this;
        this.num++;
        if(this.num>this.Li.length-1) this.num=0;
        for(var i=0;i<this.Li.length;i++){
            delCls(this.Li[i],"active");
            delCls(this.pointDiv.children[i],"active");
        }
        addCls(this.Li[this.num],"active");
        addCls(this.pointDiv.children[this.num],"active");
    },
    circulation:function () {
        var _this=this;
        this.time=setInterval(function () {
            _this.lunbo();
        },4000)
    },
    pointClick:function () {
        var _this=this;
        for(var i=0;i<this.Li.length;i++){
            this.pointDiv.children[i].index=i;
            this.pointDiv.children[i].onclick=function () {
                _this.num=this.index-1;
                _this.lunbo();
            }
        }
    },
    Btn:function () {
        var _this=this;
        this.lastBtn.onclick=function () {
            _this.num-=2;
            if(_this.num<-1) _this.num=_this.Li.length-2;
            _this.lunbo();
        }
        this.nextBtn.onclick=function () {
            if(_this.num>_this.Li.length-1) _this.num=-1;
            _this.lunbo();
        }
    },
    stop:function () {
        var _this=this;
        this.oDiv.onmouseenter=function () {
            clearInterval(_this.time);
        }
        this.oDiv.onmouseleave=function () {
            _this.circulation();
        }
    }
}