let leg = ['None','4 legs','8 legs', '12 legs'];
alert('How many legs does spider have?');
for(let i =0; i<leg.length;i++){
    alert((i+1)+". "+leg[i]);
}

while(true){
    let ans = prompt('Enter your answer: ');
    if(ans ==1 || ans ==2 || ans == 3 || ans ==4){
        if(ans ==3){
            alert("Bravo, you're correct!!");
        }else{
            alert("Good luck next time!");
        }
        break;
    }else{
        alert("Invalid input!! Re-enter!");
    }
}