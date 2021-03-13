import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
   state = {
     query: ''
    }
 handleChangeQuery = e => this.setState({ query: e.currentTarget.value });
    
 handleSubmitForm = e => {
    e.preventDefault();
    const { query } = this.state;
    if (!query) return;
    this.props.onSubmitForm(query);
    this.setState({ query: '' });
  };

 render() {
    const { query } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            value={query}
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeQuery}
          />
        </form>
      </header>
    );
  }
}
SearchBar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default SearchBar