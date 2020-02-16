// 基本数据类型之间的引用是值引用
var a = 123;
var b = a;
a++;

console.log("a = "+a);
console.log("b = "+b);
console.log("a自增之后的b = " + b + " a = "+a);


var obj = new Object();
obj.name = "孙悟空";
var obj2 = obj;

//修改obj的name属性
obj.name = "猪八戒";

console.log(obj.name);
console.log(obj2.name);

//设置obj2为null
obj2 = null;

console.log(obj);
console.log(obj2);

var c = 10;
var d = 10;
console.log(c == d);

var obj3 = new Object();
var obj4 = new Object();
obj3.name = "沙和尚";
obj4.name = "沙和尚";

console.log(obj3);
console.log(obj4);

/*
 * 当比较两个基本数据类型的值时，就是比较值。
 * 而比较两个引用数据类型时，它是比较的对象的内存地址，
 * 如果两个对象是一摸一样的，但是地址不同，它也会返回false
 */
console.log(obj3 == obj4);