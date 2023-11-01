function countUppercaseLetters(str) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        const char = str[i];
        if (char >= 'A' && char <= 'Z') {
      count += 1;
    }
    i += 1;
  };
  return count;
};

function combineStrings(n1, n2, s1, s2) {  
    let i=0;
    let p=0;
    let result='';
    let resultat='';
    s2=s2.split('').reverse().join('')
    while (i<n1) {
        result=result+s1[i];
        i+=1;
    }
    while (p<n2) {
        resultat=resultat+s2[p];
        p+=1;
    }
    return result+resultat.split('').reverse().join('');
};

function containsSubstring(s,s0) {
    return s.includes(s0);
};

function replaceSubstring(s, s1, s2) {
    return s.replace(s1,s2);
};

function countWordsWithSameLetters(sentence) {
    
};

function countWordsWithA() {
    
};

function normalizeSpaces() {
    
};

function extractFileName() {
    
};

function encryptSentence() {
    
};

function checkBrackets() {
    
};

export {countUppercaseLetters, combineStrings, containsSubstring, replaceSubstring, countWordsWithSameLetters, countWordsWithA, normalizeSpaces, extractFileName, encryptSentence, checkBrackets
};    