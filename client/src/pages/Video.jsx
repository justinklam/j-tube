import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { format } from "timeago.js";

// React Redux
import { useDispatch, useSelector } from "react-redux";
import {
  dislike,
  fetchFailure,
  // fetchStart,
  fetchSuccess,
  like,
} from "../redux/videoSlice";
import { subscription } from "../redux/userSlice";

// React Router Dom
import { useLocation } from "react-router-dom";

// Components
import Comments from "../components/Comments";
// import Card from "../components/Card";
import Recommendation from "../components/Recommendation";

// MUI
import {
  AddTaskOutlined,
  ReplayOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  ThumbUp,
  ThumbUpAltOutlined,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const dispatch = useDispatch();

  // split, add / and take index 2
  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        // console.log("videoRes", videoRes);
        // console.log("channelRes", channelRes);
        // console.log("currentVideo", currentVideo);
        // console.log("currentVideo.title", currentVideo.title);
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        dispatch(fetchFailure());
      }
    };
    fetchData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };

  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };

  const handleSub = async () => {
    // if currentUser's includes the channelId in subscribedUsers, unsub, else sub
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };

  return (
    <Container>
      {currentVideo && (
        <Content>
          <VideoWrapper>
            <VideoFrame src={currentVideo.videoUrl} controls />
          </VideoWrapper>
          <Title>{currentVideo.title}</Title>
          <Details>
            <Info>
              {currentVideo.views} views • {format(currentVideo.createdAt)}
            </Info>
            <Buttons>
              <Button onClick={handleLike}>
                {currentVideo.likes?.includes(currentUser?._id) ? (
                  <ThumbUp />
                ) : (
                  <ThumbUpAltOutlined />
                )}{" "}
                {currentVideo.likes?.length}
              </Button>
              <Button onClick={handleDislike}>
                {currentVideo.dislikes?.includes(currentUser?._id) ? (
                  <ThumbDown />
                ) : (
                  <ThumbDownOffAltOutlined />
                )}{" "}
                Dislike
              </Button>
              <Button>
                <ReplayOutlined /> Share
              </Button>
              <Button>
                <AddTaskOutlined /> Save
              </Button>
            </Buttons>
          </Details>
          <Hr />
          <Channel>
            <ChannelInfo>
              <Image src={channel.img}></Image>
              {/* <Image src="https://yt3.ggpht.com/KNYElmLFGAOSZoBmxYGKKXhGHrT2e7Hmz3WsBerbam5uaDXFADAmT7htj3OcC-uK1O88lC9fQg=s88-c-k-c0x00ffffff-no-rj" /> */}
              <ChannelDetails>
                <ChannelName>{channel.name}</ChannelName>
                <ChannelCounter>
                  {channel.subscribers} subscribers
                </ChannelCounter>
                <Description>{currentVideo.description}</Description>
              </ChannelDetails>
            </ChannelInfo>
            <Subscribe onClick={handleSub}>
              {/* if current user is subscribed to this channelID, display Subscribed else Subscribe */}
              {currentUser.subscribedUsers?.includes(channel._id)
                ? "SUBSCRIBED"
                : "SUBSCRIBE"}
            </Subscribe>
          </Channel>
          <Hr />
          <Comments videoId={currentVideo._id} />
        </Content>
      )}
      <Recommendation tags={currentVideo.tags} />
    </Container>
  );
};

export default Video;
