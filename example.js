const globalx = 6;

function myFunc() {
    globalx ++ ;
}

myFunc();
myFunc();
myFunc();

console.log("Global: " + globalx);