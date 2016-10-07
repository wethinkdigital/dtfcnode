var React = require('react');
var Head = require('./partials/head');
var Header = require('./partials/header');
var Footer = require('./partials/footer');
 
var output = React.createClass({

  getinitialState: function(){
    return {
      pageTitle: '',
      pageContent: ''
    }
  },
  
  render: function() {
    return (
      <html>
        <Head></Head>
        <body>
          <Header></Header>
          Some content {this.props.data.id}

          <Footer></Footer>
        </body>
      </html>
    );
  }
});
 
module.exports = output;