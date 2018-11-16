import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const VideoListItem = props => {
  const video = props.video
  const onvideoselect = props.onvideoselect
  const imageurl = video.snippet.thumbnails.default.url
  return (
    <li onClick={() => onvideoselect(video)} className='list-group-item mb-2 '>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageurl} />
        </div>
        <div className='media-body'>
          <div className='media-heading pl-3 text-dark'>
            {video.snippet.title}
          </div>

        </div>
      </div>
    </li>
  )
}

export default VideoListItem
