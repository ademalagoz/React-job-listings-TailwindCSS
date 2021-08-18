import "./App.css";
import data from "./data.json";
import Job from "./components/Job";
import { useState, useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const handleFilterClick = (elem) => {
    setFilters(filters.filter((f) => f !== elem));
  };
  const handleClear = () => {
    setFilters([]);
  };

  return (
    <>
      <header className="bg-green-600 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="bg-imag" />
      </header>
      <div className="container m-auto">
        <div className=" flex-col bg-white shadow-md my-16 mx-10 p-6 rounded">
          {filters.length > 0 &&
            filters.map((filter) => (
              <span
                onClick={() => handleFilterClick(filter)}
                className="cursor-pointer text-blue-400 bg-blue-100 font-bold mr-4 mb-4 p-2 rounded "
              >
                <span className="text-blue-400 bg-blue-100 p-2">{filter}</span>
                <span className="text-blue-400 bg-blue-100 text-xl">X</span>
              </span>
            ))}

          <button
            onClick={handleClear}
            className="font-bold text-blue-400 mx-auto"
          >
            Clear
          </button>
        </div>

        {jobs.map((job) => (
          <Job job={job} key={job.id} handleTagClick={handleTagClick} />
        ))}
      </div>
    </>
  );
}

export default App;
