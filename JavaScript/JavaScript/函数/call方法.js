function ary() {
    //注意，arguments本身是一个对象，接受一个方法的所有参数
    console.log(arguments, typeof arguments, arguments instanceof Object)

    //之所以用Array.slice是因为
    return [11, 12].slice.call(arguments);

    //这里的[11,12]可以被替换为任意的数组，不影响结果
}

//传递参数，注意这里没有任何的提前声明参数，这也是JS灵活的一个方面
var a11 = ary(1, 2, 3, 4, 5, 6, 888, 9, 222);

//控制台打印
console.log(a11);
//[1, 2, 3, 4, 5, 6, 888, 9, 222]
console.log(typeof a11);
//这个是一个对象 但是对象可以自己拿到自己的参数，并且化成Array ，结果"object"
console.log(a11 instanceof Array);
//a11是对象 但是a11返回的是Array，结果ture