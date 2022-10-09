import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";

const BuyModal = ({ modal, setModal, product }) => {
  const { availableQty, name, minimumOrder, price } = product;

  const [orderQty, setOrderQty] = useState(minimumOrder);

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    const productQuantity = e.target.qty.value;
    const totalPrice = e.target.totalPrice.value;
    const shippingAddress = e.target.shippingAddress.value;
    const phoneNumber = e.target.phoneNumber.value;
    const doc = { productQuantity, totalPrice, productName: name, shippingAddress, phoneNumber };
    fetch("https://damp-reef-67167.herokuapp.com/makeOrder", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(doc),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setModal(false);
        }
      });
  };

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

            <form onSubmit={handleConfirmOrder} class="w-full max-w-lg">
              <h2 className="text-lg font-bold mb-6">
                Available: {availableQty}
              </h2>
              <div class="flex flex-wrap  mb-6">
                
                {/* -------------------------- */}
                <label
                      class=" w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Shipping Address
                    </label>
                    <input type="text" name="shippingAddress" placeholder="Address" className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full" />
                    
                    
                    {/* -------------------------------- */}
                <label
                      class=" w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Phone Number
                    </label>
                    <input type="text" name="phoneNumber" placeholder="Phone number" className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-full" />


{/* ------------------------ */}
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Qty
                  </label>
                  <input
                    onChange={(e) => setOrderQty(parseInt(e.target.value))}
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="number"
                    name="qty"
                    value={orderQty}
                    placeholder="Number of products"
                  />
                </div>
                {/* -------------------------- */}
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Total
                  </label>
                  <input
                    disabled
                    name="totalPrice"
                    value={`${(price * orderQty || 0).toFixed(2)}`}
                    className="text-xl font-bold mt-4"
                  />
                </div>
                {availableQty < orderQty && (
                  <small className="text-red-500">Out of stock</small>
                )}
                {minimumOrder > orderQty && (
                  <small className="text-red-500">
                    Minimum order {minimumOrder}
                  </small>
                )}
              </div>
              <Button
                disabled={availableQty < orderQty || minimumOrder > orderQty}
              >
                {" "}
                <button type="submit">Confirm Order</button>{" "}
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default BuyModal;
