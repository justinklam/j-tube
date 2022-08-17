import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

// Components
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get("/videos/random");
      setVideos(res.data);
    };
    // function called outside useEffect as useEffect cannot be async
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos.map((video) => (
        <Card />
      ))}
    </Container>
  );
};

export default Home;
