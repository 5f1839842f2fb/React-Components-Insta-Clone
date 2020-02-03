import React, { useState } from 'react';

const LikeSection = props => {
  const [likes] = useState(props.likes)
  /* console.log("like section props:", props) */
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {likes} likes</p>
</div>
  )
};

export default LikeSection;
