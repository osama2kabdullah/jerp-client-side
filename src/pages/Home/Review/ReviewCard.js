import { Card, Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import RatingMe from "./RatingMe";
import ReviewStar from "./ReviewStar";

const ReviewCard = ({ review }) => {
  const array = Array(parseInt(review?.rating));
  const [photoURL, setPhotoURL] = useState('');
  useEffect(()=> {
    if(review){
      fetch('https://damp-reef-67167.herokuapp.com/finduser/'+review.user.email, {
        method: 'GET',
          headers: {
            authorization: `Bearer ${localStorage.getItem('access_token')}`
          }
      })
      .then(res=>res.json())
      .then(data=>{
        setPhotoURL(data.doc?.photoURL);
      })
    }
  },[review])
  return (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src={photoURL}
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
