<?php
/* if (isset($_GET["name"]) && isset($_GET["email"])) {
    $name=$_GET["name"];
    $email=$_GET["email"];
}
if(isset($_POST["name"]) && isset($_POST["email"])){
	$name=$_POST["name"];
	$email=$_POST["email"];
} */
//建立链接
$con = mysql_connect("localhost", "root", "");
//选择数据库
$select_db = mysql_select_db('ajax');
//判断是否链接成功
if (!$select_db) {
    die("could not connect to the db:\n" .  mysql_error());
}

//查询代码

// $sql = "insert into ajax(name,email) values('$name','$email') ";

// $res = mysql_query($sql);

// if (!$res) {
//     die("could get the res:\n" . mysql_error());
// }
$sel_sql="select * from ajax";
$query=mysql_query($sel_sql);
while ($arr=mysql_fetch_assoc($query)) {
    $result_arr[]=$arr;
}
$php_json = json_encode($result_arr); //把php数组格式度转换成 json 格式的专数据
echo $php_json;
//关闭数据库连接
mysql_close($con);