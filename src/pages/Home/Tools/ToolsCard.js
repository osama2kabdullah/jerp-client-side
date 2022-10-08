import { Card } from 'flowbite-react';
import React from 'react';

const ToolsCard = ({tool}) => {
    const {name, picture, price, about:description, availableQty, minimumOrder} = tool;
    return (
        <Card
          imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
          imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
        >
          <span>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </span>
          <span className="text-lg font-bold text-gray-900 dark:text-white">
             Available {availableQty} Qty
            </span>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a
              href="#"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Order Now
            </a>
          </div>
        </Card>
    );
};

export default ToolsCard;