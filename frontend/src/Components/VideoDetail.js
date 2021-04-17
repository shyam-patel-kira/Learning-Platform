import React from "react"

function VideoDetail(props) {

    if(!(props.video))
    {
        return <div>Loading......</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return(
        <div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc} />
        </div>
            <div className="ui segment" 
                 style={{ color:'white',backgroundColor:'black' }}>
                <h4 className="ui header" 
                    style={{ color:'white',backgroundColor:'black' }}>
                    {props.video.snippet.title}
                </h4>
                <p 
                    style={{ color:'white',backgroundColor:'black' }}>
                    {props.video.snippet.description}
                </p>
            </div>
        </div>
    );
}

export default VideoDetail