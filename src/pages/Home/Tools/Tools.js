import { Card } from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import HeadTitle from "../../shared/HeadTitle";
import ToolsCard from "./ToolsCard";

const Tools = () => {
    const {data:tools} = useQuery(['alldata'], ()=>fetch('tools.json').then(res=>res.json()));
    
  return (
    <div className="lg:mx-12 mx-8 my-32">
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
