import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  json = {
    // title: "Survey",
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>. </h4>",
    pages: [
      {
        name: "page1",
        elements: [
          {
            type: "html",
            name: "question1",
            html: "You are about to start quiz by survey. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
          }
        ]
      },
      {
        name: "page2",
        elements: [
          {
            type: "radiogroup",
            name: "build-1",
            title: "Build Question 1",
            correctAnswer: "Correct",
            choices: [
              "Incorrect",
              "Incorrect",
              "Correct",
              "Incorrect",
              "Incorrect"
            ]
          }
        ]
      },
      {
        name: "page3",
        elements: [
          {
            type: "radiogroup",
            name: "build-2",
            title: "Build Question 1",
            correctAnswer: "Correct",
            choices: [
              "Incorrect",
              "Incorrect",
              "Correct",
              "Incorrect"
            ],
            choicesOrder: "random"
          }
        ]
      },
      {
        name: "page4",
        elements: [
          {
            type: "radiogroup",
            name: "test-1",
            title: "Test Question 3",
            correctAnswer: "Correct",
            choices: [
              "Incorrect",
              "Correct",
              "Incorrect",
              "Incorrect"
            ],
            choicesOrder: "random"
          }
        ],
        maxTimeToFinish: 15
      }
    ],
    showProgressBar: "bottom",
    startSurveyText: "Start Quiz",
    firstPageIsStarted: true,
    maxTimeToFinish: 25,
    maxTimeToFinishPage: 10,
    showTimerPanel: "top"
  }
}
