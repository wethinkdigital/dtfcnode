    var Post = React.createClass({


        render: function(){

            var PostStyle = {
                height: 280
            }

            var PostImageStyle = {
                width: '100%',
                height: 190,
                backgroundImage: 'url('+this.props.postData.featured_image[0]+')',
                backgroundSize: 'cover'
            }

            return (
                <div className="col-sm-6">
                    <div className="card" style={PostStyle}>
                        <a href={this.props.postData.link} className="imagelink">
                            <div style={PostImageStyle} className="card-img-top"></div>
                        </a>
                        <div className="card-block">
                            <h6 className="card-title">
                                <a href={this.props.postData.link} className="title">
                                    {this.props.postData.title.rendered}
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
            );
        }

    });

    var PostsLoader = React.createClass({

        getInitialState: function() {
            return {
                show: this.props.show,
                allPosts: []
            }
        },

        componentDidMount: function() {

            var cachedAllPosts = JSON.parse(localStorage.getItem('allPosts'));
            var cachedAllPostsTs = JSON.parse(localStorage.getItem('allPostsTs'));
            var useCache = false;

            if(typeof cachedAllPosts != 'undefined' && typeof cachedAllPostsTs != 'undefined'){

                var now = new Date().getTime().toString();
                var cacheAge = now - cachedAllPostsTs;

                if(cacheAge < 1000 * 3){
                    useCache = true;
                }
            }

            if(useCache){

                this.setState({allPosts: cachedAllPosts});

            } else {

                jQuery.ajax({
                    url: 'https://www.dreamteamfc.com/c/wp-json/wp/v2/posts?per_page=54',
                    dataType: 'json',
                    success: function(data) {
                        this.setState({allPosts: data});

                        localStorage.setItem('allPosts', JSON.stringify(data));
                        localStorage.setItem('allPostsTs', new Date().getTime());

                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error(status, err.toString());
                    }.bind(this)
                });

            }

        },

        showMore: function(evt) {
            this.setState({
                show: parseInt(this.state.show) + parseInt(this.props.show)
            });
        },

        render: function() {

            return (
                
                <div className="posts row">
                {this.state.allPosts.slice(0,this.state.show).map(function(item) {
                   return <Post key={item.id} postData={item}/>;
                })}
                    <button className="btn btn-primary"  onClick={this.showMore} >More!</button>
              </div>

            );


        }

    });

    