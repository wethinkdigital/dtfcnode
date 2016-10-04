var PageHero = React.createClass({

	getInitialState: function(){
		return {
			pagedata: {
				title: {
					rendered: 'Hero title'
				}
			},
			slug: this.props.slug
		}
	},

	// componentDidMount: function(){
	// 	$.ajax({
	// 		url: 'https://www.dreamteamfc.com/c/wp-json/wp/v2/pages?filter[name]='+this.state.slug,
	// 		dataType: 'json',
	// 		success: function(data) {
	// 		   this.setState({pagedata: data[0]});
	// 		}.bind(this),
	// 		error: function(xhr, status, err) {
	// 		   console.error(status, err.toString());
	// 		}.bind(this)
	// 	});

	// },

	render: function(){

		return (
			<div className="col-sm-12">
				<h1>{this.state.pagedata.title.rendered}</h1>
			</div>
		);
	}


});