//04/22/2022

let tempF = 80;

function converttempFToC(fahrenheit) {
  return (fahrenheit - 32) * 0.5556;
}
console.log(converttempFToC(tempF).toFixed(2));
