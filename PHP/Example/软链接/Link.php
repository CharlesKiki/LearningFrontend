<?php
//当在服务器中访问www目录之外的文件时，可使用创建软链接的方式
//在页面中直接使用$manualLink就行
function newSymlink($path){

$manual = $path;  // 原路径

$manualLink = './uploadSymlink/'.date('Y-m-d H:i:s');   // 软连接路径

$isExistFile = true;    // 原文件是否存在的标识

if(is_file($manual) && !is_file($manualLink)){  // 原文件存在且软连接不存在时，创建软连接

  symlink($manual, $manualLink);              // 创建软连接

}

if(!is_file($manualLink))  {

   $isExistFile = false;

 }elseif(!is_file($manual)){ // 原文件不存在时

   $isExistFile = false;

}

 return array('isExistFile'=>$isExistFile,'manual'=>$manualLink);

}