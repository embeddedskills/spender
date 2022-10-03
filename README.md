Getting Started
This project is a React.js-driven demo app for keeping track of your income and expenses.

It receives the data from the input forms and stores it on the browser's local storage.

It then retrieves it and, through a custom hook, filters it according to the year and/or type of income/expense, and shows the equivalent results.



The project is built on React.js, using:
-create-react-app for initialization,
-Redux/toolkit for state management and data fetching,
-SASS for automated and nested styling.


A legacy code can be found inside the repository in the "backup" folder, with older versions of the app where useContext was being used for state management. It was later replaced by Redux/toolkit for better scalabality and technology testing.


To install this app, in the project directory run:


npm install
Available Scripts
In the project directory, you can run:


npm start
Runs the app in the development mode.

Open http://localhost:3000 to view it in your browser.


The page will reload when you make changes.

You may also see any lint errors in the console.


npm run build
Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.


The build is minified and the filenames include the hashes.

Your app is ready to be deployed!


See the section about deployment for more information.


Learn More
You can learn more in the Create React App documentation.


To learn React, check out the React documentation.

