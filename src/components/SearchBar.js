import React from 'react'

class SearchBar extends React.Component{

	state = {term : ''}

	handleChange = (event) => {
		this.setState({term : event.target.value})
		//console.log(this.state.term)
	}

	onFormSubmit = (event) => {
		event.preventDefault()
		const SearchTerm = this.state.term
		this.props.onFormSubmit(SearchTerm)
	}

	render(){
		return(
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search </label>
						<input 
							type="text" 
							onChange={this.handleChange} 
							value={this.state.term}
						/>
					</div>
				</form>
			</div>	
			)
	}
}


export default SearchBar