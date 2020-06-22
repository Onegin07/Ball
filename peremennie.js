// stars - очки на игровом поле
var stars = null;
// lifes - жизни на игровом поле
var lifes = null;

var colichestvoLifes = 5;

// ochki - счет игры
var ochki = 0;
// статус - открытый
var status = "open";

// помещаем в переменную стартовый блок
var startBlock = null;
// помещаем переменную кнопку для старта
var startKnopka = null;

// выбираем блок таймера в html
// <span id="timer">10</span>
var timerBlock = null;

// игровое поле
var igraPole = document.querySelector("#igra");

// выбираем информационный блок
var infoBlock = document.querySelector("#info-block");
