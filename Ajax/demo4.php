<?php
// $name=$_GET['name'];
if (isset($_GET['name'])) {
    echo 'GET 你的名字：' . $_GET['name'];
} elseif (isset($_POST['name'])) {
    echo 'POST 你的名字：' . $_POST['name'];
} else {
    echo 'ajax';
}