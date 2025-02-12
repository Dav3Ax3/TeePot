function fib(n){
    if(n < 0) return -1;
    if(n == 0 || n == 1){
        return 1;
    }
    else return fib(n-1) + fib(n-2);
}

let x = 60;
console.log(fib(x));

console.log("\n je ispis fje fib(" + x + ").");

function fibit(n){
    if(n < 0) return -1;
    
    var predposlednji = 1, poslednji = 1, tmp;
    if(n == 0  || n ==1) return 1;

    let iter = 1;
    while(iter != n){
        tmp = poslednji;
        poslednji = predposlednji + poslednji
        predposlednji = tmp;
        iter++;
    }
    return poslednji;
}

console.log(fibit(x));

console.log("\n je ispis fje fibit(" + x + ").");
