let button = document.getElementById("submitButton");
let output = document.getElementById("outputText");
let AttemptValue = document.getElementById("attempt");
counter = 0;
// generating random numbers between 1 and 100.
let realValue = Math.floor(Math.random() * 100) + 1;

const checkTrials = () => {
  let input = Number(document.getElementById("input").value);
    counter++
      AttemptValue.innerHTML = `Attempt: ${counter}`
  
  if (input === realValue) {
    output.innerHTML = `You win! The number is ${realValue}`;
  } if (input < realValue  && counter <= 5) {
    output.innerHTML = `Your guess (${input}) is too low. Attempt 5/${counter}`;
  }
  else if (counter > 5) {
    output.innerHTML = `Game over! the number was ${realValue}`
  }
 
  if (input > realValue  && counter <= 5) {
    output.innerHTML = `Your guess (${input}) is too high. Attempt 5/${counter}`;
  } else if (input === "") {
    output.innerHTML = "Please enter a number";
  }
}
button.addEventListener("click", function () {
  checkTrials()
});

input.addEventListener("keypress", function (e) {
  if(e.key === "Enter"){
    checkTrials()
  }
});


function quit() {
  output.innerHTML = `The number was ${realValue}!`;
}