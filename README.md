# angular-1.3-validators

## What is is?
A sample project that has a working implementation for the validators shown in <a href="http://blog.xebia.com" target="_blank">this blog post</a>.

The project consists of a simple NodeJS server used by the async validator and an AngularJS front-end that demonstrates the different validators described in the blog post.

## Requirements
- NodeJS

## How does it work?

### Directive: validate-with-callback

This is an async validator which will validate against a REST endpoint. Depending on the response code it will (in)validate the field.

Besides invalidating the field it will also use the response body to display a message to the user.

### Directive: validate-must-equal-to

This is a validator which will validate the content of 2 different inputs.
Add this directive to both input fields to have it function correctly.

## How to start the application

### First off all
Before trying to start anything make sure to run the following commands for retrieving all the needed dependencies:
- npm install
- bower install

### Back-end
For starting the NodeJS server simply cd to the root of the project and run the following command:

**node server.js**

Note: make sure that port **3000** is free

After starting the NodeJS server you can verify that it is working correctly by opening the following URL:

**http://localhost:3000/api/hello/marc**

The following response should be displayed:

**{msg: "hello marc"}**

### Front-end
Starting the front-end is as simple cd-ing to the root of the project and running the following command:

**grunt serve**

Note: make sure that port **9000** is free

## Test

To demonstrate how to test these directives I've added a spec for both directives which can be found in <project_root>/test/spec.

To execute the tests using grunt run the following command:

**grunt test**