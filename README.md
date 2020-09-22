# Random Beer Generator!

An application that uses the BreweryDB API to generate random beers, as well as associated information about their Breweries.

## Project Brief

"You are to develop a very simple web app that consists of two screens. The main screen should display a random beer. You should be able to click on the beer's brewery name to view more information about that brewery. This screen should display more information about the selected beer’s brewery - brewery name, description, label and start year. Only beers with a brewery should be displayed."

### Key Features

 - On initial load, displays a randomly generated beer (with name, label, and description).
 - Provides the user with a button to randomly generate a new beer. 
 - Routing to and from the Home page to a Details page which lists information about the current beer's brewery.
 - Session caching to allow for faster page transitions between routes, as well as minimising API requests.
 - API Key secured through use of environment variables.
 - Dynamic styling using **styled-components**, with consistent theming throughout the application.
 - Comprehensive unit testing of API requests using jest and the mws library
 - Consistent error handling with with simple snackbar implementation to highlight any active errors.



 ## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  