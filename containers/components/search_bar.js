import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = { term : ''};

	}

	render() {
		return( 
			<div className="search-bar">
				<div className="search">
					<span class="fa fa-search"></span>
					<input
						placeholder="Search videos"
						value={this.state.term}
						onChange={ event => this.onInputChange(event.target.value)}/>
				</div>
			</div>

		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);

	}

}

export default SearchBar;