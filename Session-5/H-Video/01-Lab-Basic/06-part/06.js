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
        rightChoice: 2,
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

let len = Quizzes.length;
while (len>0) {
    let random = Math.floor(Math.random() * (Quizzes.length-1));
    let quiz = parseInt(prompt(`${Quizzes[random].ques}\n1. ${Quizzes[random].choiceA} \n2. ${Quizzes[random].choiceB}\n3. ${Quizzes[random].choiceC}\n4. ${Quizzes[random].choiceD}`));

    Quizzes.splice(random,1);
    
    if(quiz == Quizzes[random].rightChoice){
        alert('Congrats');
    }else{
        alert('Ga`');
    }
    len--;
    
}
alert('Het cau hoi roi lmao!!!');