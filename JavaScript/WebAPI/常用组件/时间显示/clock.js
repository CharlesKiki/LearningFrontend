// JavaScript Document
function showDateTime(){
var sWeek = new Array("日","一","二 ","三","四","五","六"); //声明数组存储一周七天
var myDate = new Date();    // 当天的日期
var sYear = myDate.getFullYear();    // 年
var sMonth = myDate.getMonth()+1;    // 月
var sDate = myDate.getDate();         // 日
var sDay = sWeek[myDate.getDay()];   // 根据得到的数字星期，利用数组转换成汉字星期
var h=myDate.getHours();   //小时
var m=myDate.getMinutes();  //分钟
var s=myDate.getSeconds();  //秒钟

//输入日期和星期
document.getElementById("date").innerHTML=(sYear + "年" + sMonth + "月" + sDate + "日" + " 星期" + sDay + "<br>");
h=formatTwoDigits(h)  //格式化小时，如果不足两位前补0
m=formatTwoDigits(m)  //格式化分钟，如果不足两位前补0
s=formatTwoDigits(s)  //格式化秒钟，如果不足两位前补0
//显示时间
document.getElementById("msg").innerHTML=(imageDigits(h) + "<img src='images/dot.png'>" + 
               imageDigits(m) + "<img src='images/dot.png'>"  + 
               imageDigits(s) +  "<br>");
setTimeout("showDateTime()",1000);  //每秒执行一次showDateTime函数
}
window.onload=showDateTime;  //页面的加载事件执行时，调用函数

//如果输入数是1位数，在十位数上补0
function formatTwoDigits(s) {
  if (s<10) return "0"+s;
  else return s;
}

//  将数转换为图像，注意，在本文件的相同目录下已有0－9的图像文件，文件名为0.png,1.png …… 以此类推
function imageDigits(s) {
  var ret = "";
  var s = new String(s);
  for (var i=0; i<s.length; i++) {
    ret += '<img src="images/' + s.charAt(i) + '.png">';
  }
  return ret;
}
