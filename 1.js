str = 'Racecar radar level Civic'.split(' ');
for (let i = 0; i < str.length; i += 1) {
  console.log(str[i][str[i].length - 1] === str[i][0]);
}
