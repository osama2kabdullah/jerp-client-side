import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, {useState} from "react";

const BuyModal = ({ modal, setModal, product }) => {
  const { availableQty, name, minimumOrder, price } = product;

  const [orderQty, setOrderQty] = useState(minimumOrder);
  console.log(orderQty);
  
  return (
    <React.Fragment>
      <Modal
        show={modal}
        size="md"
        popup={true}
        onClose={() => setModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 pb-4 sm:pb-6  xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {name}
            </h3>

            <form class="w-full max-w-lg">
            <h2 className='text-lg font-bold mb-6'>Available: {availableQty - orderQty}</h2>
              <div class="flex flex-wrap  mb-6">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Qty
                  </label>
                  <input
                  onChange={e=>setOrderQty(parseInt(e.target.value))}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    placeholder="Number of products"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Total
                  </label>
                  <h1 className="text-xl font-bold mt-4">${(price * orderQty).toFixed(2)}</h1>
                </div>
                
              </div>
              <Button disabled={availableQty < orderQty}>Confirm Order</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default BuyModal;
