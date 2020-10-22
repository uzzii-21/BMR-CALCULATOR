function calculate() {
    var age = document.forms["myForm"]["age"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var foot = document.forms["myForm"]["height1"].value;
    var inch = document.forms["myForm"]["height2"].value;
    var weight1 = document.forms["myForm"]["weight"].value;

    // convert height from feet inches to cm
    var footToCm = foot * 30.48; 
    var inchToCm = inch * 2.54;
    var height = footToCm + inchToCm;

    // convert weight from pound to kg
    var weight = weight1 * 0.453592;

    console.log(height);
    var bmr = 0;
    if (age == '' || gender == '' || height == '' || weight == '') {
      alert("All fields are required");
      return false;
    }

    if (gender == 1) {
      bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else {
      bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    }

    document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day';
    document.getElementById("result").style.display = "block";

    return false;

  }