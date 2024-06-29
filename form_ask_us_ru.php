<?php
$fTitle = 'Форма: Нужна помощь в обслуживании или ремонте кондиционера?';
$fName =  'Имя: '.$_POST['name'];
$fPhone =  'Телефон: '.$_POST['phone'];

$AllInOne =  $fTitle."\n".$fName."\n".$fPhone;
$to = 'Termofly1@gmail.com';
$headers="From: <site@test.ru>\n 
    \nContent-Type: text/html; charset=\"utf-8\"\n";
// функция, которая отправляет наше письмо
mail($to, 'заявка термофлай', $AllInOne, $headers);
?>