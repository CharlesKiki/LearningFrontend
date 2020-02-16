var obj = new Object();


/*
 * 如果要使用特殊的属性名，不能采用.的方式来操作
 * 需要使用另一种方式：
 * 语法：对象["属性名"] = 属性值
 * 读取时也需要采用这种方式
 * 使用[]这种形式去操作属性，更加的灵活，
 * 在[]中可以直接传递一个变量，这样变量值是多少就会读取那个属性
 */
obj["123"] = 789;
obj["nihao"] = "你好";
console.log(obj["123"]); //789
var age = 123;
console.log(obj[age]);

/*
 * 属性值
 * 	JS对象的属性值，可以是任意的数据类型
 * 	关键字也是一个对象
 */

obj.test = true;
obj.test = null;
obj.test = undefined;

//创建一个对象
var obj2 = new Object();
obj2.name = "ObjectTwo";

//将obj2设置为obj的属性
obj.test = obj2;

//console.log(obj.test.name);

/*
 * in 运算符
 * 	- 通过该运算符可以检查一个对象中是否含有指定的属性
 * 		如果有则返回true，没有则返回false
 *  - 语法：
 * 		"属性名" in 对象
 */
//console.log(obj.test2);

//检查obj中是否含有test2属性
//console.log("test2" in obj);
//console.log("test" in obj);
console.log("name" in obj);