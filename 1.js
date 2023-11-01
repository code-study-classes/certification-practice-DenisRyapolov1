function combineStrings(n1, n2, s1, s2) {  
    let i=0;
    let p=0;
    let result='';
    let resultat='';
    s2=s2.split('').reverse().join('')
    console.log(s2)
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
console.log(combineStrings(3,2,'Hello', 'World'))