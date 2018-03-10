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
        <link rel="stylesheet" href="/css/aboutstyle.css" />

        {/* Import Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Gochi+Hand" rel="stylesheet" />
        {/* Import Google Icon Font */}
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        {/* Import materialize.css */}
	      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet"/>
      </head>
      <body>

        <div id="root">
     
        {props.children}
        </div>
        <div id="googledrive">
        </div>
        <script type="text/javascript" src="scripts/bundle.js" />
        { props.bluemixAnalytics ? <script type="text/javascript" src="scripts/analytics.js" /> : null }

        {/* Import jQuery before materialize.js */}
	      <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
	      {/* And then your bundled jsx */}
	      <script src="../public/scripts/bundle.jsx"></script>
      </body>
    </html>
  );
}

Layout.propTypes = {
  // children: PropTypes.object.isRequired, // eslint-disable-line
  bluemixAnalytics: PropTypes.bool.isRequired,
};
