<?php
/*  抽象类 接口 多态
 *
 *  抽象类是一种特殊的类， 接口是一种特殊的抽象类， 而多态就要使用到抽象类或是接口
 *
 *  声明抽象类和接口，以及一些需要的技术
 *
 *  抽象类
 *
 *      什么是抽象方法？
 *
 *      	定义：如果一个类中的方法，没有方法体的方法就是抽象方法(就是一个方法没有使用{}而直接使用分号结束)
 *      		
 *      		abstract function test();  //抽象方法
 *			
 *			function test(){  //有方法体，但方法体为空的
 *				
 *			}
 *
 *			如果一个方法是抽象方法，就必须使用abstract修饰
 *
 *		
 *
 *		为什么要使用抽象方法？
 *      	
 *
 *  	什么是抽象类？
 *  		
 *  		1. 如果一个类中，有一个方法是抽象的则这个类就是抽象类
 *  		2. 如果一个类是抽象类，则这个类必须要使用abstract修饰
 *  		3. 抽象类是一种特殊的类，就是因为一个类中有抽象方法，其他不变。也可以在抽象类中声明成员属性，常量，非抽象的方法。
 *  		4. 抽象类不能实例化对象（不能通过抽象类去创建一个抽象类的对象）
 *
 *
 *  		一、抽象方法没有方法体，不知道做什么的（没写功能）
 *  		二、对象中的方法和属性都要通过对象来访问，除常量和静态的变量和方法， 而抽象类又不能创建对象，抽象类中的成员都不能直接访问
 *
 *		
 *
 *
 *  接口
 *
 *
 *  作用：
 *  	要想使用抽象类，就必须使用一个类去继承抽象类，而且要想使用这个子类，也就是让子类可以创建对象，子类就必须不能再是抽象类， 子类可以重写父类的方法（给抽象方法加上方法体）
 *
 *		抽象方法中的方法没有方法体， 子类必须实现这个方法 （父类中没写具体的实现， 但子类必须有这个方法名）
 *
 *
 *	就是在定义一些规范，让子类按这些规范去实现自己的功能
 *
 *	目的： 就是要将你自己写的程序模块 加入 到原来已经写好的程序中去 （别人写好的程序，不能等你开发完一个小模块，根据你的小模块继续向后开如）
 *
 *  多态
 *
 *
 *
 *
 *
 */

	abstract class FileDir {
		var $filename;
		var $time;

		function getName(){
			echo "获取文件和目录的名子<br>";
		}

		function getTime(){
			echo "获取文件和目录的创建时间<br>";
		}

		abstract function getSize();
		abstract function copy();
		abstract function remove();
		abstract function delete();

	}


	class FileClass extends FileDir {
		function getSize(){
			echo "获取文件的大小<br>";
		}

		function copy(){
			echo "复制文件<br>";
		}

		function remove(){
			echo "移动文件<br>";
		}

		function delete(){
			echo "删除文件<br>";
		}	
	}



	class DirClass extends FileDir {
		function getSize(){
			echo "获取目录的大小<br>";
		}

		function copy(){
			echo "复制目录<br>";
		}

		function remove(){
			echo "移动目录<br>";
		}

		function delete(){
			echo "删除目录<br>";
		}	
	}
	

	$fd= new DirClass;
		

	$fd->getName();
	$fd->getSize();
	$fd->copy();
	$fd->remove();
	$fd->delete();
	$fd->getTime();
	
