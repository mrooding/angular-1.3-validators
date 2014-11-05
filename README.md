# angular-1.3-validators

## What is is?
A sample project that has a working implementation for the validators shown in <a href="http://blog.xebia.com" target="_blank">this blog post</a>.

The project consists of a simple NodeJS server used by the async validator and an AngularJS front-end that demonstrates the different validators described in the blog post.

## Requirements
- NodeJS

## How to start the application

### First off all
Before trying to start anything make sure to run the following commands for retrieving all the needed dependencies:
- npm install
- bower install

### Back-end
For starting the NodeJS server simply cd to the root of the project and run the following command:
node server.js

Note: make sure that port 3000 is available

### Front-end
Starting the front-end is as simple cd-ing to the root of the project and running the following command:
grunt serve