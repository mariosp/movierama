import React from "react";
import ReviewItem from "./ReviewItem/ReviewItem";

const ReviewList = ({reviews}) => {

    const renderReviewList = () => {
        const arrRev = [];
        for(let i=0; i < reviews.length; i++) {
            if(i < 2) {
                arrRev.push(reviews[i])
            }
        }
       return arrRev.map(review => <ReviewItem id={review.id} author={review.author} content={review.content}/>)
    }

    return (
        <div className="review-list">
            {renderReviewList()}
        </div>
    );

}

export default ReviewList;