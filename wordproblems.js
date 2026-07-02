                 //Problem No:01//
function gethighestscorer(students){
    return students.reduce((highest,students)=> students.score > highest.score ?
    students : highest).name;
}
const students=[
{name: "Ali" ,score: 80},
 {name: "Ahmad" ,score: 92},
{name: "Zaheer" ,score: 75}
];
console.log(gethighestscorer(students));

                // Problem No:02//
function splitCandies(candies, students) {
  let eachStudentGets = Math.floor(candies / students);
  let leftOver = candies % students;

  return {
    eachStudentGets,
    leftOver
  };
}
console.log(splitCandies(23, 5));

                  // Problem N0:03//
function cleanPercentage(totalContacts, duplicateContacts) {
  let cleanContacts = totalContacts - duplicateContacts;
  let percentage = (cleanContacts / totalContacts) * 100;
  return percentage;
}
console.log(cleanPercentage(10, 4));