import { getJobs } from "@/API/apijobs.js";
import useFetch from "@/Hooks/user-fetch";
import { useSession } from "@clerk/clerk-react";
import { useEffect } from "react";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {});

  console.log(dataJobs);

  useEffect(() => {
    fnJobs();
  }, []);
  return <div>JobListing</div>;
};

export default JobListing;
