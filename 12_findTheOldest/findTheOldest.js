const findTheOldest = function(array) {
    
    let peopleWithAge = array.map(person => {
        const currentYear = new Date().getFullYear();
        const personAge = (person.yearOfDeath !== undefined) 
        ? (person.yearOfDeath - person.yearOfBirth) 
        : (currentYear - person.yearOfBirth);

        return {
            name: person.name,
            personAge: personAge
        };

    });

    peopleWithAge.sort((a,b) => b.personAge - a.personAge);

    let oldestName = peopleWithAge[0].name;

    const originalName = array.find(person => person.name === oldestName);

    return originalName;

    // let oldestOriginal = array.find(person => )

};



// Do not edit below this line
module.exports = findTheOldest;




// let peopleWithAge = array.map(person => {
//     const currentYear = new Date().getFullYear();
//     const personAge = (person.yearOfDeath !== undefined) 
//     ? (person.yearOfDeath - person.yearOfBirth) 
//     : (currentYear - person.yearOfBirth);

//     return {
//         name: person.name,
//         personAge: personAge
//     };

// });

// peopleWithAge.sort((a,b) => b.personAge - a.personAge);

// let oldestName = peopleWithAge[0].name;

// for (let element in array){
//     if (element.name == oldestName) {
//         return element.name;
//     }
// }











///////////////////////////////////////////////////////////





// const peopleWithAge = array.map(person => {
//     const currentYear = new Date().getFullYear();
//     const personAge = (person.yearOfDeath !== undefined) 
//     ? (person.yearOfDeath - person.yearOfBirth) 
//     : (currentYear - person.yearOfBirth);

//     return {
//         name: person.name,
//         personAge: personAge
//     };

// /*const oldestPerson = array.sort((a,b) => {

// })
// */

// });

// return peopleWithAge;




// const peopleWithAge = array.map(person => {
//     const currentYear = new Date().getFullYear();
//     const yearOfBirth = person.yearOfBirth;
//     const yearOfDeath = person.yearOfDeath;
//     const personAge = (yearOfDeath !== undefined) 
//     ? (yearOfDeath - yearOfBirth) 
//     : (currentYear - yearOfBirth);

//     return {
//         name: person.name,
//         yearOfBirth: yearOfBirth,
//         yearOfDeath: yearOfDeath,
//         personAge: personAge
//     };

// /*const oldestPerson = array.sort((a,b) => {

// })
// */

// });


// const findTheOldest = function(array) {

//     const peopleWithAge = array.map((person, a, b) => {
        
//         const personAge = (person.yearOfDeath !== undefined) 
//         ? (person.yearOfDeath - person.yearOfBirth) 
//         : (new Date().getFullYear() - person.yearOfBirth);
//         const aThing = a;
//         const bThing = b;

            // this tested to see if arrow function could accept multiple arguments
            // and only use person for iteration and mathing.  This is so that I can
            // use one .sort() function to get the people age values and output
            // the name later without needing a second arrow function

//         return {
            
//             personAge: personAge
//         };

//     /*const oldestPerson = array.sort((a,b) => {

//     })
//     */

//     });


//     return(peopleWithAge);

//     // ternary operator to check if undefined?


// };

// const people = [
//       {
//         name: "Carly",
//         yearOfBirth: 1942,
        
//       },
//       {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//       },
//       {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//       },
//     ]

// findTheOldest(people);







// const peopleWithAge = array.map(person => {
//     return {
//         name: person.name,
//         yearOfBirth: person.yearOfDeath,
//         yearOfDeath: person.yearOfDeath,
//         ageAtDeath: person.yearOfDeath - person.yearOfBirth
//     };
// });











// let peopleArray = array.map(person => [person.name, person.yearOfBirth, person.yearOfDeath]).flat();
//     let nameAgeArray = [];
//     let oldestNum = 0;
//     let oldestName = '';

//     for (i = 2; i < (peopleArray.length - 1); i + 3){
//         if (typeof peopleArray.at(i) !== 'string'){
//             nameAgeArray.push(peopleArray.at(i - 2));
//             nameAgeArray.push(peopleArray.at(i) - peopleArray.at(i - 1));
//         }
//         else {
//             peopleArray.slice(i, 0, (new Date().getFullYear));
//             nameAgeArray.push(peopleArray.at(i - 2));
//             nameAgeArray.push(peopleArray.at(i) - peopleArray.at(i - 1));
//         }
//     }

//     for (i = 1; i < (nameAgeArray.length - 1); i + 2){
//         if (nameAgeArray.at(i) > oldestNum){
//             oldestNum = nameAgeArray.at(i);
//             oldestName += nameAgeArray.at(i - 1);
//         }
//     }

//     return oldestName;






















// let peopleArray = array.flat();
//     let nameAgeArray = [];
//     let oldestNum = 0;
//     let oldestName = '';

//     for (i = 2; i < (peopleArray.length - 1); i + 3){
//         if (typeof peopleArray.at(i) !== 'string'){
//             nameAgeArray.push(peopleArray.at(i - 2));
//             nameAgeArray.push(peopleArray.at(i) - peopleArray.at(i - 1));
//         }
//         else {
//             peopleArray.slice(i, 0, (new Date().getFullYear));
//             nameAgeArray.push(peopleArray.at(i - 2));
//             nameAgeArray.push(peopleArray.at(i) - peopleArray.at(i - 1));
//         }
//     }

//     for (i = 1; i < (nameAgeArray.length - 1); i + 2){
//         if (nameAgeArray.at(i) > oldestNum){
//             oldestNum = nameAgeArray.at(i);
//             oldestName += nameAgeArray.at(i - 1);
//         }
//     }

//     return oldestName;







////////////////////////////////////////////




/*


let dateArray = people.map((deathBirth) => 
    [deathBirth.yearOfDeath, deathBirth.yearOfBirth]);
// return dateArray;

dateArray = people.flat();

for (let element in dateArray){
    if (element == undefined){
        element.replace(new Date().getFullYear);
    }
}
// this sets undfined values to a year value
return(dateArray);

*/