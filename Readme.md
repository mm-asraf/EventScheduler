# Event Scheduler App

## tech stack used

- expressjs,nodejs,mongodb
- node_modules: node-cron

## About

- Event Scheduler is an web application which is basically used to emit or schedule event based on your input of scheduling time and date.This is an simple application to demonstrate how a scheduling events works on nodejs application.It just an idea of or a prototype of similar type of large application which we can consider this logic to implement on production based application.

## framework

- before i tell the choice of framework is used, I would like to walk you through nodejs. so basically nodejs is basically based on single-threaded event-driven mechanism and have asynchronous behaviour which makes nodejs powerful backend library to make dynamic and hybrid web application.
  it has some inbuilt core modules which makes nodejs to stand different in markets

- I Choose expressjs framework, because as far as i started working with express i found that it is really simple to create restful api,flexible,minimalism that means i dont have to write too much code.
- And one thing, express have wide range of external packages and already built by someone else and you can use this packages or node_modules to build your application.for example:- body-parser,express-session etc.
- you can make middleware so that you can make changes in your routes. you can multiple middleware for diffrent purpose like if you want to authenticate user for next process or want to block in some part of application you can use or make your own middleware to achieve this.
- using express its easy to create RESTful api's.
- Express also supports MVC like architechture which is a modern way of developing application.
- Express also supports RDBMS and Nosql Databases.

# My approach of solving this problem

- As I understand the question is that i have to use a nodejs scheduling method to schedule events
  and i need to show time in hrs.min.sec and for date dd.mm.yyyy. so as far i understand the quesions
  is that i need to schedule an event using express restful api called post api.

- first step: at first i setup my database so that whenever we schedule an event using post req it schedule an event and it get saved in the db.

- second step: then i used an node package called node-cron which basically used to schedule event.
  node-cron is an package to schedule tasks so that it can run in at specific times or intervals.
  it is most suitable for scheduling repitive tasks such email notifications.

- third-step: then i build an post route after that i wrote the logic of scheduling task so how i do this so basically i created an variable named b where i stored my inbuild js date function. so that i used that variable to called different date methods fo time and date. after that i require my node-cron package to schedule my task according to user how he/she wants to set scheduler so that an event gets set and called later.so basically i used my current time as initial value and set the corresponding value to after how many sec/min you want to schedule the task and will be called later.
  then i used template literals to show in the console.whenever a schedule will be post.and whenever a schedule is posted a message will be shown that event schedule successfully.

- last-step: at the last step i make a separate file called index where my all middleares ,databases connection and route logics is written.

# Problems I faced and how I Solved them

- during building this application at first i didnt get what questions is really asked but somehow i understand i have to use some event based method or package to go through the problem.
- and like i was trying to achieve vanilla js but later i read again the quesion then understand what exantly the question is asked;
- after getting the problem and thinking about the problem. like i was trying to build schema for particular text string or event name or set time. but didnt understand like what was the problem asked to me. so finally i comeup with the approach of scheduling a task using node-cron package.
- i was trying diffrent diffrent approach to achieve the solution like how to show date time and should be changealbe through user.
- so after figuring out the problem that to schedule event ,finally i used this approach to demonstrate this problem.
