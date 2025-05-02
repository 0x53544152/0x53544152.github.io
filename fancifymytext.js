function makeTextBigger() {
  document.getElementById("userText").style.fontSize = "1.5em";
}

function changeStyle() {
  alert("Style changed!")

  if (document.getElementById("fancy").checked) {
    document.getElementById("userText").style.fontWeight = "bold";
    document.getElementById("userText").style.color = "blue";
    document.getElementById("userText").style.textDecoration = "underline";
  }
  else {
    document.getElementById("userText").style.fontWeight = "normal";
    document.getElementById("userText").style.color = "black";
    document.getElementById("userText").style.textDecoration = "none";
  }
}

function mooText() {
  document.getElementById("userText").value = document.getElementById("userText").value.toUpperCase();

  let sentence = document.getElementById("userText").value.toUpperCase().split(".");
  for (let i = 0; i < sentence.length; i++) {
    let words = sentence[i].trim().split(" ");
    if (words.length > 0) {
      words[words.length - 1] += "-Moo";
    }
    sentence[i] = words.join(" ");
  }
  document.getElementById("userText").value = sentence.join(". ");
}
