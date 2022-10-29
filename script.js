let pass = "My wife is beautiful and i love her more than my life";
pass = pass.toUpperCase();

let length = pass.length;
let mistake = 0;
let yes = new Audio("yes.wav");
let no = new Audio("no.wav");
let pass1 = "";

for (i = 0; i < length; i++) {
  if (pass.charAt(i) == " ") pass1 = pass1 + " ";
  else pass1 = pass1 + "-";
}

function write_pass() {
  document.getElementById("strip").innerHTML = pass1;
}

window.onload = start;

let letters = new Array(26);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";

function start() {
  let contents = "";
  for (i = 0; i <= 25; i++) {
    let element = "lett" + i;
    contents =
      contents +
      '<div class="letter" onclick="check(' +
      i +
      ')" id="' +
      element +
      '">' +
      letters[i] +
      "</div>";
    if ((i + 1) % 7 == 0)
      contents = contents + '<div style="clear:both;"></div>';
  }

  document.getElementById("alphabet").innerHTML = contents;
  write_pass();
}

String.prototype.makeSign = function (place, sign) {
  if (place > this.length - 1) return this.toString();
  else return this.substr(0, place) + sign + this.substr(place + 1);
};

function check(nr) {
  let hit = false;

  for (i = 0; i < length; i++) {
    if (pass.charAt(i) == letters[nr]) {
      pass1 = pass1.makeSign(i, letters[nr]);
      hit = true;
    }
  }
  if (hit == true) {
    yes.play();
    let element = "lett" + nr;
    document.getElementById(element).style.background = "#003300";
    document.getElementById(element).style.color = "#00C000";
    document.getElementById(element).style.border = "3px solid #00C000";
    document.getElementById(element).style.cursor = "default";
    write_pass();
  } else {
    no.play();
    let element = "lett" + nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");

    //mistake
    mistake++;
    let photo = "img/g" + mistake + ".jpg";
    document.getElementById("gallows").innerHTML =
      '<img src="' + photo + '"alt=""/>';
  }
  //win
  if (pass == pass1)
    document.getElementById("alphabet").innerHTML =
      "YES YOU WIN!!! PASSWORD IS: " +
      pass +
      '<br/><br/><span class="reset" onclick="location.reload()">ONE MORE TIME?</span>';

  //defeat
  if (mistake >= 9)
    document.getElementById("alphabet").innerHTML = "OH NO YOU NOT WIN";
  ('<br/><br/><span class="reset" onclick="location.reload()">ONE MORE TIME?</span>');
}
