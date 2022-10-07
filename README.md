Chitter Challenge
=================

Instructions/Explanations:
-------
* Have added data files in data folder in *BACKEND* folder, for tests i have created objects within test files as mock objects and used them for tests,could have created separate file for objects and imported them in test file which i did try but for some reasons it was giving me errors and i didn't had much time to spend on fixing it, also could have used beforeEach on models for removing existing data from database to test again. I wasn't sure if we are getting data from users how we can use mock data files especially when they have list of objects without object names, i have used mock data for each functionality e.g. login etc but from myself not from files, il learn more and make sure next time i use mock data from files.

* All acceptance criteria and additional requirements are done.

* Use command  **npm i**  to install all dependencies, command  **npm start**  for running application and  **npm test**  for testing.
* Used express framework of node js in back-end and react in front-end.
* Node packages=> **body-parser** for handling request body, **cors** for connecting back-end and front-end servers, **dotenv** for setting development and test environments separate, **express-validator** for validating the data coming from front-end before proceeding for request, **mongoose** to make schemas and to translate the code and its representation from MongoDB to the Node. js server, **chai** is a testing library which is used with **mocha** framework for asynchronous testing.
* React packages=> **axios** for sending asynchronous  http requests to business layer, **moment** to format the date and time, **react-router-dom** for setting up the routes.
* Trainee cannot sign in without entering all details in e.g. email, password, name and a username.
* Home page is the first page which appears when u run the application and can be seen without even logging in, this page displays all posts.
* In chitterUsers.js first i tried to do both checks using findOne method just one time but it was not working correctly for both scenarios, then i used findOne method two times in post request, once to check if database is empty then it will automatically add one instance without looking for specific user from database and second time i have used findOne method to check if email or userName already stored in database then don't store them again. 
* All posts display the name and userName of their writer along with date of post.
* Components Home, Login, SignUp have two states in them one to get data and store it in database and other to get the message from business layer and display it on screen
* App component have four states 
* **Data** to fetch posts from database and pass them to Home component to display them on screen.
* **change** this have used as dependency for Data state so data state stay updated every time new post come, this state is set by MakePost component because that component is responsible for getting new post and sending it to business layer
* **user** this state is set by Login component so whenever a user logs in this state gets that user's data which eventually set the home page customized for user and also makes MakePost component available, without logging in no one can make posts
* **loggedIn** this state is set by Login component this is used as extra check to make sure user have logged in because on some points just user state was not giving desired output
* Did try to test states and async methods but tey were not passing because don't understand act method

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

Presentation Layer=> front-end with react- with some heading a text box and a button to post data in
Business Layer=> back-end with node(express)- which gets post request to access persistance layer(mongoDb) to get data - need schema 
Persistance Layer=> setup mongoDB for both above layers to get data and store

```


```
As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

Presentation layer=> need a UI for displaying all posts 
Business layer=> need to get data from database and pass data in a way that latest post is on top of page
Persistance layer=> need get req to get data from mongoDB and give it to business layer which will eventually pass it to presentation layer to display it
```


```
As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

Presentation layer=> should show timing with postBody=> have used moment react library to display in customize format
Business layer=> should have date =>have used Date.now in data model to set the post date to current date and time
Persistance layer=>  should store date in database
```

```
As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

Presentation layer=> need a sign up page with post request taking all data to business layer
Business layer=> schema for user which checks if person have desired info or not,then need to check if user info already exist it should not add new instance of user in database
Persistance layer=> collection for user which gets data and store it in database
```

```
As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

Presentation layer=> needs a login page and post request which takes data to business layer
Business layer=> should connect with same schema which we created for signing up, need to check if user is in database if not then send message back saying you need to sign in before logging in, if its already signed in then we can simply log him in and show customize home page and a page for making posts
Persistance layer=> collection will be same which used for signUp
```

```
As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter

presentation layer=> show a button in header which is connected to login page and also change state login to log out when clicked
```

