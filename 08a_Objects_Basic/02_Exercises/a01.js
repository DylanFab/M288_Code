/*
Task: Create an object-literal 'person' with the properties
Anna Muster, female, born on March 1, 2002?
In the next step: expand the existing example with a birthday edition
*/

//constant full months
//??
//??

let person2 = {
    //first name
firstName: "Dylan",
    //last name
lastName: "Fabozzo",    
    //gender
gender: "male",
    //birthday
birthday: new Date("2006-11-23"),

    /**
     * method get full name
     * @returns {string}
     */
getFullName(){
    return `${this.firstName} ${this.lastName}.`
},
//??
//??
    /**
     * method get birthday
     * @returns {string}
     */
getBirthday(){
    return `${this.birthday.toLocaleDateString('de-CH')}`;
}
}
/*
Sample output
weiblich
2002-03-01T00:00:00.000Z
Der Name ist Anna Muster.
Geburtstag am 1. March 2002
 */
console.log(`Gender ${person2.gender}`);
console.log(`My name is ${person2.getFullName()}`);
console.log(`Birthday ${person2.birthday}`);
console.log(`Birthday ${person2.getBirthday()}`);
