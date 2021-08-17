import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
// import Home from "./Home";
import Job from "./components/Job";
import { useState, useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);
  console.log(jobs);

  return (
    <div className="App">
      <header className="bg-teal-500 mb-12">
        <img src="/images/bg-header-desktop.svg" alt="bg-imag" />
      </header>
      {jobs.map((job) => (
        <Job job={job} key={job.id} />
      ))}
    </div>
  );
}

export default App;
