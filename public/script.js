

function displayTimestamp(){
    let timeStamp= new Date().toUTCString();
    document.getElementById("time-display").innerHTML= timeStamp
  }
  document.getElementById("time-submit").addEventListener("click", displayTimestamp);


  function getInputValue() {
    let inputVal = document.getElementById("user-input").value;
    if (inputVal.length > 0) {
    if (isNaN(new Date(inputVal))) {
      let tempTime = Date.parse(inputVal)
      let timeStamp = new Date(inputVal * 1);
      let regex = /[\D]/;
      if (regex.test(inputVal)) {
        document.getElementById("user-time-display").innerHTML= "Please enter a valid date"
      } else {
        document.getElementById("user-time-display").innerHTML= timeStamp
    }
    } else {
      let tempDate = new Date(inputDate);
      document.getElementById("user-time-display").innerHTML= tempDate.toUTCString()
    }
  }
  else {
    document.getElementById("user-time-display").innerHTML= "Please enter a value"

  }
  }

