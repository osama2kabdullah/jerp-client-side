import { Card, Spinner } from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import FullPageLoading from "../../shared/FullPageLoading";
import HeadTitle from "../../shared/HeadTitle";
import LoadSpinner from "../../shared/LoadSpinner";
import ToolsCard from "./ToolsCard";

const Tools = () => {
    const {data:tools, isLoading} = useQuery(['alldata'], ()=>fetch('http://localhost:5000/products').then(res=>res.json()));
    if(isLoading){
      return <FullPageLoading></FullPageLoading>
    }
  return (
    <div className="lg:mx-12 mx-8 ">
        <HeadTitle>Tools</HeadTitle>
        
      <div className="grid lg:grid-cols-3 lg:gap-12 gap-8">
        {
            tools.map(tool=><ToolsCard
            tool={tool}
            key={tool._id}
            ></ToolsCard>)
        }
      </div>
    </div>
  );
};

export default Tools;
