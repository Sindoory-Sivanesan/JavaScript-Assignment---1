const strings = ["hello","","world","","javascript"];

const newstring = strings.filter((value) => typeof value === 'string' && value !== '');

console.log(newstring);



