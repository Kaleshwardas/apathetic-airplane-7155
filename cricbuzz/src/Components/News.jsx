import { Box, HStack, Image, Link, Text } from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { useParams } from "react-router-dom";
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};
function News() {
  const [fect, setFect] = useState(false);
  const { news_id } = useParams();
  const [items, setItems] = useState([]);
  const [news, setNews] = useState({});
  const [details, setDetails] = useState({});
  console.log(news_id);
  let id = news_id;

  useEffect(() => {
    getStory(id);
    getItem(id);
    getStories(id);
  }, [id]);
  function getStory(id) {
    getData(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/story/home?storyId=${id}`
    ).then((res) => {
      setNews(res.story);
      setFect(true);
    });
  }
  function getItem(id) {
    getData(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/story/home?storyId=${id}`
    ).then(
      (res) => console.log(res.content.content.items)
      // setNews(res)
    );
  }
  function getStories(id) {
    getData(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/story/home?storyId=${id}`
    ).then(
      (res) => console.log(res.content.related.stories)
      // setNews(res)
    );
  }
  console.log(news);
  return (
    <>
      <Box
        border="1px solid red"
        h="200rem"
        bg="#ffffff"
        marginTop="1rem"
        w="95%"
        margin="auto"
      >
        <HStack spacing="0">
          <Box borderRight="1px solid red" h="200rem" w="70%" padding="2rem">
            <Box>WOMEN'S ASIA CUP 2022</Box>
            <Box p="0">
              <Text marginTop="-10px" fontWeight="bold" fontSize="3.1rem">
                {news.title}
              </Text>
            </Box>
            <Box>
              <Text>
                by <Link color="blue">Cricbuzz Staff </Link> • Published on Fri,
                Sep 30, 2022, 04:04 PM
              </Text>
            </Box>
            <Box marginTop="1.7rem" display="flex" gap="20px">
              <HStack h="2.5rem" w="6rem" borderRadius="4px" bg="#325a97">
                <ImFacebook color="white" size="1.3rem" />
                <Text color="white">Share</Text>
              </HStack>
              <HStack h="2.5rem" w="6rem" borderRadius="4px" bg="#00aced">
                <AiOutlineTwitter color="white" size="1.3rem" />
                <Text color="white">Tweet</Text>
              </HStack>
            </Box>
            <Box
              borderRadius="10px"
              marginTop="1.8rem"
              border="1px solid red"
              h="28rem"
            >
              <Image
                borderRadius="10px"
                boxSize="full"
                src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci${
                  fect ? news.image.url : "/db/PICTURES/CMS/346500/346557.5.jpg"
                }`}
              />
            </Box>
          </Box>
          <Box h="200rem" w="30%"></Box>
        </HStack>
      </Box>
    </>
  );
}

export default News;
