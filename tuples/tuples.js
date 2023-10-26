var studentData;
studentData = [1, "Suro"];
studentData.push(2, "Googlie");
studentData.forEach(function (data) {
    console.log(data);
});
function display(inputTuple) {
    console.log("Printing tuple elements");
    for (var i = 0; i < inputTuple.length; i++) {
        console.log(inputTuple[i]);
    }
    console.log("---------------");
}
//declaring tuple
var empTuple = [101, 'Suro', 'Pune'];
//adding more elements to a tuple
empTuple.push('Married');
empTuple.push('QA');
//passing tuple to a function
display(empTuple);
//removing element from tuple
empTuple.pop();
display(empTuple);
//updating tuple
empTuple[0] = 200;
display(empTuple);
//accessing tuple by index
console.log('Tuple element at index 1 is ' + empTuple[1]);
