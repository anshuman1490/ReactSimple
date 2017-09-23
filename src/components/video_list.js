
import React from 'react';
import VideoListItem from './video_list_item';

//so now we have passed videos as props by index.js
//will be recieved by videolist as a props and this way is valid
//for function based components

//in class based components props will be available as this.props
//anywhere in class

const VideoList = (props) => {

    const videoItem = props.videos.map(video =>{
        return( <VideoListItem
            onVideoSelect = {props.onVideoSelect}
            key={video.etag}
            video = {video} />
        );
    });

    return(
       <ul className = "col-md-4 list-group">
           {videoItem}
       </ul>    
    );
};

export default VideoList;