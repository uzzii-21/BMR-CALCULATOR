const calculate = () => {
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
    let activity;
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

    if(bmr <= 1926){
        activity="Activity Level: Sedentary: little or no exercise";
        }
    else if(bmr > 1926 && bmr<= 2207){
        activity="Activity Level: Exercise 1-3 times/week";
        }
    else if(bmr > 2207 && bmr <= 2351){
        activity="Activity Level: Exercise 4-5 times/week";
        }
    else if(bmr > 2351 && bmr <= 2488){
        activity="Activity Level: Daily exercise or intense exercise 3-4 times/week";
        }
    else if(bmr > 2488 && bmr <= 2796){
        activity="Activity Level: Intense exercise 6-7 times/week";
        }
    else if( bmr > 2796){
        activity="Activity Level: Very intense exercise daily, or physical job";
    }

    document.getElementById("result").innerHTML = 'Your BMR: ' + bmr.toFixed(2) + 'kCal/Day' + activity;
    document.getElementById("result").style.display = "block";

    return false;

  }