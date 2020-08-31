let Quizzes = [
    {
        ques: "1+1 =?",
        choiceA: 3,
        choiceB: 2,
        choiceC: 4,
        choiceD: 12,
        rightChoice: 2,
    },
    {
        ques: "85^2 =?",
        choiceA: '2325',
        choiceB: '7225',
        choiceC: '4225',
        choiceD: '1225',
        rightChoice:2,
    },
    {
        ques: "E =?",
        choiceA: 'm*c^2',
        choiceB: 'Em',
        choiceC: 'E thang kia',
        choiceD: 'Eo oi',
        rightChoice: 1,
    }
];
let j = 1;
while(true){

let random = Math.floor(Math.random() * Quizzes.length-j+1);
j++;
let quiz = parseInt(prompt(`${Quizzes[random].ques}\n1. ${Quizzes[random].choiceA} \n2. ${Quizzes[random].choiceB}\n3. ${Quizzes[random].choiceC}\n4. ${Quizzes[random].choiceD}`));
console.log('b5');
    if (quiz == Quizzes[random].rightChoice) {
        alert('Congrats!!!');
    } else {
        alert('Ngu');
    }
    if(j==3){
        break;
    }
}

