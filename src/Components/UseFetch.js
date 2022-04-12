import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  //Fetching the API

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data.");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        }
        console.log(err.message);
      });
    return () => abortCont.abort();
  }, [url]);
  return {
    data,
  };
};

export default UseFetch;
