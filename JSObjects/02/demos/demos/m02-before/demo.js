"use strict";
(function () {
  let person = {
    firstName: `Chris`,
    lastName: `Cooper`,
  };

  person.age = 29;
  person.isAdult = function () {
    return this.age >= 18;
  };

  display(person.isAdult());
})();
