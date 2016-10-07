var React = require('react');
var Head = require('./partials/head');
var Header = require('./partials/header');
var Footer = require('./partials/footer');

var WpAPI = require( 'wordpress-rest-api' );
var wp = new WpAPI({ endpoint: 'http://dtfc/c/wp-json' });
 
var output = React.createClass({

  getinitialState: function(){
    return {
      postTitle: '',
      postContent: ''
    }
  },
  
  getPostContent: function(){

  },

  componentDidMount: function(){

        wp.posts().filter('name',req.params.name).then(function( data ) {
            this.setState.postTitle = data[0].title.rendered;
            this.setState.postContent = data[0].content.rendered;
        }).catch(function( err ) {
            //throw err; 
        });

    
  },

  render: function() {
    return (
      <html>
        <Head></Head>
        <body>
          <Header></Header>
          <div className="content"
          dangerouslySetInnerHTML={{__html: this.state.postContent}} />

          <Footer></Footer>
        </body>
      </html>
    );
  }
});
 
module.exports = output;