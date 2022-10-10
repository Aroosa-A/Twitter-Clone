Chitter Challenge
=================

About the Project:
-------
![project picture](/image/chitter.png)
- This is a Full Stack Project, final challenge of Digital Futures Academy.
- This project is a Twitter clone for DF academy trainees so they can post and see each others posts by logging in.

Build With:
-------
**Framework/Libraries**
- Express Node.js
- React.js
- Mocha-Chai

**Languages**
- JavaScript
- CSS
- HTML

**DataBase**
- NoSql
- MongoDB

**Packages**
- Cors
- Body Parser
- DotEnv
- Express Validator
- Mongoose
- Axios
- React Router Dom

Getting Started:
-------
Steps to follow in order to run this project locally on your machine

1. Clone the repo

    You can copy project link from *green* button named as **Code**, link should be like this
    ```
    git clone http://github.com/your-username/Project-name.git
    ```
2. Install dependencies

    You can install them by writing this command in terminal or by right clicking on **Package.json** file and selecting *Install dependencies* of both folders
    ```
    npm install
    ```
3. Connect with MongoDB
    ```
    mongodb://localhost:27017/ChitterDB
    ```
4. Run servers

    Open integrated terminal from **Package.json** files from both *FRONTEND* and *BACKEND* folders and apply command
    ```
    npm start
    ```

5. Test

    You can run tests of both folders by opening **Package.json** file and running this command in terminal
    ```
    npm test
    ```
Problem Statements:
-----------------
### Problem
```
Make a twitter clone that will allow users to post messages to a public wall by logging in.
```

### User Stories

```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

### Solution

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

Project Review:
--------------

### Main takeaways

- Learned how to connect frontend with backend and also how to use Database
- I really enjoyed this Project because this was first full stack project i worked on
- I would like to use Bootstrap if i work on it again
- Also would like to add more functionalities for example option to mention other person in post, sending the notification through emails or replying back to other people posts.
