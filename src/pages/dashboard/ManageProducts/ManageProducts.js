import { Table } from "flowbite-react";
import React, { useState } from "react";
import DeleteModal from "../../shared/DeleteModal";
import FullPageLoading from "../../shared/FullPageLoading";
import useLoadTools from "../../../hooks/useLoadTools";
import TableRowMe from "../MyOrders/TableRowMe";
import ManageRowMe from "./ManageRowMe";

const ManageProducts = () => {
  const { tools, isLoading, refetch } = useLoadTools();
  const [modal, setModal] = useState(false);

  const handleDelete = (id) => {
    fetch("https://damp-reef-67167.herokuapp.com/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  if (isLoading) {
    return <FullPageLoading></FullPageLoading>;
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Products</h2>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Product Quantity</Table.HeadCell>
          <Table.HeadCell>Per Product Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Update</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Stock out</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {tools.map((tool) => (
            <>
              <ManageRowMe setModal={setModal} tool={tool}></ManageRowMe>
            </>
          ))}
        </Table.Body>
      </Table>
      <DeleteModal
        refetch={() => refetch()}
        handleDelete={handleDelete}
        modal={modal}
        setModal={setModal}
      ></DeleteModal>
    </div>
  );
};

export default ManageProducts;
