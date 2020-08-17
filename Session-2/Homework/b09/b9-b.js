let num = prompt("Enter total number of Ls and Hs:");
console.log(`Print out total ${num} Ls and Hs:`)
for(let i =0;i<num/2;i++){
    console.log("L");
}
for(let i =Math.ceil(num/2);i<num;i++){
    console.log("H");
}