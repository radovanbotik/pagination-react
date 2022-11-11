import React from "react";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
export default function useFetch() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async url => {
    const resp = await fetch(url);
    const answ = await resp.json();
    // const { arraysPopulated } = Pagination(answ);
    // setData(arraysPopulated);
    setData(Pagination(answ));
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return { loading, data };
}
