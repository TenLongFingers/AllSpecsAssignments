function myFunction() {
  let elem = document.getElementById("chooseMe");
  let fortuneNum = elem.options[elem.selectedIndex].value;
  let dayName;
  console.log(fortuneNum);
  switch (Number(fortuneNum)) {
    case 1:
      "You will inherit a fortune";
      break;
  } //end switch statment
  document.getElementById("output").innerHTML = dayName;
} //end function
