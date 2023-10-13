function getNum() {
  const num = prompt("Number between 1 to 10");
  if (isNaN(num) || (num === null)) {
    alert("Unvalid number");
  }
  else if (num < 1) {
    alert("Too low");
  }
  else if (num > 10) {
    alert("Too high");
  }
  else {
    alert("Your number is: " + num);
  }
}

function getName() {
    const name = prompt("Username ?: ");
      if( name === ""){
        alert("You cant enter emty")
      } else if( name > 0 || name < 0) {
         alert("Nope use words")
      } else {
         alert(`Hello ${name}`)
      }
    }






