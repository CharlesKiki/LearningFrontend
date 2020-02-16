/* 使用对象字面量创建对象 */
var soldier = {
    firstName: 'BC',
    lastName: 'Stink'
};
console.log(`打印字面量对象${soldier}`);



//创建对象
/*
 * 使用new关键字调用的函数，是构造函数constructor
 * 构造函数是专门用来创建对象的函数
 * 使用typeof检查一个对象时，会返回object
 */
var obj = new Object();


/*
 * 在对象中保存的值称为属性
 * 向对象添加属性
 * 语法：对象.属性名 = 属性值;
 */

//向obj中添加一个name属性
obj.name = "孙悟空";
//向obj中添加一个gender属性
obj.gender = "男";
//向obj中添加一个age属性
obj.age = 18;

/*
 * 读取对象中的属性
 * 语法：对象.属性名
 * 
 * 如果读取对象中没有的属性，不会报错而是会返回undefined
 */
console.log(`读取对象的属性${obj.gender}`);
console.log(`读取一个未定义的属性${obj.hello}`);

/*
 * 修改对象的属性值
 * 语法：对象.属性名 = 新值
 */
obj.name = "tom";

/*
 * 删除对象的属性
 * 语法：delete 对象.属性名
 */
delete obj.name;
console.log(`读取一个删除的属性${obj.name}`);


//创建一个对象
//var obj = new Object();

/*
 * 使用对象字面量来创建一个对象
 */
var obj = {};

//console.log(typeof obj);

obj.name = "孙悟空";

//console.log(obj.name);

/*
 * 使用对象字面量，可以在创建对象时，直接指定对象中的属性
 * 语法：{属性名:属性值,属性名:属性值....}
 * 	对象字面量的属性名可以加引号也可以不加，建议不加,
 * 	如果要使用一些特殊的名字，则必须加引号
 * 
 * 属性名和属性值是一组一组的名值对结构，
 * 	名和值之间使用:连接，多个名值对之间使用,隔开
 * 	如果一个属性之后没有其他的属性了，就不要写
 */
var obj2 = {

    name: "猪八戒",
    age: 13,
    gender: "男",
    test: {
        name: "沙僧"
    }

};

console.log(obj2.test);