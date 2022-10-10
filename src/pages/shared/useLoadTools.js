import React from 'react';
import { useQuery } from 'react-query';

const useLoadTools = () => {
    const {data:tools, isLoading, error} = useQuery(['alldata'], ()=>fetch('https://damp-reef-67167.herokuapp.com/products').then(res=>res.json()));
    return [tools, isLoading];
};

export default useLoadTools;