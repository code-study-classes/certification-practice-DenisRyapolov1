function countUppercaseLetters(str) {
  let count = 0;
  let i = 0;
  while (i < str.length) {
    const char = str[i];
    if (char >= 'A' && char <= 'Z') {
      count += 1;
    }
    i += 1;
  }
  return count;
}

function combineStrings(n1, n2, s1, s2) {
  let i = 0;
  let p = 0;
  let result = '';
  let resultat = '';
  const s2Rev = s2.split('').reverse().join('');
  while (i < n1) {
    result += s1[i];
    i += 1;
  }
  while (p < n2) {
    resultat += s2Rev[p];
    p += 1;
  }
  return result + resultat.split('').reverse().join('');
}

function containsSubstring(s, s0) {
  return s.includes(s0);
}

function replaceSubstring(s, s1, s2) {
  return s.replace(s1, s2);
}

function countWordsWithSameLetters(sentence) {
  if (sentence.length === 0) { // если длина строки = 0
    return 0;// возвращается 0
  }
  const str = sentence.toLowerCase().split(' ');// сделали строчку в одном регистре(все буковки маленькие), разделение строки на слова
  let count = 0;// счётчик кол-ва слов
  for (let i = 0; i < str.length; i += 1) { // цикл для перебора слова
    if (str[i][str[i].length - 1] === str[i][0]) { // сравниваем последнюю и первую букву слова
      count += 1; // если они совпали, то +1 счетчику
    }
  }
  return count; // возвращаем счётчик
}

function countWordsWithA() {

}

function normalizeSpaces() {

}

function extractFileName() {

}

function encryptSentence() {

}

function checkBrackets() {

}

export {
  countUppercaseLetters,
  combineStrings,
  containsSubstring,
  replaceSubstring,
  countWordsWithSameLetters,
  countWordsWithA,
  normalizeSpaces,
  extractFileName,
  encryptSentence,
  checkBrackets,
};
