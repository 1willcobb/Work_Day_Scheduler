// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? 


  let workDayHours2 = [6, 7, 8, 9, 10, 11, 12, 13, 14];
  //? Add hour to the beginning of the day
  $("#prepend_hour").on("click", function () {
    let prependedHour = workDayHours2[0] - 1;
    if (prependedHour === -1){
      alert("no more hours in the day!");
      return;
    }
    workDayHours2.unshift(prependedHour);
    $("<li>" + prependedHour +"</li>").insertBefore($("#timeblocks li:first"));
  });
  
  //? Add hour to the end of the day
  $("#append_hour").on("click", function () {
    let appendedHour = workDayHours2[workDayHours2.length - 1] + 1;
    if (appendedHour === 25){
      alert("no more hours in the day!");
      return;
    }
    workDayHours2.push(appendedHour);
    $("#timeblocks").append("<li>" + appendedHour + "</li>");
  });

  //? Display the current date in the header of the page.
  var today = dayjs().format("MMMM, DD YYYY");
  $("#currentDay").text("Today is " + today + ". Let's get this bread.");

  let workDayHoursEmpty = {
    6:[],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
  
  }; 
  
  var workDayHours = {};
  
  function pullStorage() {
    var workDayStorage = JSON.parse(localStorage.getItem("workDayStorage"));
    if (workDayStorage !== null){
      workDayHours = workDayStorage;
    } else {
      console.log("caught an empty storage");
      workDayHours = { ...workDayHoursEmpty };
      localStorage.setItem("workDayStorage", JSON.stringify(workDayStorage));
    }
    
    
  };
  
  function storeWorkday(){
    localStorage.setItem("workDayStorage", JSON.stringify(workDayHours));
    console.log(workDayHours)
    console.log(Object.values(workDayHours[6]));
  }
  
  pullStorage();
  storeWorkday();
});


/*
<li id="hour-9" class="row time-block past">
  <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</li>
*/

// create a li block for each hour of the day
  //li block needs container <li>
    //div for title
    //text area for writing input
    //button to save

// save button needs to save to dom.

