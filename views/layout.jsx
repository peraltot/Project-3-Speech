import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Row, Col } from 'react-materialize';


// import { Header, Jumbotron } from 'watson-react-components';
// eslint-disable-mnext-lin =
const DESCRIPTION = 'Using IBM API to provide speech into text.';

export default function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>ChatterDoX</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />

        {/* Import Google Icon Font */}
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        {/* Import materialize.css */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet" />
      </head>
      <body>
        {/* <Header
          mainBreadcrumbs="Speech to Text"
          // mainBreadcrumbsUrl="https://www.ibm.com/watson/services/speech-to-text/"
          // subBreadcrumbs="Speech to Text Demo"
          // subBreadcrumbsUrl="https://speech-to-text-demo.mybluemix.net"

        /> */}
        {/* <Jumbotron
          serviceName="Speech to Text"
          // repository="https://github.com/watson-developer-cloud/speech-to-text-nodejs"
          // documentation="https://console.bluemix.net/docs/services/speech-to-text/getting-started.html"
          // apiReference="http://www.ibm.com/watson/developercloud/speech-to-text/api"
          // version="GA"
          // serviceIcon="/images/stt.svg"
          // startInBluemix="https://console.bluemix.net/registration?target=%2Fdeveloper%2Fwatson%2Fcreate-project%3Fservices%3Dspeech_to_text%26action%3Dcreate%26hideTours%3Dtrue%26cm_mmc%3DOSocial_Tumblr-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3DOSocial_Tumblr-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409"
          description={DESCRIPTION}
        /> */}

        
          <script src="https://cdn.auth0.com/js/lock/11.2/lock.min.js"></script>
          
    <script>
    // Decode utf8 characters properly
    var config = JSON.parse(decodeURIComponent(escape(window.atob('@@config@@'))));
    config.extraParams = config.extraParams || {};
    var connection = config.connection;
    var prompt = config.prompt;
    var languageDictionary;
    var language;
    
    if (config.dict && config.dict.signin && config.dict.signin.title) {
      languageDictionary = { title: config.dict.signin.title };
    } else if (typeof config.dict === 'string') {
      language = config.dict;
    }
    var loginHint = config.extraParams.login_hint;
    
    var lock = new Auth0Lock(config.clientID, config.auth0Domain, {
      auth: {
        redirectUrl: config.callbackURL,
        responseType: (config.internalOptions || {}).response_type ||
          config.callbackOnLocationHash ? 'token' : 'code',
        params: config.internalOptions
      },
      assetsUrl:  config.assetsUrl,
      allowedConnections: connection ? [connection] : null,
      rememberLastLogin: !prompt,
      language: language,
      languageDictionary: languageDictionary,
      theme: {
        //logo:            'YOUR LOGO HERE',
        //primaryColor:    'green'
      },
      prefill: loginHint ? { email: loginHint, username: loginHint } : null,
      closable: false,
      // uncomment if you want small buttons for social providers
      // socialButtonStyle: 'small'
    });

    lock.show();
  
  </script>
    


        <div id="root">


          {props.children}
        </div>
        <div id="googledrive">
        </div>

        <script type="text/javascript" src="/scripts/bundle.js" />
        {props.bluemixAnalytics ? <script type="text/javascript" src="scripts/analytics.js" /> : null}

        {/* Import jQuery before materialize.js */}
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        {/* And then your bundled jsx */}
      </body>
    </html>
  );
}

Layout.propTypes = {
  // children: PropTypes.object.isRequired, // eslint-disable-line
  bluemixAnalytics: PropTypes.bool.isRequired,
};
