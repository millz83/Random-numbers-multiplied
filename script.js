const x = Math.ceil(Math.random()*12);
const y = Math.ceil(Math.random()*12);

const response = prompt(`What is ${x} multiplied by ${y}?`);

if(Number(response) === x*y){
  alert('Correct! Well done.');
} else {
  alert(`Wrong! The correct answer is ${x*y}`);
}