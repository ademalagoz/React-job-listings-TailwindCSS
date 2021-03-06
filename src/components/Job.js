import React from "react";

const Job = ({ job, handleTagClick }) => {
  const {
    logo,
    isNew,
    featured,
    company,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;

  const tags = [role, level];
  if (tools) {
    tags.push(...tools);
  }
  if (languages) {
    tags.push(...languages);
  }
  return (
    <div
      className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${
        featured && "border-l-4 border-blue-500 "
      }sm:flex-row`}
    >
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24"
          src={logo}
          alt={company}
        />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-blue-400">
          <span className="text-blue-400">{company}</span>
          {isNew && (
            <span
              className="
            bg-blue-300 text-white font-bold p-2 m-2 py-1 px-2 rounded-full uppercase"
            >
              new!
            </span>
          )}
          {featured && (
            <span className="bg-gray-800 text-white font-bold py-1 px-2 rounded-full uppercase">
              featured
            </span>
          )}
        </h3>

        <h2 className="font-bold text-xl my-2">{position}</h2>
        <p className="text-gray-700">
          {postedAt} · {contract} · {location}
        </p>
      </div>
      <div className="flex flex-wrap items-center mt-4 pt-4 border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 ">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                className=" cursor-pointer text-blue-400 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded sm:mb-0"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Job;
