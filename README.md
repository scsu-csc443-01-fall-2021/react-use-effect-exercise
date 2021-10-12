# React useEffect practice

In this exercise, you will persist data in local storage to save application data between browser sessions.

## Starter files

Clone this repository to your local environment and run the following from the _root_ directory of the project.

```bash
npm install
npm run start
```

Your starter files contain a React application which manages a list of users (this code was covered in lecture). Users may be added but never edited or deleted. User input is validated in the _AddUser_ component and if a validation error occurs the _ErrorModal_ component is show with the specific error. The user list data is managed in a stateful array in the _App_ component.

## Exercise: Manage user data in local storage

Currently the application does not persist user data between browser refreshes. Modify the _App_ component to read/write the user list from/to local storage in order to render previously entered data on page load.

The data should be loaded into the application after the component is first evaluated with useEffect. A function named _loadUsersFromLocal_ has been provided to read from local storage. Note that this code should only run _once_, after the component is first evaluated.

The data should also be written to local storage after the component is evaluated with _useEffect_. A function named _saveUsersToLocal_ has been provided to write to local storage. This code should be run whenever the _userList_ changes (but after the component is evaluated).

You will need two _useEffect_ invocations to solve this problem; one to load data from storage and another to write to storage. The order in which the invocations are defined is the order in which they will execute. In this problem, the ordering matters and it will affect the outcome.

There is no submission for this assignment. We will go over the solution during next lecture.
