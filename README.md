DrupalCamp Ionic App
=====================

A mobile hybrid application that consumes Drupal Services REST API

## Using the app locally

In order to run the app locally you'll need to do next:

**1) **Install [Node.js](http://nodejs.org/) first, then install the following packages using NPM:

* Bower and Gulp

		npm install -g bower gulp

* Cordova and Ionic
	
		npm install -g cordova ionic
		
		
		
		
		
**2)** Install the project dependencies:

* Run the following command at the root of this project to install project dependencies:

		npm install ./

**3)** Now you can run the app locally at the browser or mobile device:

* To run it at a local browser, run the following commands

		$ gulp sass
		$ ionic serve
		
* To run it on a device emulator, for example an iOS emulator, you'll need to run:

		$ ionic build ios
		$ ionic emulate ios
		
		

The app consumes the Drupal REST services created at the following server: 

#### *http://drupalcamp.kevinblanco.io/?q=api/* * ####





		



