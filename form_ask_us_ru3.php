<?php
$fTitle = 'Форма: Заказать звонок';
$fName =  'Имя: '.$_POST['name3'];
$fPhone =  'Телефон: '.$_POST['phone3'];

$AllInOne =  $fTitle."\n"."\n".$fName."\n".$fPhone;
$to = 'Termofly1@gmail.com';
$headers="From: <site@test.ru>\n 
    \nContent-Type: text/html; charset=\"utf-8\"\n";
// функция, которая отправляет наше письмо
mail($to, 'заявка термофлай', $AllInOne, $headers);
?>