function countWordsWithA(sentence) {
  const str = sentence.toLowerCase().split(' ');// сделали строчку в одном регистре(все буковки маленькие), разделение строки на слова
  let count = 0;// счётчик кол-ва слов
  for (let i = 0; i < str.length; i += 1) { // цикл для перебора слова
    if (str[i] === str[i]['a']) { // сравниваем последнюю и первую букву слова
      count += 1; // если они совпали, то +1 счетчику
    }
  }
  return count; // возвращаем счётчик
}
console.log(countWordsWithA('Apple Banana Cherry'));

