const person = {
  firstName: 'Jonah',
  lastName: 'Park',
  hobby: 'climbing'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'unemployed';
console.log("The person's current job is:", person.job);

person.previousJob = 'assistant manager';
console.log("The person's previous job was:", person.previousJob);

console.log("'person' object in Javascript code:", person);
