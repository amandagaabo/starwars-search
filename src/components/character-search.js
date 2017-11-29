import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchCharacters} from '../actions';

export class CharacterSearch extends React.Component {
    onSubmit(e) {
      e.preventDefault();
      
      const term = this.input.value.trip();
      console.log(term)
    }
  
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnerName="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const characters = this.props.characters.map((character, index) => (
            <li key={index}>{character}</li>
        ));

        return <ul className="character-search-results">{characters}</ul>;
    }

    render() {
        return (
            <div className="character-search">
                {/* When this form is submitted you should submit the
                    searchCharacters action */}
                <form onSubmit={this.onSubmit}>
                    <input type="search" ref={input => (this.input = input)} />
                    <button>Search</button>
                </form>
                <ul className="character-search-results">
                    {this.renderResults()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    characters: state.characters,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(CharacterSearch);
