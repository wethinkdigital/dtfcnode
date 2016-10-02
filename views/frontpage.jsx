var React = require('react');
var Head = require('./partials/head');
var Header = require('./partials/header');
var Footer = require('./partials/footer');
 
var output = React.createClass({
  render: function() {
    return (
      <html>
        <Head></Head>
        <Header></Header>

        <body>Some content</body>

        <Footer></Footer>
      </html>
    );
  }
});
 
module.exports = output;