
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var a = randomNumber1.toString();
    var string1 = "images/dice";
    var string2 = ".png";
    var concat1 = string1.concat(a, string2);
    document.querySelector(".img1").src = concat1;

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var b = randomNumber2.toString();
    var concat2 = string1.concat(b, string2);
    document.querySelector(".img2").src = concat2;

    if (a > b) {
        document.querySelector(".changeH1").innerHTML = "Player 1 Wins!";
        } else if (a == b) {
        document.querySelector(".changeH1").innerHTML = "Draw!";
        } else {
            document.querySelector(".changeH1").innerHTML = "Player 2 Wins!";
        }