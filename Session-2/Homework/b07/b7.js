let num = prompt("Enter a number");
let hallNum = parseInt(prompt("Enter a hall number:"));
let half = hallNum/2;
if(num <half){
    alert(`Number ${num} is lower hall of ${hallNum}`);
}else if(num ==half){
    alert(`This number ${num} is right on the half of the hall of ${hallNum}`);    
}else{
    alert(`Number ${num} is higher hall of ${hallNum}`)
}