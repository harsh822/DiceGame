function changeImages() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;

  var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomDiceImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/" + randomDiceImage2;

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.getElementById("w1").innerHTML = "🚩";
    document.getElementById("w2").innerHTML = "_";
  }
  else if (randomNumber2 > randomNumber1) {
    document.getElementById("w2").innerHTML = "🚩";
    document.getElementById("w1").innerHTML = "_";
  }
  else {
    document.getElementById("w1").innerHTML = "_";
    document.getElementById("w2").innerHTML = "_";
  }
}  