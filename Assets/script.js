// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let nowHour = dayjs().hour();
  pullStorage()
  createList()

  
  function make_empty(){
    var empty = [];
    for (let i = 0; i < 9; i++){
      empty.push({hour: (i + 6), text: "", status: 'present'});
    }
    return empty;
  }

  function createList(){
    for (var i in workDayHours){
      var hour = workDayHours[i].hour
      var text = workDayHours[i].text
      $("#timeblocks").append( '<div id="' + hour + '" class="row time-block ' + pastPresentFuture(hour) + '">' +
                    '<div class="col-2 col-md-1 hour text-center py-3">' +  twelveHourClock(hour) + '</div>' +
                      '<textarea class="col-8 col-md-10 description" rows="3">'+ text +'</textarea>' +
                      '<button class="btn saveBtn col-2 col-md-1" aria-label="save">' +
                        '<i class="fas fa-save" aria-hidden="true"></i>' +
                      '</button>' +
                    '</div>'
      )}
    };
  
function twelveHourClock(hour){
  if (hour > 12){
    return hour - 12 + "PM";
  } else {
    return hour + "AM";
  }
}

function pastPresentFuture(hour){
  if (hour < nowHour){
    return 'past';
  } else if (hour === nowHour) {
    return 'present';
  } else if (hour > nowHour) {
    return 'future';
  } else {
    return; 
  }
}

  // TODO: Add a listener for click events on the save button. This code should
  $("#timeblocks div button").on('click', function(){
    var location = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();

    var entry = workDayHours.find(function(item) {
      return item.hour.toString() === location;
    });

    if (entry) {
        // Push the text into the 'text' property of the dictionary entry
        entry.text = text;
    }

    console.log(location)
    console.log('Clicked:', text);
    console.log(workDayHours)
    storeWorkday()
  })

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  


  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this? 


  
  //? Add hour to the beginning of the day
  $("#prepend_hour").on("click", function () {
    let prependedHour = {hour: workDayHours[0].hour - 1, text: "", status: 'present'};
    if (prependedHour.hour === -1){
      alert("no more hours in the day!");
      return;
    }
    workDayHours.unshift(prependedHour);
    $('<div id="hour-' + twelveHourClock(prependedHour.hour) + '" class="row time-block ' + pastPresentFuture(prependedHour.hour) + '">' +
    '<div class="col-2 col-md-1 hour text-center py-3">' +  twelveHourClock(prependedHour.hour) + '</div>' +
      '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>' +
      '<button class="btn saveBtn col-2 col-md-1" aria-label="save">' +
        '<i class="fas fa-save" aria-hidden="true"></i>' +
      '</button>' +
    '</div>').insertBefore($("#timeblocks li:first"));
    storeWorkday()
    location.reload();
    pullStorage()
  });
  
  //? Add hour to the end of the day
  $("#append_hour").on("click", function () {
    let appendedHour = {hour: workDayHours[workDayHours.length - 1].hour + 1, text: "", status: 'present'};
    if (appendedHour.hour === 25){
      alert("no more hours in the day!");
      return;
    }
    workDayHours.push(appendedHour);
    $("#timeblocks").append('<div id="hour-' + twelveHourClock(appendedHour.hour) + '" class="row time-block ' + pastPresentFuture(appendedHour.hour) + '">' +
    '<div class="col-2 col-md-1 hour text-center py-3">' +  twelveHourClock(appendedHour.hour) + '</div>' +
      '<textarea class="col-8 col-md-10 description" rows="3"> </textarea>' +
      '<button class="btn saveBtn col-2 col-md-1" aria-label="save">' +
        '<i class="fas fa-save" aria-hidden="true"></i>' +
      '</button>' +
    '</div>');
  });

  //? Display the current date in the header of the page.
  var today = dayjs().format("MMMM, DD YYYY");
  $("#currentDay").text("Today is " + today + ". Let's get this bread.");


  function clearTextFields(){
    for (var i in workDayHours){
      $(".description").text() = '';
    }
  }


  function pullStorage() {
    var workDayStorage = JSON.parse(localStorage.getItem("workDayStorage"));
    if (workDayStorage !== null){
      workDayHours = workDayStorage;
    } else {
      console.log("caught an empty storage");
      workDayHours = make_empty();
      localStorage.setItem("workDayStorage", JSON.stringify(workDayStorage));
    }
    
  };
  
  function storeWorkday(){
    localStorage.setItem("workDayStorage", JSON.stringify(workDayHours));
  }
  
  storeWorkday()

});

