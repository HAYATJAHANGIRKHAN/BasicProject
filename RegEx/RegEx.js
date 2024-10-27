let pattern = "sulaiman";
let regexone= new RegExp(pattern);
let flag= 'gi';
let regextwo = new RegExp(pattern,flag);//•	Constructor Syntax



let regexthree=/sulaiman/gi //•	Literal Syntax

const strToCheck= " sulaiman is  the best person  of my life. sulaiman is from sharpora. sulaiman is now some boy lessthan 6 months.";

const result = regexthree.test(strToCheck);
console.log(result);

const anotherresult = strToCheck.match(regexthree);
console.log(anotherresult);

const onemoreREsult= strToCheck.replace(regexthree, "hayat");
console.log(onemoreREsult);

const webur2 = "http://hayatjahangir.com/jahangir@60khan"
const useableurl= webur2.replace(/%\d0/,"-");
console.log(useableurl)
