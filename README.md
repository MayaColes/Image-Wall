# Image Wall

Setup Instructions:

* Make sure you have both bundle and npm installed. This can be done through homebrew.

* This application uses PostgreSQL, so postgres must be installed. This can also be done through homebrew.
  
* Ruby 2.7.1 and Rails are also required to run this application.

* Navigate to the backend directory and run the commands:

  ```
  bundler install
  rails db:create
  rails db:migrate
  rails s -p 3001
  ```
  
* Navigate to the frontend directory and run the commands:

  ```
  npm install
  npm start
  ```
  
* Once both servers are started, go to http://localhost:3000 in your browser to see the application.

You will be required to make a user account to look at the rest of the website.
After you make an account, you can create posts using the "Create a post" button using .jpg or .png files.
After posting, these posts will be visible in the feed of any user using the website