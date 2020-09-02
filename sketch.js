var database;

var gameState;

var Game, Form, Play;
var car1, car2, car3, car4;
var BuggatiChiron, Pagani, Porsche911, MercedesBenz
    NissanGTR, NissanSuper, AudiR8, AstonMartin,
    Mustang, LaFerrai, LamborghiniAventador, MitsubishiSports,
    KoenigsEggra;


function preload(){
 car1 = loadImage("images/car1.png");
 car2 = loadImage("images/car2.png");
 car3 = loadImage("images/car3.png");
 car4 = loadImage("images/car4.png");
 car9 = loadImage("images/car9.jpg");
 KoenigsEggra = loadImage("images/Koenigs Eggra.jpg");
 BuggatiChiron = loadImage("images/Buggati Chiron.jpg");
 LaFerrai = loadImage("images/La Ferrai.jpg");
 LamborghiniAventador = loadImage("images/Lamborghini Aventador.jpg");
 MercedesBenz = loadImage("images/Mercedes Benz.jpg");
 MitsubishiSports = loadImage("images/Mitsubishi-Sports.jpg");
 Mustang = loadImage("images/Mustang.jpg");
 NissanGTR = loadImage("images/Nissan GTR.jpg");
 NissanSuper = loadImage("images/Nissan-Super.jpg");
 Pagani = loadImage("images/Pagani.jpg");
 Porsche911 = loadImage("images/Porsche 911.jpg");
 AstonMartin = loadImage("images/Aston Martin.jpg");
 AudiR8 = loadImage("images/AudiR8.jpg");


}

function setup (){
 createCanvas(400,600);
 database = firebase.database();

}

function draw() {
  
}