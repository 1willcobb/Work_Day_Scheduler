# Work_Day_Scheduler

A simple workday scheduler.

## My Task

My task was to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. 

This app will runs in the browser and features dynamically updated HTML and CSS powered by jQuery.


## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
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
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)



## Challange

I was challenged to make a code quiz that is a series of questions that must be completed in an alloted time. It was to capture High Scores entered and have a HS page.

In this project you'll be creating a daily planner for keeping track of tasks. The HTML is given to you for this, you just have to create the JavaScript.

You must complete the following tasks for this project:

* Show the current day at the top of the calendar (day and date, see gif for format)
* A series of timeblock elements must exist on the page (you can create these dynamically in JavaScript or place them manually on the page, either will work for now). These should match the spec you see below.
* Each timeblock has an hour associated with it. Take the current time into account and compare it to the hour of the timeblock. Give each timeblock a specific color depending on if it has already happened, is happening now, or will happen in the future.
* You should have a textbox inside each timeblock, to allow entering events.
* There should be a button to the right of each timeblock. When this button is clicked, save the corresponding event to localstorage for that time slot.
* When loading the page, fetch all the stored data for each timeslot from localstorage and put those values in the corresponding textboxes for the given timeblocks.

## How it works




## Extra Features

Added feature to add hours to the beginning and end of the day if you need to extend your work day. 


## What I Learned

Really enjoyed how how great jQuery is to simply things and DayJS is really cool for time keeping. 

## Demo Images

![demo-intro-page](./assets/intro.png)
![question-page](./assets/questions.png)
![high-score-page](./assets/HS.png)


## GitHub Repository

[repo](https://github.com/1willcobb/Work_Day_Scheduler)

## Live Site

[Password Generator](https://1willcobb.github.io/Work_Day_Scheduler/)