import { Card, Dropdown } from "flowbite-react";
import React from "react";
import RatingMe from "./RatingMe";
import ReviewStar from "./ReviewStar";

const ReviewCard = ({ review }) => {
  console.log("rating", review.rating);
  const array = Array(parseInt(review?.rating));
  console.log("arr", array);
  return (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
            alt="Bonnieimage"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {review?.user.name || review?.user.email}
          </h5>
          <div className="flex">
            <RatingMe rating={review?.rating}></RatingMe>
          </div>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            {review?.reviwMessage}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
