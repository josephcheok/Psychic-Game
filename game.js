var win = 0;
var lose = 0;
var userguesses = 0;
var guessesleft = 9;
var guessbar = [];

function makeid(length) {
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result = characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var completter = makeid(1);

function reset() {
  guessesleft = 9;
  completter = makeid(1);
  guessbar = [];
}

reset();

document.onkeyup = function(event) {
  if (event.key === completter) {
    win++;
    alert("You are right. It was '" + event.key + "'! Getting there!");
    reset();
  } else {
    guessesleft--;
    guessbar.push(event.key);
  }

  if (guessesleft === 0) {
    lose++;
    alert(
      "The letter I was thinking of was '" +
        completter +
        "'. Your psychic ability can be trained. Keep trying!"
    );
    reset();
  }

  console.log(completter);
  console.log("Win: " + win);
  console.log("Lose: " + lose);
  console.log("Guesses Left: " + guessesleft);
  console.log("Guesses so far: " + guessbar);

  document.getElementById("win").textContent = win;
  document.getElementById("lose").textContent = lose;
  document.getElementById("guessesleft").textContent = guessesleft;
  document.getElementById("guessbar").textContent = guessbar;
};
