import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import SearchBar from './components/search_bar'
import Videolist from './components/video_list'
import VideoDetail from './components/video_detail'
import YTsearch from 'youtube-api-search'
const API_KEY = 'AIzaSyBt77i22grMSDmVEw3NyycpKiNi0v0e8dA'

// everything(main api functions) will be done in main js file
// top level components should be responsible for fetching data

class Main extends Component {
  constructor () {
    super()
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videosearch('pakistan')
  }
  videosearch (term) {
    YTsearch({ key: API_KEY, term: term }, videos => {
      // ajax/jquery function like dictionay and function combine
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videosearch = _.debounce(term => this.videosearch(term), 1000) // call the function after 1 second
    return (
      <div>
        <SearchBar Myvideosearch={videosearch} />
        <div className='row mt-4 ml-3'>
          <VideoDetail video={this.state.selectedVideo} />
          <Videolist
            videos={this.state.videos}
            onvideoselect={selectedVideo =>
              this.setState({ selectedVideo: selectedVideo })}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))
