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
  Object.assign(person1, healthStats);
  display(person1);
})();
