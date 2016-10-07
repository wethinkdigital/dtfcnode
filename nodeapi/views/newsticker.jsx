var React = require('react');


var NewstickerWrap = React.createClass({

  render: function() {

    return (

      <div className="grid edge">
        <div className="row">
          <div className="message-box">
            <a href="#" className="close">x</a>
            <div className="message">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
 
    );
  }

});

var Newsticker = React.createClass({

   render: function() {

     var tickerContent;
  
    if(this.props['ticker-link'] !== ''){
      tickerContent = <a href={this.props['ticker-link']}>{this.props['ticker-title']}</a>
    } else {
      tickerContent = <span>{this.props['ticker-title']}</span>
    }

    return ( 
      <NewstickerWrap>
      {tickerContent}
      </NewstickerWrap>
    )
   } 

});

 
module.exports = Newsticker;