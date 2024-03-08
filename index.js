// Code your solution here

// findMatching()
// 1) returns all drivers that match the passed in name
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
// fuzzyMatch()
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match
// matchName()
// 7) accesses the data structure to check if name matches
drivers = ["bob", "tom", "john"];

driversInfo = [
  { name: "bob", hometown: "texas" },
  { name: "tom", hometown: "canada" },
];

function findMatching(array, string) {
  return array.filter(function (driver) {
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(array, string) {
  return array.filter((driver) => driver.startsWith(string));
}

function matchName(array, string) {
  return array.filter((driver) => driver.name === string);
}

console.log(findMatching(drivers, "tom"));
console.log(matchName(driversInfo, "tom"));
