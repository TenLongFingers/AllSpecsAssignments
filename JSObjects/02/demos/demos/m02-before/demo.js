"use strict";
(function () {
  function registerUser(fName, lName) {
    let person = {
      firstName: fName,
      lastName: lName,
    };

    display(person);
  }

  registerUser(`Chris`, `Cooper`);
})();
