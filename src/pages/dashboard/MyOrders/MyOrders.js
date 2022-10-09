import { Button, Modal, Table } from "flowbite-react";
import React, { useState } from "react";
import { useQuery } from "react-query";
import FullPageLoading from "../../shared/FullPageLoading";
import DeleteModal from "./DeleteModal";
import TableRowMe from "./TableRowMe";

const MyOrders = () => {
  const [modal, setModal] = useState(false);
  
  //load data
  const { data, isLoading, refetch } = useQuery("myorders", () =>
    fetch("https://damp-reef-67167.herokuapp.com/myorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  console.log(data);
  if (isLoading) {
    return <FullPageLoading></FullPageLoading>;
  }
  
  //remove a data
  const handleDelete = name => {
    const rest = data?.result?.orderlist?.filter(order=>order.productName !== name.productName);
    fetch('https://damp-reef-67167.herokuapp.com/cancelOrder', {
        method: 'PATCH',
        headers: {
            'content-type':'application/json',
            authorization: `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify({rest})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
  }
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Order Quantity</Table.HeadCell>
          <Table.HeadCell>Total Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Pay</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data?.result?.orderlist?.map((order) => (
            <>
            <TableRowMe setModal={setModal} order={order}></TableRowMe>
            </>
          ))}
        </Table.Body>
      </Table>
      <DeleteModal refetch={refetch()} handleDelete={handleDelete} modal={modal} setModal={setModal}></DeleteModal>
    </div>
  );
};

export default MyOrders;
