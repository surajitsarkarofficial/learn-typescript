var arr;
arr = [3, 5, 2, 7, 8, 1];
console.log(arr);
arr.push(0);
arr.push(10);
console.log("Array after adding elements " + arr);
arr.reverse();
console.log("Reversed array is - " + arr);
//sorting number array
arr.sort(function (n1, n2) { return n2 - n1; });
console.log("Sorted array - " + arr);
//sorting string array
var stringArr = ['D', 'B', 'A', 'E', 'C'];
var sortedArry = stringArr.sort(function (e1, e2) {
    if (e1 > e2) {
        return 1;
    }
    if (e2 > e1) {
        return -1;
    }
    return 0;
});
console.log('Sorted String Array is - ' + stringArr);
var objArr;
objArr = [{ name: 'Roma', age: 27 }, { name: 'Suro', age: 31 }, { name: 'Soma', age: 25 }];
objArr.sort(function (o1, o2) {
    if (o1.name > o2.name) {
        return 1;
    }
    if (o1.name < o2.name) {
        return -1;
    }
    return 0;
});
console.log("Object array sorted by name " + JSON.stringify(objArr));
objArr.sort(function (o1, o2) {
    if (o1.age > o2.age) {
        return 1;
    }
    if (o1.age < o2.age) {
        return -1;
    }
    return 0;
});
console.log("Object array sorted by age " + JSON.stringify(objArr));
var newArr = [10, 23, 14, 12, 19, 0, -1, 6];
//toString()
console.log("Printing array " + newArr);
console.log("Printing array with toString() " + newArr.toString());
//shift()
console.log("Before modifying the array " + newArr);
var element = newArr.shift();
console.log("Returned element is  " + element);
console.log("Modified array is " + newArr);
//unshift()
console.log("Before modifying the array " + newArr);
console.log("Before modifying original array length is " + newArr.length);
var newArrLength = newArr.unshift(1, 5);
console.log("New array length is " + newArrLength);
console.log("Modified new array is " + newArr);
//join()
console.log(newArr.join());
//fill()
var fillArr = [1, 2, 3, 4, 5, 6, 7, 8];
fillArr.fill(0, 3, 5);
console.log(fillArr);
//slice()
var sliceOrArr = [10, 20, 30, 50, 25, 20, 35];
var newSliceArr = sliceOrArr.slice(1, 3);
console.log("Original Slice Arr " + sliceOrArr);
console.log("Output arr - " + newSliceArr);
//splice()
var spliceOrArr = [20, 13, 18, 32, 45, 10, 55, 85, 90, 35];
var retValue = spliceOrArr.splice(3, 2, 5, 6, 7);
console.log('Spliced array is ' + spliceOrArr);
console.log(retValue);
//concat
var concatArr = spliceOrArr.concat(sliceOrArr);
console.log("Concat array is " + concatArr);
//mutlidimensional array
var multiDArray = [[3, 4, 5], [6, 7, 8, 9]];
console.log(multiDArray);
multiDArray.forEach(function (e, index) {
    console.log("elements at index " + index);
    e.forEach((function (ie) {
        console.log(ie);
    }));
});
