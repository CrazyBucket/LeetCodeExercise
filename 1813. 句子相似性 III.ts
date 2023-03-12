function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  if (sentence1.length < sentence2.length) {
    var temp = sentence2;
    sentence2 = sentence1;
    sentence1 = temp;
  }
  var array1 = sentence1.split(" ");
  var array2 = sentence2.split(" ");
  while (array2.length > 0) {
    if (array2[0] == array1[0]) {
      array1.shift();
      array2.shift();
    } else if (array2[array2.length - 1] == array1[array1.length - 1]) {
      array1.pop();
      array2.pop();
    } else return false;
  }
  return true;
}
