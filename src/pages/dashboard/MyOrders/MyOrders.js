import { Table } from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import FullPageLoading from "../../shared/FullPageLoading";
import TableRowMe from "./TableRowMe";

const MyOrders = () => {
  const { data, isLoading } = useQuery("myorders", () =>
    fetch("http://localhost:5000/myorders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <FullPageLoading></FullPageLoading>;
  }

  console.log(data.orderlist);
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
            {
                data.orderlist.map(order=><TableRowMe order={order}></TableRowMe>)
            }
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyOrders;
