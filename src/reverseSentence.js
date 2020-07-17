function ReverseASentence(sentence) {
  var tempArr = sentence.split(" ");
  for (var i = 0; i < tempArr.length; i++) {
    var tempArr2 = tempArr[i].split("");
    tempArr2.reverse();
    tempArr[i] = tempArr2.join("");
  }
  sentence = tempArr.join(" ");
  console.log(sentence);
}

ReverseASentence("Witam w aplikacji");
