var maxhealth = 20;
var health = maxhealth
var percent = 1;
var attack = 1
var level = 1
let hpvalue = document.getElementById("hp")

function Main() {

health -= attack;
health = Math.floor(health*10)/10
document.getElementById("enemyhp").innerHTML = health;

hpbar = health/maxhealth
hpvalue.value = hpbar

if (health<=0) {

maxhealth = Math.floor(maxhealth + (10 + (level*2) ) )
attack+= 0.5 + (level/10)
level += 1
document.getElementById("enemylv").innerHTML = level;
health = maxhealth
hpbar = health/maxhealth
hpvalue.value = hpbar

attack = Math.floor((Math.ceil(attack*100)/100)*10)/10
document.getElementById("attack").innerHTML = attack;
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
attack= Math.floor(attack/2)
if (attack<=0) {
attack=1
}
hpbar = health/maxhealth
hpvalue.value = hpbar
document.getElementById("attack").innerHTML = attack;
document.getElementById("enemyhp").innerHTML = health;
document.getElementById("enemylv").innerHTML = level;

}

