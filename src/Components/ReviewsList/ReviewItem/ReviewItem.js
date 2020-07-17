import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({author, content}) => {
    return(
        <div className="review-item">
            <div className="review-item">
                Author: {author}
            </div>
            <div className="review-content">
                Review: {content}
            </div>
        </div>
    )
}

export default ReviewItem;