 ## NoSQL Social Network API Back-End
 ![Github License](https://img.shields.io/badge/license-MIT-brightgreen)
  

  ## Description

  This is an example API routing for a Social Networking site where users share their thoughts, react to friend's thoughts, and create a friend list. Routing is done by Express.js. The NoSQL database is MongoDB, with the Mongoose ODM. It also uses a custom helper utility for date handling.

  This example API is designed on NoSQL database, which is suited for large amounts of unstructured data, like those found on social media sights, where post ('thoughts') have large user to user interactions ('reactions' and 'friends' and 'thoughts').

  For this API, when starting the server, they can perform GET routes for users and their thoughts.
  Each route has GET routes for IDs of users and thoughts, as well as POST, PUT, and DELETE routes, which can be tested in whichever route testing application/method. In addition to users and their thoughts, reactions under the thoughts route can be tested for POST and DELETE, and friends can be tested under user routes for POST and DELETE.
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Technologies](#technologies)
  * [Questions](#questions)
  * [License](#license)

  ## Installation

  1. To install just clone this repo:
  ```
  git clone git@github.com:hculp/social-network-api-nosql.git
  ```
  2. Install package.json packages with npm:
  ```
  npm i
  ```

  ## Usage

  To get started seed the database by running ```npm run seed```. You can also create your own seeding data. Then, run ```npm run start``` to start the api server.
 
  Once the database is seeded, you can test the api routes and methods. Make sure to follow the exact routing outlines in user/thought routes.
  
  Here is a link to a demo [video](https://drive.google.com/file/d/1RT7yDYS0ESxTvSebbe5b0RE_7hwfq8XS/view).
  ## Contribution

  Contribution falls under open MIT license.

  ## Technologies

  This back-end app uses Node.js, Express.js, MongoDB, Mongoose, and JavaScript.
  
  ## Questions

  Send any questions or feedback to the following contacts:

  * GitHub: [https://github.com/hculp](https://github.com/hculp)
  * Email: [howacul@gmail.com](mailto:howacul@gmail.com)
  
  ## License

    Copyright (C) 2023 Houston Culpepper.     
    
    Distributed under the MIT License.
  [Link to MIT license](https://choosealicense.com/licenses/mit)