// ==UserScript==
// @name         Aternos Serverpage Toolkit
// @namespace    https://aternos.org/server
// @version      1.0
// @description  Aternos Felszerelés Balazsmanustól
// @author       BalazsManus
// @match        https://aternos.org/server/*
// @grant        none
// @icon         https://www.spigotmc.org/favicon.ico
// ==/UserScript==
// Elhozta neked BalazsManus :D

//fisfos szarok eltávolítása
$('.sidebar').css('display', 'none');
$('.ad-label-wrapper').css('display', 'none');
$('#placement-top-leaderboard').css('display', 'none');
$('.responsive-leaderboard').css('display', 'none');
$('.server-b-tutorials').css('display', 'none');

// Autostart kód V

szerverInditas();
function szerverInditas() {
    console.clear()
szerverFut = false;
if (botBE) {
setTimeout(
    function () {
        antiBanMethod();
        setTimeout(
            function () {
                if (szerverFut) {
                    console.clear()
                    console.log("A szerver sikeresen elindult!");
                    document.querySelector('div[id="confirm"]').click();
                    document.querySelector('div[id="start"]').click();
                    console.clear()
                    szerverInditas();
                }else{
                    console.clear()
                     console.log("Várakozás az indítási állapotra...");
                    console.clear()
                    szerverInditas();
                }
            }, 200
        );
    }, 900
);
} else {
    setTimeout(
        function () {
            szerverInditas();
        }, 100
    );
}
}

//oneclick és vars

var repeatingSpamFunction = null;
var mobilVerzio = null;
var botBE = false;
var szerverFut = false;


function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

createkapcsoloGomb();

function myfunc (zEvent) {
    if (botBE) {
    alert ("AutoStart Kikapcsolva! A szerveredet kézileg kell majd elindítanod!");
    changekapcsoloGombFALSE();
    botBE = false;
     } else {
    alert ("AutoStart Bekapcsolva! A szervered automatikusan indul és erősíti meg magát!");
    changekapcsoloGombTRUE();
    botBE = true;
     }
}

var myDiv = document.querySelector ("#kapcsoloGomb");
if (myDiv) {
    myDiv.addEventListener ("click", myfunc , false);
}

//Be ki gomb script

function createkapcsoloGomb () {
  var kompozSav = getElementByXpath("/html/body/div[2]/main/section/div[3]/div[3]");
  var kapcsoloGomb = document.createElement('button');
  kapcsoloGomb.setAttribute("id", "kapcsoloGomb");
  kapcsoloGomb.innerHTML = 'AutoStart KI';
  kapcsoloGomb.setAttribute("class", "btn btn-huge btn-dark");
  kompozSav.append(kapcsoloGomb);
}

function changekapcsoloGombTRUE () {
  var kompozSav = getElementByXpath("/html/body/div[2]/main/section/div[3]/div[3]");
  var kapcsoloGomb = document.getElementById('kapcsoloGomb');
    kapcsoloGomb.innerHTML = 'AutoStart BE';
    kapcsoloGomb.setAttribute("class", "btn btn-huge btn-success");
    kapcsoloGomb.onclick = function(){
    };
}

function changekapcsoloGombFALSE () {
  var kompozSav = getElementByXpath("/html/body/div[2]/main/section/div[3]/div[3]");
  var kapcsoloGomb = document.getElementById('kapcsoloGomb');
    kapcsoloGomb.innerHTML = 'AutoStart KI';
    kapcsoloGomb.setAttribute("class", "btn btn-huge btn-dark");
    kapcsoloGomb.onclick = function(){
    };
}

// Antiban és hibák kilistázásának elrejtése

function antiBanMethod() {
        mobilVerzio = document.getElementsByClassName('status online');
        if (mobilVerzio.length > 0) {
         szerverFut = false;
         } else {
             mobilVerzio = document.getElementsByClassName('status loading');
             if (mobilVerzio.length > 0) {
                 szerverFut = false;
             } else {
                 mobilVerzio = document.getElementsByClassName('status loading starting');
                 if (mobilVerzio.length > 0) {
                     szerverFut = false;
                 } else {
                     szerverFut = true;
                 }
             }
         }
}
