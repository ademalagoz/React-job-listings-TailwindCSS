import React from "react";

const Job = ({ job }) => {
  const {
    logo,
    company,
    isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  // const langAndTools=[];
  // if(tools){
  //   langAndTools.push(...tools)
  // }
  // if(languages){
  //   langAndTools.push(...languages)
  // }
  return (
    <div className="flex bg-white shadow-md m-4 p-6">
      <div>
        <img src={logo} alt={company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-500">{company}</h3>
        <h2 className="font-bold text-xl">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex items-center justify-end ml-auto">
        {languages
          ? languages.map((language) => (
              <span className=" text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {language}
              </span>
            ))
          : ""}
        {tools
          ? tools.map((tool) => (
              <span className="text-teal-500 bg-teal-100 font-bold m-2 p-2 rounded">
                {tool}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Job;
