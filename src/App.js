/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
import SearchBar from './components/SearchBar/SearchBarContainer.js'
import PostsContainer from './components/PostsContainer/PostsPage.js'
import dummyData from './dummy-data.js'
// import the PostsPage and SearchBar and add them to the App
// import dummydata

const App = (props) => {
  // set up state for the dummy data and pass to your PostsPage
  const [postData, setPostData] = useState(dummyData)
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar />
      <PostsContainer post={postData} />
    </div>
  );
};

export default App;

/* 
   App => SearchBar
       => PostsPage => Post => PostHeader
                            => CommentSectionContainer => Comment
                                                       => CommentInput
                            => LikeSection 
*/