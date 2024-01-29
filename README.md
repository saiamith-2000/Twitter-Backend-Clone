# Requirements



- User should be able to create a post
    - [The post/tweet cannot be more than 250 chars]
    - [Every post/tweet will be having support for image upload]
   ( User profile):
    - User Name
    - Follower count
    - Authentication
    - Bio
    - Last 10 tweets from the user

    (Tweet):
    - content(250 char)
    - image upload
    - likes
    - comment tweets
    - Hashtag(#)
    

- Any post should be visible to all those users who follows the author
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- We can comment on a comment
- We can like any comment also
- Retweeting

- Pagination on tweets 
- User auth 

- Every tweet might be having a hashtag 


// https://how-to.dev/how-to-set-up-jest-for-es-module



`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

### Setup the project

 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add env variables
    ```
        PORT=<port number of your choice>
        SALT_ROUNDS=<add required number of rounds>
        JWT_SECRET=<add a secure secret key of your choice>
        JWT_EXPIRY=<how much time should the user key be valid>
        FLIGHT_SEVICE,BOOKING_SERVICE=<address of flight & booking service>
    ```
    ex: 
    ```
        PORT=3005
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev

 ```


 Docker setup:
 ```

 docker build -t twitter-backend .

 ```
 ```

 docker network create micro-net-twitter

 ```
 ```
 docker volume create twitter-backend-node-modules 

 ```
 ```

 docker run -it --init -p 3005:3005 --name=twitter-backend --network micro-net-twitter -v "$(pwd)":/developer/nodejs/twitter-backend -v twitter-backend-node-modules:/developer/nodejs/twitter-backend/node_modules twitter-backend:latest 

 ```