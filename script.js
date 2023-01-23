//your code here
function count_word(val) {
  var wom = val.match(/\S+/g);
  return {
    words: wom ? wom.length : 0,
  };
}
var textContent = document.getElementById("evaluatedText");
var showWordCount = document.getElementById("wordCount");

textContent.addEventListener(
  "input",
  function () {
    var v = count_word(this.value);
    showWordCount.innerHTML = v.words;
  },
  false
);