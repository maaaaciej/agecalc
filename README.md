<h1>Age calculator</h1>

A quick application put together for /u/ToqKaizogu on Reddit.

The application lets users add people and their date of birth into a list. The user can then enter any date in the input field, and see the calculated age of each of the characters on any given date.

<i>9/8/20</i>

Initial commit, added a header and the inputs, as well as defining the architechture of the application.

<i>10/8/20</i>

Users are now able to add new people into the list, which stores the people in an array in state. Now need to calculate the age based on the input date, as well as storing the users in local storage.

<i>14/8/20</i>

Implemented the age calculation function. Had a real small-brain-moment trying to debug the function, only to find out that i misspelled birthday as "birtday", should have used typescript in this one. Now need to store the state of the application in state, as well as adding the option to delete people from the directory. Think I'll move the functions out to a util-file, so that my components don't get clogged up with functions.
