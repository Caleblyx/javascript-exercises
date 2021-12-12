const findTheOldest = function() {
    people = arguments[0];
    return people.reduce((curr, person) => {
        const year = new Date().getFullYear();
        let currAge = 0;
        let personAge = 0;
        if ('yearOfDeath' in curr) {
            currAge = curr.yearOfDeath - curr.yearOfBirth;
        } else {
            currAge = year - curr.yearOfBirth;
        }
        if ("yearOfDeath" in person) {
            personAge = person.yearOfDeath - person.yearOfBirth;
        } else{
            personAge = year - person.yearOfBirth;
        }
        if (currAge >= personAge){
            return curr;
        } else {
            return person;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
