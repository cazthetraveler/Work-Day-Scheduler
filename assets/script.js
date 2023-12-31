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

  $(".saveBtn").click(function() {
    var timeBlock = $(this).parent().attr("id").split("hour-")[1]; //splits into 2 arrays, the number is in the second value
    console.log(timeBlock);
    var input = $(this).siblings(".description").val(); //gets the value of the user input
    console.log(input);
    localStorage.setItem(timeBlock, input); //"name" is the time block value, the value is the input
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //get handle on hour
  //get handle on time block elements
  //set function for changing the elements class
  //get handle on the hour-# again
  //set if statement for each hour and determine what class itll have

  var currentHour = dayjs().hour();
  var timeBlockEl = $(".time-block");

  $.each(timeBlockEl, function() {
    var timeBlockHour = $(this).attr("id").split("hour-")[1];

    if (timeBlockHour == currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (timeBlockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (timeBlockHour > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //get localstorage for each hour-#
  //okayyy i think im finally getting the hang of the localstorage

  $("#hour-9 .description").text(localStorage.getItem("9"));
  $("#hour-10 .description").text(localStorage.getItem("10"));
  $("#hour-11 .description").text(localStorage.getItem("11"));
  $("#hour-12 .description").text(localStorage.getItem("12"));
  $("#hour-13 .description").text(localStorage.getItem("13"));
  $("#hour-14 .description").text(localStorage.getItem("14"));
  $("#hour-15 .description").text(localStorage.getItem("15"));
  $("#hour-16 .description").text(localStorage.getItem("16"));
  $("#hour-17 .description").text(localStorage.getItem("17"));

  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  var currentDay = $("#currentDay");
  currentDay.text(today.format("dddd, MMMM DD"));
});
