import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list' 
import VideoDetail from './components/video_detail'

const API_KEY =  'AIzaSyBVQoQS0Cg5HDdUKF3woGHEhDR7Q1mfFgI';



 

//functional based component is used when just need to spit some jsx.

// const App = () => {
//   return (
//     //this way we create an instance of searchbar.
//     //when App will re-render then their child like search bar will also re-render.
//     <div>
//      <SearchBar /> 
//     </div>

//   );
// }

//#### making above commented and turning it to class based ####

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos : [],
      selectedVideo: null
    };
  this.videoSearch('surfboard');
   
  }
  
videoSearch(term){
  YTSearch( {key: API_KEY, term: term}, videos => {
    //this.setState({videos : videos});  ---ES5
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    }); // in es6 if key and value name is same then we 
                            //can use this syntax {videos}.
});
}
  
  render(){
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 2000)
  return (
     //this way we create an instance of searchbar.
     //when App will re-render then their child like search bar will also re-render.
     <div>
      <SearchBar onSearchTermChange = {videoSearch} /> 
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
         videos={this.state.videos} />
     </div>

   );
  }
 }
//passing data like above video is passing props to child components. 

ReactDOM.render(

    <App />
  , document.querySelector('.container'));
