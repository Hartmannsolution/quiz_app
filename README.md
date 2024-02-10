# Quiz app
## Purpose
- For utility methods used in the classroom:
1. To create a **quiz** (pair up students and let them discuss answers to questions)
  - The quiz can be created from a json file with an object with 2 propterties:
    - name
    - data: an array of objects with 2 properties:
      - question
      - answer
  - In the src/quizzes folder, there are a network.json file.
  - The file is read in main.jsx and the data object is passed to the Quizzes component and further by Outlet properties to the QuizDetails component.
2. To create groupes from students in the classroom
  - The list of students i pasted into the text area and the number of students per group is entered in the drop down.
3. To have a Break timer for the classroom
  - The timer can be set to 5, 10 or 15 minutes.
  - Run down to 0 and break time is over.

