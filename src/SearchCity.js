import React, { Component } from 'react';

 class SearchCity extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value.charAt(0).toUpperCase() + this.query.value.slice(1));
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="search-input" htmlFor="search">Type City Name:</label>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={input => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i>search</i></button>
      </form>      
    );
  }
}

export default SearchCity;