    var CatPost = React.createClass({


        render: function(){

            var PostStyle = {
                height: 280
            }

            var PostImageStyle = {
                backgroundImage: 'url('+this.props.postData.featured_image[0]+')',
            }


            return (
                <div className="top-post-box">
                    <article className="post">
                        <div style={PostImageStyle} className="imgsection">
                            <a href={this.props.postData.link} className="imagelink" ></a>
                        </div>
                        <div className="textsection">
                            <div className="catname">A category</div>
                            <h2>
                                <a href={this.props.postData.link} className="title">
                                    {this.props.postData.title.rendered}
                                </a>
                            </h2>
                        </div>
                        <div className="cb"></div>
                    </article>
                </div>
            );
        }

    });

    var CatPosts = React.createClass({

        getInitialState: function() {
            return {
                show: this.props.show,
                category: this.props.category,
                CatPosts: []
            }
        },

        componentDidMount: function() {

            var cachedCatPosts = JSON.parse(localStorage.getItem('CatPosts'));
            var cachedCatPostsTs = JSON.parse(localStorage.getItem('CatPostsTs'));
            var useCache = false;

            if(typeof cachedCatPosts != 'undefined' && typeof cachedCatPostsTs != 'undefined'){

                var now = new Date().getTime().toString();
                var cacheAge = now - cachedCatPostsTs;

                if(cacheAge < 1000 * 3){
                    useCache = true;
                }
            }

            if(useCache){

                this.setState({CatPosts: cachedCatPosts});

            } else {

                jQuery.ajax({
                    url: 'http://dtfc.wethinkdigital.co.uk/api/category/'+this.state.category,
                    dataType: 'json',
                    success: function(data) {
                        this.setState({CatPosts: data});

                        localStorage.setItem('CatPosts', JSON.stringify(data));
                        localStorage.setItem('CatPostsTs', new Date().getTime());

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
                {this.state.CatPosts.slice(0,this.state.show).map(function(item) {
                   return <CatPost key={item.id} postData={item}/>;
                })}
                    <button className="btn btn-primary"  onClick={this.showMore} >More!</button>
              </div>

            );


        }

    });

    