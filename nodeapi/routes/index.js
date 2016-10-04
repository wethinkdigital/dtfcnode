var WpAPI = require( 'wordpress-rest-api' );
var wp = new WpAPI({ endpoint: 'https://www.dreamteamfc.com/c/wp-json' });

module.exports = {
    frontpage: function(req, res){

        wp.pages().filter('name','home').then(function( data ) {
            console.log(data[0]);
            res.render('frontpage', {data: data[0]});
        }).catch(function( err ) {
            throw err; 
        });

    },

    single: function(req, res){
        res.render('single');
    }
};