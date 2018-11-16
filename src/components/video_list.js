import React from 'react'
import VideoListItem from './video_list_item'
import 'bootstrap/dist/css/bootstrap.css'

const Videolist = props => {
  const videoitems = props.videos.map(video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onvideoselect={props.onvideoselect}
      />
    )
  })
  return (
    <ul className='col-md-4 list-group'>
      {videoitems}
    </ul>
  )
}

export default Videolist
