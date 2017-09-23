import React from 'react';

const VideoListItem = (/*props*/ {video, onVideoSelect}) => {
//above arguments in es6 are similar to following es5 
// const video = props.video;
//const onVideoSelect = props.onVideoSelect


    const imageUrl = video.snippet.thumbnails.default.url;
    //const video = props.video;
    //done some es6 coating!!!!
    return(
        <li onClick={() => onVideoSelect(video)}className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>

            </div>
        </li>
    );

};
export default VideoListItem;