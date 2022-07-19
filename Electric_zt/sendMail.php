<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpMailer/src/Exception.php';
    require 'phpMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->Charset = 'UTF-8';
    $mail->setLanguage('ru', 'phpMailer/language/');
    $mail->IsHTML(true);

    // От кого письмо
    $mail->setFrom('vova.electric.zt@gmail.com', 'Vova Electric');
    // Кому отправить
    $mail->addAddress('g.ivan.gulak17@gmail.com');
    // Тема письма
    $mail->Subject = 'Hi! It is first try';

    // Тело письма
    $body = '<h1>Встречайте супер заголовок!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<><strong>Имя:</strong> ' .$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['telephone']))){
        $body.='<><strong>Телефон:</strong> ' .$_POST['telephone'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<><strong>E-mail:</strong> ' .$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<><strong>Сообщение:</strong> ' .$_POST['message'].'</p>';
    }

    $mail->$Body = $body;

    // Отправляем
    if(!$mail->send()){
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>