
# Budget Tracker

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Developer](#developer)
  
## Description
The Budget Tracker is web app for tracking income and expenses. The app functions offline by using both IndexedDB and a Service Worker. The app also uses a web app manifest to allow for its installation as a progressive web application (PWA). In order to provide a custom icon for the PWA on an iOS device, it also uses a "link" tag with the "rel" attribute set to "apple-touch-icon" in the html header.
## Installation
In order to install and use this application locally, you will need to have [MongoDB](https://www.mongodb.com/try/download/community) installed.
1. Clone the [GitHub repo](https://github.com/e-p-n/budget-tracker). 
2. Navigate to the directory of the clone. 
3. Run "npm install". 
4. Run "npm start" to launch the server.

## Usage
To try the app without installing a local copy, you can try it out on [Heroku](https://damp-gorge-12002.herokuapp.com/).

1. Enter a transaction name in the first text box and the amount in the second.
2. Press either "+ Add Funds" if the transaction is a source if income or "- Subtract Funds" if it is an expense.
3. The tracker will add the transaction to a list of transactions and will update the graph.
4. After visiting the site for the first time, you can access the app while it is offline. 
5. If you lose connectivity while using the app, you can continue to add transactions. They will be stored locally in the browswer's IndexedDB databse and then added to the online app when you reestablish an internet connection. 
6. If you start the app without an internet connection, you will not be able to see your transaction history, but you can still load the app fro the cache becasue of the service worker and add new transactions. When you have reestablished an internet connection, your transactions will be added to the online database and the page will reload to include the entire transaction history.
7. The app can be used as a PWA.
    * In Google Chrome for desktop, click the install icon ( ![pwa-icon](./public/icons/google-pwa.png) ). The PWA will install and aunch automatically
    * To install on an iOS device, after loading the page in Safari, press the share icon ( ![share-icon](./public/icons/ios-share-icon.png) ) and then select the "Add to Home Screen" button.
    * To install on an android device, load the page in chrome and then press the kebab menu icon ( ![kebab-icon](./public/icons/kebab-icon.png) ) and select "Add to Home Screen".

## Developer
The Budget Tracker's offline and PWA capabilities were developed by Eric Normann, a student in the Full Stack Developer Coding Bootcamp at the University of Toronto.
If you have questions, please visit my [GitHub](http://github.com/e-p-n) page or [email](mailto:eric.n@me.com?subject=Question%20regarding%20Budget%20Tracker) me.