var React = require('react');
 
var output = React.createClass({
  render: function() {
    return (
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css" />

          <script type='text/javascript'>var _sf_startpt=(new Date()).getTime();</script>

          <meta name="apple-itunes-app"  content="app-id=337710261" />

          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <meta name="apple-mobile-web-app-title" content="The Sun Fantasy Football Dream Team" />

          <link rel="shortcut icon" sizes="192x192" href="<?php bloginfo('template_url'); ?>/img/DreamTeamApp192.png" />
          <link rel="apple-touch-icon" sizes="192x192" href="<?php bloginfo('template_url'); ?>/img/DreamTeamApp192.png" />

          <meta name="google-site-verification" content="0vsV0IhGwv-9Ep3j-mzbqJvSxvoXJVC2QUJX7YQSDkU" />

        
        </head>
    );
  }
});
 
module.exports = output;