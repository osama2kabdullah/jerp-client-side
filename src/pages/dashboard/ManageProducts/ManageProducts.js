import { Table } from 'flowbite-react';
import React from 'react';
import FullPageLoading from '../../shared/FullPageLoading';
import useLoadTools from '../../shared/useLoadTools';
import DeleteModal from '../MyOrders/DeleteModal';
import TableRowMe from '../MyOrders/TableRowMe';
import ManageRowMe from './ManageRowMe';

const ManageProducts = () => {
    const [tools, isLoading] = useLoadTools();
    console.log(tools);
    if(isLoading){
      return <FullPageLoading></FullPageLoading>
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
            <ManageRowMe
            // setModal={setModal}
            tool={tool}></ManageRowMe>
            </>
          ))}
        </Table.Body>
      </Table>
      {/* <DeleteModal refetch={refetch()} handleDelete={handleDelete} modal={modal} setModal={setModal}></DeleteModal> */}
    </div>
    );
};

export default ManageProducts;