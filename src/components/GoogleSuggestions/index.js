import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchedText = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  onDisplayText = (id, suggestion) => {
    const {searchInput} = this.state
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )

    return (
      <div className="bg-con">
        <div className="card-con">
          <div className="img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="google-logo"
              alt="google logo"
            />
          </div>
          <div className="suggestion-con">
            <div className="top-con">
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-img"
              />
              <input
                onChange={this.onSearchedText}
                type="search"
                placeholder="Search Google"
                className="inputEle"
                value={searchInput}
              />
            </div>
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  item={each}
                  key={each.id}
                  onDisplayText={this.onDisplayText}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
