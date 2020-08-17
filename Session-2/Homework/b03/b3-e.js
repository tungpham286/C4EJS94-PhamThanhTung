let c =parseInt(prompt("Enter c: "));
let n = parseInt(prompt("Enter n: "));
console.log(`Print out ${Math.ceil((n-c)/3)} numbers, starting form ${c} and stepping by 3:`);

for(let i = c; i<n; i+=3){
    console.log(i)
}