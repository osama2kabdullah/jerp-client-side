import { Card, Dropdown } from 'flowbite-react';
import React from 'react';
import ReviewStar from './ReviewStar';

const ReviewCard = () => {
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
                Bonnie Green
              </h5>
              <div className='flex'>
              <ReviewStar></ReviewStar>
              <ReviewStar></ReviewStar>
              <ReviewStar></ReviewStar>
              <ReviewStar></ReviewStar>
              </div>
              
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum, sunt unde, eaque sit minima molestias facilis!
              </span>
            </div>
          </Card>
        </div>
    );
};

export default ReviewCard;