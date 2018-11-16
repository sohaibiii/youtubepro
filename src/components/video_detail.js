import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoid = video.id.videoId
  const url = `http://www.youtube.com/embed/${videoid}`

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url} />

      </div>
      <div className='detail'>
        <div className='font-weight-bold text-uppercase'>
          {video.snippet.title}
        </div>
        <div className='text-muted'>{video.snippet.description}</div>
      </div>

    </div>
  )
}
export default VideoDetail
