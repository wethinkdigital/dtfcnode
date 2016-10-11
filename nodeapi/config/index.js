var config = {

    els: {
        prod: 'https://www.dreamteamfc.com/c/wp-json/wp/v2/',
        uat: 'https://www.uat-dreamteamfc.com/c/wp-json/wp/v2/',
        local: 'http://dtfc/c/wp-json/wp/v2/'
    },

    getConfig: function(k,v) {
        return this.els;
    },

    setConfig: function() {
        this.wrongels[k] = v;
    },

    getWpRoot: function(source){
        return this.els[source];
    }

};

module.exports = config;