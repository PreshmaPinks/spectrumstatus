# Getting Started with Spectrum App

The project has both assignments:

Assignment A - spectrumA component contains the assignment A which makes GET call to the https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus endpoint.

User can get updated data by clicking on the update button.

Assignment B - spectrumB component contains the assignment B component which opens websocket connection to wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS to fetch live spectrum data.

When action is required, the action button appears on screen for user to take action. This calls the https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum endpoint. After action is done, the button disappears.

Both components use a common spectrumStatus component that displays the data in form of text boxes. SpectrumStatusService contains functions for both api calls. I have used the vanilla css.

Assignment C:

I suggest following improvements in the API endpoint:

1. Web socket and api endpoint can have the similar naming convention as one is capitalize and another is smallcase.

2. api/ActOnSpectrum endpoint can be POST call since it is creating a record in backend.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
