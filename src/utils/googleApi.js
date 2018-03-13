//import axios from "axios";

export default {

  isSignedIn: false,
  // Gets all stories
  isLoggedIn: function () {
    //   check islsigned in if not.... show a button to sign in.

    return true;
  },

  init: function (cb) {
    return new Promise((resolve, reject) => {
      require('google-client-api')().then((gapi) => {
        this.gapi = gapi;
        // Client ID and API key from the Developer Console
        var CLIENT_ID = '639223689097-jkc40rh6kfo4r7lranaq9kgnjhbqh55d.apps.googleusercontent.com';
        var API_KEY = 'AIzaSyB3-PZaoqLvKlGzno-cbJv4RXK-x751EJ0';

        // Array of API discovery doc URLs for APIs used by the quickstart
        var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
        // Authorization scopes required by the API; multiple scopes can be
        // included, separated by spaces.
        // var SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';
        var SCOPES = 'https://www.googleapis.com/auth/drive';
        // var authorizeButton = document.getElementById('authorize-button');
        // var signoutButton = document.getElementById('signout-button');

        /**
         *  On load, called to load the auth2 library and API client library.
         */

        // function handleClientLoad() {
        //     gapi.load('client:auth2', initClient);
        //   }

        console.log('initializing GAPI...');
        this.gapi.load('client', () => {
          this.gapi.client.init({
              apiKey: API_KEY,
              clientId: CLIENT_ID,
              discoveryDocs: DISCOVERY_DOCS,
              scope: SCOPES
            }).then(() => {
              console.log('GAPI Initialized.');
              this.gapi.load('auth2');
              //gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
              // Listen for sign-in state changes.
              if (this.gapi.auth2.getAuthInstance().isSignedIn.get()) {
                console.log('User is logged in');
                resolve()
              } else {
                console.log('User is not logged in');
                gapi.auth2.getAuthInstance()
                  .signIn()
                  .then(resolve)
                  .catch(reject);
              }
              //   authorizeButton.onclick = handleAuthClick;
            })
            .catch(reject);
        })

      }); //end require gapi
    })


  },

//method to grab email from google Oauth2 LH
  getEmail: function (cb) {
    return new Promise((resolve, reject) => {
    //here we will grab the email from googleOauth2 , for now hard coding it
    var userEmail = "";
    // return userEmail;
    // var user = this.gapi.client.auth2.getId();
    // console.log ("user details " + user);
    console.log("getting email from Oauth2");

    var request = this.gapi.client.drive.about.get({
      fields: "user"
    });

    request.execute(function (resp) {
      userEmail = resp.user.emailAddress;
      console.log('Current email address: ' + resp.user.emailAddress);
      resolve(userEmail);
    });


  })

    
  },

  logOut: function (){
    console.log('User is being logged out');
    this.gapi.auth2.getAuthInstance()
      .signOut()
    },
  
  
  
    saveFile: function (title, words) {
    return new Promise((resolve, reject) => {

      //start of create file
      // first grab user email info from Oauth2 login
      var user = this.gapi.client.auth2.getId();
      console.log ("user details " + user);
      var request = this.gapi.client.drive.about.get({
        fields: "user"
      });
      request.execute(function (resp) {
        const userEmail = resp.user.emailAddress;
        console.log('Current email address: ' + resp.user.emailAddress);

      });

      // set params for google api request to google drive
      // media = info about type of file being saved 

      var media = {
        mimeType: 'text/html',
      };
      // fileMetadata = info about how file should be created 
      var fileMetadata = {
        mimeType: 'text/plain',

        //   mimeType: 'application/vnd.google-apps.document',
      };
      //call the google drice API
      // const storyTitle = window.sessionStorage.getItem('id');
      const storyTitle = title; //to be reaplced with prop.title

      this.gapi.client.drive.files.create({
        name: storyTitle,
        // mimeType: 'application/vnd.google-apps.document',
        resource: fileMetadata,
        media: media,
        fields: 'id',
        params: {
          uploadType: 'media'
        },
      }).then((result) => {
        // if file created add content next using update function gdUpdateFile
        console.log('File created: ', result);
        console.log('File id: ', result.result.id);
        // const fileContent = window.sessionStorage.getItem('words');
        const fileContent = words; //to be replaced with prop.content
        this.gdUpdateFile(result.result.id, result.result.id, fileContent)
        .then(resolve);
      }).catch(reject);
    })


    // if google request for files is succesfull then send list to appendPre function for display on screen
  },

  gdUpdateFile: function (fileId, folderId, text, callback) {
    // set parameters for PUT request
    return new Promise((resolve, reject) => {

      const boundary = '-------314159265358979323846';
      const delimiter = "\r\n--" + boundary + "\r\n";
      const close_delim = "\r\n--" + boundary + "--";

      var contentType = "text/plain";
      var metadata = {
        'mimeType': contentType,
      };
      // eslint-disable-next-line 
      var multipartRequestBody = delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) + delimiter + 'Content-Type: ' + contentType + '\r\n' + '\r\n' + text + close_delim;

      // google drive PUT request to add content

      this.gapi.client.request({
        'path': '/upload/drive/v2/files/' + folderId + "?fileId=" + fileId + "&uploadType=multipart",
        'method': 'PUT',
        'params': {
          'fileId': fileId,
          'uploadType': 'multipart'
        },
        'headers': {
          'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody
      })
      .then(resolve)
      .catch(reject);

    });

  }

};
