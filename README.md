Photo Blog App
_________________________________________________________________________________
A Single Page Application using react for fetching users using JSONPlaceholder as the backend. Redux used as state management for user list. The corresponding posts, comments and photo album were fetched according to the user-id.

Getting Started

This project was bootstrapped using create-react-app

Prerequisites

Bootstrap for styling components
Redux Redux-thunk for state management while fetching user list
Prop-Types for default props and assignment

Project Description

The application consists of User, Users and Header as primary components
User component is mapped in Users Component
As state is required by User and Users components, a central store is created to handle the state changes using Redux.
Action and reducers are part of the store
Corresponding post, comment and photo-albums are fetched for user-id. They are managed in their own component and has their own state.
The state is not shared between post, comment and photo-albums, so state is managed inside the component.
User details were displayed using down-arrow and toggle state is managed.

Deployment:
The App can be viewed at the below url:
https://photo-client-blog.herokuapp.com/

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
