//Zadatak 2.2 str. 43 JavaScript Uvod u Veb
// Na standardni izlaz ispisati Zdravo, osobo bez imena! i Zdravo, Ana! Bez koriscenja uslovne kontrole toka.
// To radimo uz pomoc podrazumevanih vrednosti za argumente fcija

// function pozoviMe(ime = 'osobo bez imena'){
//     console.log("Zdravo, " + ime+ "!");
//     return+ "!";
// }

// pozoviMe();
// pozoviMe("Ana");

//----------------------------------------------------------

//ANONIMNE FCIJE

var a = function(x){return x*x};

let b = (x => x*x*x);

let c = x => x**4;

var ispis = x => console.log(x);

var x = 2;

ispis("A:" + a(x));
ispis("B:" + b(x));
ispis("C:" + c(x));

var f1 = (function () {
    let x = 3;
    return x*x*x;
}());

var f2 = (x => x*x*x)(6);

ispis(f1);
ispis(f2);
