/*-------------------------------工具方法---------------------------*/
/**
 dom: 元素Class或者obj；只有dom 返回class;
 tag:标签
 index:下标
*/
function getTag(dom,name,index){
	if(arguments.length==2&&!parseInt(name)){
		return dom.getElementsByTagName(name);
	}else if(arguments.length==2&&parseInt(name)){
		return document.getElementsByClassName(dom)[name];
	}else if(arguments.length==3&&index==-1){
		return dom.getElementsByClassName(name)[0];
	}else if(arguments.length==3){
		return dom.getElementsByClassName(name)[index];
	}else if(arguments.length==1){
		return document.getElementsByClassName(dom)[0];
	}else {
		return;
	}
}
/**删除class
   obj: DOM对象；
   cls: class名称
*/
function delCls(obj, cls){
	if(obj.className == '')  return;
	var arr = obj.className.split(' ');
	for(var i=0; i<arr.length; i++){
		if(arr[i] == cls){
			arr.splice(i,1);
		}
	}
	obj.className = arr.join(' ');
}
/**增加class
   obj: DOM对象；
   cls: class名称
*/
function addCls(obj, cls){
	var arr = obj.className.split(' ');
	for(var i=0;i<arr.length; i++){
		if(arr[i] == cls) return;
	}
	obj.className += ' '+cls;
}