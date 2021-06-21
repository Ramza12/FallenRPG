var maxhealth = 20;
var health = maxhealth
var attack = 1;
var shadow = 0;
var level = 1;
let hpvalue = document.getElementById("hp");

function Main() {

health -= attack;
health = Math.floor(health*10)/10
document.getElementById("enemyhp").innerHTML = health;

hpbar = health/maxhealth
hpvalue.value = hpbar

if (health<=0) {

maxhealth = Math.floor(maxhealth + (15 + (level*3) ) )
attack+= 0.4 + (level/10)
level++
document.getElementById("enemylv").innerHTML = level;
health = maxhealth;
hpbar = health/maxhealth;
hpvalue.value = hpbar;
shadow+= 0.1
shadow = Math.floor((Math.ceil(shadow*100)/100)*10)/10

attack = Math.floor((Math.ceil(attack*100)/100)*10)/10;
document.getElementById("attack").innerHTML = attack;
document.getElementById("shadow").innerHTML = shadow;
document.getElementById("enemyhp").innerHTML = health;

}

}

function SetUp() {

document.getElementById("hp").value = 1
document.getElementById("attack").innerHTML = attack

}

function Train() {
attack += 0.1
attack = Math.floor((Math.ceil(attack*100)/100)*10)/10
document.getElementById("attack").innerHTML = attack;

}

function Rebirth() {

level=1
maxhealth=20
health=maxhealth
attack= Math.floor(Math.floor(attack*2)/4)
if (attack<=0) {
attack=1
}
hpbar = health/maxhealth
hpvalue.value = hpbar
document.getElementById("attack").innerHTML = attack;
document.getElementById("enemyhp").innerHTML = health;
document.getElementById("enemylv").innerHTML = level;

}

setInterval(function() {
health-= Math.floor(shadow*1000)/1000;
health= Math.floor(health*10)/10;
document.getElementById("enemyhp").innerHTML = health;
hpbar = health/maxhealth;
hpvalue.value = hpbar;

if (health <=0) {
Main()
}

}, 100); // 100ms = 0.1 second

setInterval(function() {
Save()

}, 1000); // 1000ms = 1 second

function Save() {
var SaveFile = {
maxhealth: maxhealth,
health: health,
attack: attack,
shadow: shadow,
level: level
}

localStorage.setItem("SaveFile",JSON.stringify(SaveFile))

}

function Load() {
var LoadFile = JSON.parse(localStorage.getItem("SaveFile"));

if (typeof LoadFile.maxhealth !=="undefined") maxhealth = LoadFile.maxhealth
if (typeof LoadFile.health !=="undefined") health = LoadFile.health
if (typeof LoadFile.attack !=="undefined") attack = LoadFile.attack
if (typeof LoadFile.shadow !=="undefined") shadow = LoadFile.shadow
if (typeof LoadFile.level !=="undefined") level = LoadFile.level

document.getElementById("attack").innerHTML = attack;
document.getElementById("shadow").innerHTML = shadow;
document.getElementById("enemyhp").innerHTML = health;
document.getElementById("enemylv").innerHTML = level;

hpbar = health/maxhealth
hpvalue.value = hpbar

}

function Initialize() {
SetUp()
Load()
}



