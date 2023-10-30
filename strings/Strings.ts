let str1="Hello TypeScript."
let str2='Good Morning'
let str3 = `${str1} ${str2}`;
console.log(str3);

//String methods.
//1. chartAt()
console.log("chartAT() - "+str1.charAt(6));

//2. concat()
let str4 = str1.concat("Lets explore programming.",str2)
console.log("Concat() - "+str4)

//3. startsWith()
console.log("startsWith()- "+ str1.startsWith('Hel'));

//4. endsWith()
console.log("endsWith() - "+str1.endsWith("ipt."));

//5. indexOf()
console.log("indexOf() - "+str1.indexOf('e'));

//6. lastIndexOf()
console.log("lastIndexOf() - "+str1.lastIndexOf('e'))

//7. padStart()
console.log("padStart() 15 chars - " + str2.padStart(15,'!'))

//8. padEnd()
console.log("padEnd() 20 chars - "+str2.padEnd(20,'.'))

//9. repeat()
console.log("repeate() 2 times - "+str2.repeat(2))

//10. replace()
console.log("replace() llo with 'y' - "+str1.replace('llo','y'));

//11. slice()
console.log("slice() 3-9 "+str1.slice(3,9));

//12. substring()
console.log("subString() 3-9 "+str1.substring(3,9));

//13. toLowerCase()
console.log("toLowerCase() - "+str2.toLowerCase())

//14. toUpperCase()
console.log("toUpperCase() - "+str2.toUpperCase())

//15. trim()
console.log("trim() '   Hello string   ' - "+'   Hello string   '.trim())

//16. trimStart()
console.log("trimStart() '   Hello string   ' - "+'   Hello string   '.trimStart())

//17. trimStart()
console.log("trimEnd() '   Hello string   ' - "+'   Hello string   '.trimEnd())

//18. split()
let splitString = str1.split(" ");
console.log("split() - "+splitString)