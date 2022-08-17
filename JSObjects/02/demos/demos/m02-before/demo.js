"use strict";
(function () {
  let person = {
    firstName: `Chris`,
    lastName: `Cooper`,
    age: 28,
    isAdult() {
      return this.age >= 18;
    },
  };

  for (let propertyName in person) {
    display(propertyName);
  }
  display(Object.keys(person));
})();
