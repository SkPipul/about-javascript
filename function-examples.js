function myAvarage(Assignment1, Assignment2, Assignment3){
    const totalMarks = Assignment1 + Assignment2 + Assignment3;
    const avarage = totalMarks / 3 ;
    return avarage;
}
const Assignment1 = 50;
const Assignment2 = 48;
const Assignment3 = 60;

const myResult = myAvarage(Assignment1, Assignment2, Assignment3);
console.log(myResult);