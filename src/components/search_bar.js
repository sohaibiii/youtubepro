import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      term: ''
    }
  }
  render () {
    return (
      <div className='search-bar'>
        <h1>MyYoutube</h1>
        <input
          value={this.state.term}
          onChange={e => this.searchfunc(e.target.value)}
        />
      </div>
    )
  }
  searchfunc (term) {
    this.setState({ term })
    this.props.Myvideosearch(term)
  }
}

export default SearchBar
