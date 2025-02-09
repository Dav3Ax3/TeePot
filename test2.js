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

var b =((x) => {x*x*x});

var c = x =>  {x^4};

var ispis = (x) => console.log(x);

var x = 2;

ispis(a(x));
ispis(b(x));
ispis(c(x));
