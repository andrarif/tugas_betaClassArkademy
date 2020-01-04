 
var t="";

for (var i = 1; i <= 7; i++){
    for(var j = 6; j >= i; j--){
        t += "*";
    }t += "\n";
}
console.log(t);
