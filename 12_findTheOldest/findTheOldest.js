const getAge = function (birth, death) {
    if (!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, CurrentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(CurrentPerson.yearOfBirth, CurrentPerson.yearOfDeath);
        return oldestAge < currentAge ? CurrentPerson : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
