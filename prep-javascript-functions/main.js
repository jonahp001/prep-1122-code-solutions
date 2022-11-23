function addTwoNumbers(num1, num2) {
  var sumOfTwo = num1 + num2;
  return sumOfTwo;
}
var twoNumSum = addTwoNumbers(9, 81);
console.log('addTwoNumbers Exercise:', twoNumSum);

function convertHoursToMinutes(hours) {
  var hourConversion = hours * 60;
  return hourConversion;
}
var hourResults = convertHoursToMinutes(4);
console.log('convertHoursToMinutes Exercise:', hourResults, 'minutes.');

function getGreeting(name) {
  var addGreeting = 'Hello ' + name + '!';
  return addGreeting;
}
var niceGreeting = getGreeting('Bobby');
console.log('getGreeting Exercise:', niceGreeting);

function addAndMultiplyBy5(num1, num2) {
  var addNums = num1 + num2;
  var multNums5 = addNums * 5;
  return multNums5;
}
var addAndMultiply5Result = addAndMultiplyBy5(3, 8);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiply5Result);

function multiplyAndDivideBy5(num1, num2) {
  var multnums = num1 * num2;
  var divBy5 = multnums / 5;
  return divBy5;
}
var multAndDivBy5Result = multiplyAndDivideBy5(8, 15);
console.log('multiplyAndDivideBy5 Exercise:', multAndDivBy5Result);

function subtractTwoNumbers(num1, num2) {
  var subtractingNums = num1 - num2;
  return subtractingNums;
}
var subtractTwoNumResult = subtractTwoNumbers(78, 28);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumResult);

function getCircleCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  return circumference;
}
var circleCircum = getCircleCircumference(10);
console.log('getCircleCircumference Exercise:', circleCircum);

function getFullName(firstName, lastName) {
  var fullname = firstName + ' ' + lastName;
  return fullname;
}
var fullnamePrint = getFullName('Jonah', 'Park');
console.log('getFullName Exercise:', fullnamePrint);

function cube(number) {
  var cubednum = number * number * number;
  return cubednum;
}
var cubeResult = cube(4);
console.log('cube Exercise:', cubeResult);
