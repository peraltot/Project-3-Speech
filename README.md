# ChatterDoX 

Speech to text browser application designed to be used for children's reading lab lessons during school and at home. Students can record themsevles reading stories out loud to practice literacy skills. Their speech is converted to written text and displayed on the screen in real time. The app provides a story management system for students to download their stories to their local devices or save their stories to our database to be reviewd on the site's `My Stories` page. From this page students are given the options to delete unwanted stories, save them to their GoogleDrive accounts, or email them to a specified recipient.

The Watson Speech to Text API converts audio voice into written text. This Speech to Text service uses IBM's speech recognition capabilities to convert speech in multiple languages into text. The transcription of incoming audio is continuously sent back to the client via JSON objects with minimal delay, and it is corrected as more speech is heard. The service is accessed via a WebSocket interface; a REST HTTP interface is also available. Node.js is also used to provide the browser client's authentication token.

View on Heroku:
https://pure-caverns-32781.herokuapp.com/


## Run the App Locally

First clone this repository:
```
https://github.com/peraltot/Project-3-Speech.git
```

### Prerequisites:
#### Node.js and npm
Go to the Node.js site:  https://nodejs.org/en. Click the download button, and run through the installation file.
To check if you have Node.js installed, run this command in your terminal:
```
node -v
```
To confirm that you have npm installed you can run this command in your terminal:
```
npm -v
```

### Installing Node Packages:
In the terminal execute the following command:
```
npm install
```

### DB info:

Run `mongod` in a Terminal session:
Run `mongo` in a seperate Terminal session 

First remove the db so it can be re-created auto within our app

use Stories = will display (switched to db Stories)
db.dropDatabase(); = { "dropped" : "Stories", "ok" : 1 }

In the teriminal run `yarn start` which runs the script inside the start field of the script field in package.json
  
----

### Directory structure
```none
.
├── app.js                      // React Router
├── config                      // Express configuration
│   ├── express.js
│   └── security.js
├── models                      // Mongoose schema defined here for the Mongo db
├── routes                      // Api routes
├── manifest.yml
├── package.json
├── public                      // Static resources
├── server.js                   // Entry point
├── test                        // Tests
└── views                       // Watson react components
│   └── layout.js               // Main file - includes cdn libraries, stylesheets, javascript files
└── src                         // React components
```

----

## How to start your own speech to text app using the Watson API

1. You need a Bluemix account. If you don't have one, [sign up][sign_up].

2. Download and install the [Cloud-foundry CLI][cloud_foundry] tool if you haven't already.

3. Edit the `manifest.yml` file and change `<application-name>` to something unique. The name you use determines the URL of your application. For example, `<application-name>.mybluemix.net`.

  ```yaml
  applications:
  - services:
    - my-service-instance
    name: <application-name>
    command: npm start
    path: .
    memory: 512M
  ```

4. Connect to Bluemix with the command line tool.

  ```sh
  cf api https://api.ng.bluemix.net
  cf login
  ```

5. Create and retrieve service keys to access the [Speech to Text][service_url] service:

  ```none
  cf create-service speech_to_text standard my-stt-service
  cf create-service-key my-stt-service myKey
  cf service-key my-stt-service myKey
  ```

6. Create a `.env` file in the root directory by copying the sample `.env.example` file using the following command:

  ```none
  cp .env.example .env
  ```
  You will update the `.env` with the information you retrieved in steps 5.

  The `.env` file will look something like the following:

  ```none
  SPEECH_TO_TEXT_USERNAME=<username>
  SPEECH_TO_TEXT_PASSWORD=<password>
  ```

7. Install the dependencies you application need:

  ```none
  npm install
  ```

8. Start the application locally:

  ```none
  npm start
  ```

9. Point your browser to [http://localhost:3000](http://localhost:3000).

10. **Optional:** Push the application to Bluemix:

  ```none
  cf push
  ```

After completing the steps above, you are ready to test your application. Start a browser and enter the URL of your application.

            <your application name>.mybluemix.net


For more details about developing applications that use Watson Developer Cloud services in Bluemix, see [Getting started with Watson Developer Cloud and Bluemix][getting_started].


## License

  Sample code is licensed under Apache 2.0.
  
## Authors

**Tom Peralto** (https://github.com/peraltot)
**Emma Pankey** (https://github.com/emmapankey)
**Louise Hayes** (https://github.com/louise-hayes)
**Mike Sherman** (https://github.com/msherman83)
**Connor Melnick** (https://github.com/connorjohnmelnick)
