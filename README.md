# POCApp

a [Sails](http://sailsjs.org) application

To run this app,
1. install NodeJS and npm
2. run 'npm install -g sails'
3. go inside the app and run 'npm install'
4. run 'mongod' in a different tab
5. run 'sails lift' to run the server

The server runs by default on port 1337

'sails lift' runs the server without auto reload on changes. So you will have to kill and start the app everytime you make a change.
To run the app through auto reload on changes, use 'nodemon' (run - 'npm install nodemon')

To check if the server is running - go to 'localhost:1337' in the browser.

1. All the database config is done in config/connection.js
2. All the routes are defined in config/routes.js
3. All the APIs are written in api/controller/POCController.js
4. All API to DB interactions are written in api/model/POC.js (Each model represents a collection in the DB. Right now the collection is called POC. You will get it once you start the server)
5. All CORS and related config is in config/cors.js

Currently there are 4 APIs -
1. GET /data - this fetches all the data in that collection
2. POST /data - pass anything in the body and you can create that data object in that collection.
3. PATCH /data - updates the current data based on the mongo id that you get in 'create' or 'get'
4. DELETE /data - deletes the object from collection based on mongo id that you get in 'create' or 'get'
