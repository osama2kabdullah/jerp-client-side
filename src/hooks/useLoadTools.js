import React from 'react';
import { useQuery } from 'react-query';

const useLoadTools = () => {
    const {data:tools, isLoading, error, refetch} = useQuery(['alldata'], ()=>fetch('https://damp-reef-67167.herokuapp.com/products').then(res=>res.json()));
    return {tools, isLoading, refetch};
};

export default useLoadTools;