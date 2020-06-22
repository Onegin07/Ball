// получить случайное число
function random(max) {
	 // случайное число от 1 до максимума
     var sluchaynoeChislo = 1 + Math.random()*(max + 1);
     // округяем до целого числа
     sluchaynoeChislo = Math.floor(sluchaynoeChislo);
     // вернуть результат
     return sluchaynoeChislo;
}

/*=================
Функции для создания элементов игры
======================*/
//<div id="start-block"><button id="start-knopka">Начать</button></div>
// Создание блока старта игры
function sozdanieStartBlock() {
   // создаем блок див <div id="start-block">
   startBlock = document.createElement("div");
   startBlock.id = "start-block";
  // создаем кнопку <button id="start-knopka">Начать</button>
   startKnopka = document.createElement("button");
   startKnopka.id = "start-knopka";
   startKnopka.innerText = "Начать";
  // добавляем кнопку в стартовый блок
  startBlock.appendChild(startKnopka);

  // добавляем стартовый блок в игровое поле
  igraPole.appendChild(startBlock);
}

//<div id="stars">0</div>
// Создание блока очков
function sozdanieOchkiBlock() {
    // создаем блок очков <div id="stars">0</div>
    stars = document.createElement("div");
    stars.id = "stars";
    stars.innerText = 0;
    // добавляем блок очков в игрвое поле
    igraPole.appendChild(stars)    
}

//<div id="lifes"><span></span><span></span><span></span></div>
//Создание блока жизней
function sozdanieLifesBlock() {
    // Создаем блок див <div id="lifes"></div>
    lifes = document.createElement("div");
    lifes.id = "lifes";

     // переменная в которой храним текущее колличество отображенных жизней    
    var tekucheeColichestvoLifes = 0;
    // пока текущее колличество жизней на игровом поле меньше чем мы хотим видеть
    while(tekucheeColichestvoLifes < colichestvoLifes) { 
        // создаем тег span
        var span = document.createElement("span");
        // помещаем тег span в блок жизней 
        lifes.appendChild(span);
        // увеличиваем колличество текущих отображенных жизней на 1
        tekucheeColichestvoLifes = tekucheeColichestvoLifes + 1;
  } 
    // добавляем блок жизней на игрвом поле
    igraPole.appendChild(lifes);   
}

//<h2>Время: <span id="timer">30</span></h2>
// функция для создания блока таймера
 function sozdanieTimerBlock() {
 // Создаем заголовок h2 с текстом "Время: "
 var h2 = document.createElement("h2");
   h2.innerText = "Время: ";
     // В коробочку timerBlock добавляем тег span
   timerBlock = document.createElement("span");
   // прописываем span id="timer" и текст 30
   timerBlock.id = "timer";
   timerBlock.innerText = "30";
   // добавляем в заголовок h2 тег span
     h2.appendChild(timerBlock);
     // добавляем в информационный блок заголовок с таймером 
   infoBlock.appendChild(h2);
   }

   // <div id="ball"></div>
  // создаем шарик и добавляем его в игровое поле
  function sozdanieBall() {
  // создаем блок div 
  var ball = document.createElement("div");
  // определяем направление откуда вылетает шарик
  var napravlenie = random(2); // 1 - left, 2 - right
  // если направление 1 то вылетает слева
  if (napravlenie == 1) {
      ball.className = "ball left";  
  } else { // иначе вылетает справа 
      ball.className = "ball right";
  }

  // при клике на шарик выполняем функцию
  ball.onmousemove = function() {
  // если не равен 
  if (ball.className != "ball ojidayet-udaleniya") {
    // увеличиваем счет игры
  ochki = ochki + 1; 
  // меняем текст счета игры, текст будет из переменной ochki
    stars.innerText = ochki;
    // устанавливаем не прозрачность элемента
    ball.style.opacity = "0";
    // функция удаление шарика с помощью таймера
    setTimeout(function() {
    // удаление шарика
    ball.remove();
    // возвращаем элемент документа
    var sushestvuetBall = document.querySelector(".ball"); // element | null
    // если равен нулю
    if(sushestvuetBall == null) {
      // сколько шариков я хочу сделать
      var colichestvoBall = random(5);
      // текущее колличество шариков
      var tekucheeColichestvoBall = 0;
      // запускаем цикл
      while(tekucheeColichestvoBall < colichestvoBall) {
      // создаем шарик
      sozdanieBall();
      // увеличиваем текущее колличество мячей
      tekucheeColichestvoBall = tekucheeColichestvoBall + 1;
      } 
    } 
    
    }, 200); // конец таймера
  }
  ball.className = "ball ojidayet-udaleniya"; 

}; // конец события onclick
// Через 200 милисек. после создания шарика переместить его в новую позицию
setTimeout(function() {
     ball.style.top = random(450) + "px";
     ball.style.left = random(950) + "px";
}, 10)

// запустить передвижение шарика вниз и удалять его если вышел за границу + отнимать жизнь
setTimeout(function() { 
   // Убираем свойства с задержкой изменения стилей
   ball.style.transition = "all 0s";
   // создаем таймер, который каждые 10 милисек. оускает шарик ниже
   var timerBall = setInterval(function() {
       // меняем позицию шарика опуская его на 1 пиксель вниз
       ball.style.top = ball.offsetTop + 1 + "px";
       // если шарик вышел за пределы поля
       if(ball.offsetTop > 500 ) {
            // удаляем шарик
            ball.remove();
            // создаем новый шарик
            sozdanieBall();
            // уменьшаем колличество жизней
            colichestvoLifes = colichestvoLifes - 1;
            // если жизней не осталось
            if(colichestvoLifes == 0) {
                // завершить игру
                koniecIgra();
            }
            // удаляем блок жизней 
            udalenieLifesBlock();
            // создаем новый блок жизней
            sozdanieLifesBlock();
            // удаляем таймер
            clearInterval(timerBall);
       }
     }, 10)
},1000);

// если статус не завершен
if(status != "koniec") {
    // добавляем элемент шарик в игровое поле <div id="igra">
    igraPole.appendChild(ball);
   }
}

 //<div id="koniec-igra"><h2>Игра окончена!</h2><h3>Вы набрали: 100 очков</h3></div>
 //Функция при завершении игры
 function sozdanieKoniecIgra() {
      // Создаем блок <div id="koniec-igra"></div>
      var div = document.createElement("div");
          div.id = "koniec-igra";
      // создаем блок <h2>Игра окончена!</h2> 
      var h2 = document.createElement("h2");
          h2.innerText = "Игра окончена!";
      // создаем блок <h3>Вы набрали: +...+ очков</h3>
      var h3 = document.createElement("h3");
          h3.innerText = "Вы набрали: "+ ochki + " очков";
      // добавляем заголовок h2
      div.appendChild(h2);
      // добавляем заголовок h3
      div.appendChild(h3);
      // добавляем в игровое поле блок завершения игры
      igraPole.appendChild(div);
 }

/*=========================
Удаление элементов
=========================*/
// Удалять стартовый блок
function udalenieStartBlock() {
    // удалить выбраный блок
    startBlock.remove(); 
} 
// удаляем блок жизней
function udalenieLifesBlock() {
    lifes.remove();
}
// удаляем блок таймера
function udalenieTimerBlock() {
    timerBlock.remove();
}
// удаляем блок очков
function udalenieStarsBlock() {
    stars.remove();
}
// удаляем начало игры
function udalenieStart() {
    start.remove();
}
// удаляем окончание игры
function udalenieKoniecIgra() {
    koniecIgra.remove();
}
// очищаем игровое поле
function ochistitIgrapole() {
    igraPole.innerText = "";
}