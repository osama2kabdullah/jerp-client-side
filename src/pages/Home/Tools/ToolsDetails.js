import { Button, Checkbox, Label, Modal, Rating, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BuyModal from "./BuyModal";

const ToolsDetails = () => {
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  console.log(modal);
  return (
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">
              PRODUCT NAME
            </h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <div class="flex mb-4">
            <Rating>
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star filled={false} />
  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
    4.95 out of 5
  </p>
</Rating>
            </div>
            <p class="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div class="flex">
                <span class="mr-3">Available Qty:</span> 634
              </div>
              <div class="flex ml-6 items-center">
                <span class="mr-3">Minimum order Qty: 634</span>
              </div>
            </div>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button onClick={()=>setModal(true)} class="flex ml-auto text-white border-0 focus:outline-none ">
                <Button>
    Palce Order
  </Button>
              </button>
              <BuyModal
              modal={modal}
              setModal={setModal}
              ></BuyModal>
              
              <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsDetails;
