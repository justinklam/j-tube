import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// React Router Dom
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);

  return <Container />;
};

export default Search;
