"use strict";
(function () {
  let person = {
    firstName: `Chris`,
    lastName: `Cooper`,
    age: 17,
    isAdult: function () {
      return this.age >= 18;
    },
  };

  display(person.isAdult());
})();
