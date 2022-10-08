import { Spinner } from "flowbite-react";
import React from "react";

const FullPageLoading = () => {
  return (
    <div className="flex jutify-center items-center h-full absolute">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
};

export default FullPageLoading;
