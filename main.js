// Главный файл в котором я буду вызывать необходимые функции и действия игры

// Функция при загрузке страницы
function start() {
    // Создаем стартовый блок
    sozdanieStartBlock();
    // Создаем блок таймера
    sozdanieTimerBlock();
    // при клике на кнопку "начать" запускаем игру
     startKnopka.onclick = nachat;
     }
    
    // при начале игры выполняем эту функцию
    function nachat() {
       status = "nachat";
       // удалить стартовый блок
       udalenieStartBlock();
       // создаем блок очков
       sozdanieOchkiBlock();
       // создаем блок жизней
       sozdanieLifesBlock();
       // Создаем шарик
       sozdanieBall();
       //запускаем таймер обратного отсчета
       timerIgra();
    }

// Запускаем функцию старта игры     
start();  


// Функция которую мы вызываем при окончании игры
function koniecIgra() {
    status = "koniec";
    udalenieLifesBlock(); // удаляем блок жизней
    udalenieStarsBlock();// удаляем блок очков
    ochistitIgrapole(); // очищаем игровое поле
    sozdanieKoniecIgra(); // конец игры
    }
    

//Функция для обратного отсчета времени игры
function timerIgra() {
 // переменная chasy - в ней храним таймер, чтобы потом можно было его остановить
var chasy = setInterval(function() {
    // меняем текст в таймер блоке, уменьшая значения таймера на 1
    timerBlock.innerText = timerBlock.innerText - 1;
    // если таймер дошел до нуля
    if(timerBlock.innerText == 0) {
    // удаляем таймер
    clearInterval(chasy);
    // завершаем игру
    koniecIgra();
    }    
  }, 1000); //каждую секунду выполнять то что написано в функции 
}
