let mass = parseFloat(prompt("Enter your weight in kg:"));
let height = parseFloat(prompt("Enter your height in cm:"));
height/=100;
let BMI = mass/(Math.pow(height,2));
alert(`You BMI is ${BMI}`);
if(BMI<16){
    alert("You're severely underweight!!!!");
}else if(BMI>=16 && BMI <18.5){
    alert("You're underweight!!");
}else if(BMI>=18.5 && BMI<25){
    alert("You're normal");
}else if(BMI >=25 && BMI <30){
    alert("You're overweight!!");
}else{
    alert("You're OBESE!!!!!!!");
}