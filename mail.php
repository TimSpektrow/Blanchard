<?php
// Объявляем переменные
$name = $_POST['name'] ?? null;
$tel = $_POST['tel'] ?? null;

// запрещаем отправку пустого поля
if (empty($name)) {
    throw new Exception('Name is required');
}
if (empty($tel)) {
    throw new Exception('Tel is required');
}

// Декодируем URL
$name = urldecode($name);
$tel = urldecode($tel);

// Урезаем количество символов в строке
$name = substr($name, 0, 30);
$tel = substr($tel, 0, 30);

// Преобразуем все символы в форме
$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

// Отправляем письмо на почту
mail("term1t88@mail.ru", "Заявка от Blanchard", "Имя: " . $name . " Телефон: " . $tel, "From: BadalbaevTK@rusgeology.ru \r\n");
?>
