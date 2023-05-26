# 05 Third-Party APIs: Work Day Scheduler

## Your Task



You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.


## Acceptance Criteria


WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist


The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Acceptance Criteria Simplified

* A series of timeblock elements must exist on the page (you can create these dynamically in JavaScript or place them manually on the page, either will work for now). These should match the spec you see below.

* Each timeblock has an hour associated with it. Take the current time into account and compare it to the hour of the timeblock. Give each timeblock a specific color depending on if it has already happened, is happening now, or will happen in the future.

* You should have a textbox inside each timeblock, to allow entering events.

* There should be a button to the right of each timeblock. When this button is clicked, save the corresponding event to localstorage for that time slot.
* When loading the page, fetch all the stored data for each timeslot from localstorage and put those values in the corresponding textboxes for the given timeblocks.

## Grading Requirements
