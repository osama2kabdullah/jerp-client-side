import { Card, Dropdown } from "flowbite-react";
import React from "react";
import HeadTitle from "../../shared/HeadTitle";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="lg:mx-12 mx-8 my-32">
      <HeadTitle>Reviews</HeadTitle>
      <div className="grid lg:grid-cols-3 lg:gap-12 gap-8">
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default Review;
