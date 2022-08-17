"use strict";
(function () {
  let person1 = {
    firstName: `Chris`,
    lastName: `Cooper`,
    age: 28,
    isAdult() {
      return this.age >= 18;
    },
  };

  let healthStats = {
    height: 55,
    weight: 155,
  };
  function mergeHealthStats(person, healthStats) {
    return Object.assign({}, person, healthStats);
  }

  let mergedPerson = mergeHealthStats(person1, healthStats);
  display(mergedPerson);
  display(person1);
})();
