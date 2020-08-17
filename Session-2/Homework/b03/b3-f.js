let c =parseInt(prompt("Enter starting num: "));
let n = parseInt(prompt("Enter ending num: "));
let s = parseInt(prompt("Enter stepping num: "));
console.log(`Print out ${Math.ceil((n-c)/s)} numbers, starting form ${c} and stepping by ${s}:`);

for(let i = c; i<n; i+=s){
    console.log(i)
}