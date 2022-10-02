import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import { Alert } from "./Alert";
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function News() {
  const [fect, setFect] = useState(false);
  const [fect3, setFect3] = useState(false);
  const [fect1, setFect1] = useState(false);
  const { news_id } = useParams();
  const [items, setItems] = useState([]);
  const [news, setNews] = useState({});
  const [latest, setLatest] = useState([]);

  let id = news_id;
  let page = Math.floor(Math.random() * 10) + 1;
  useEffect(() => {
    getStory(id);
    getItem(id);
    getStories(page);
    worlNews();
  }, [id]);
  function getStory(id) {
    getData(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/story/home?storyId=${id}`
    )
      .then((res) => {
        setNews(res.story);
        setFect(true);
      })
      .catch((err) => {
        alert("page not found");
      });
  }
  function getItem(id) {
    getData(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/story/home?storyId=${id}`
    )
      .then((res) => {
        // console.log(res.content.content.items)
        setItems(res.content.content.items);
        setFect1(true);
      })
      .catch((err) => {
        alert("page not found");
      });
  }
  function getStories(page) {
    getData(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/story/news?lang=en&page=${[
        page,
      ]}`
    ).then((res) => {
      // console.log(res);
      setLatest(res.content.stories.results);
      setFect3(true);
    });
  }
  // console.log(news);
  let Items = [];
  if (fect1) {
    Items = getHTML();
  }
  // console.log(items)
  function getHTML() {
    let newData = [];
    for (var i = 0; i < 9; i++) {
      if (items[i].type == "HTML") {
        newData.push(items[i]);
      }
    }
    return newData;
  }
  var Latest = [];
  if (fect3) {
    Latest = getData6();
  }
  function getData6() {
    let newData = [];
    for (var i = 0; i < 7; i++) {
      newData.push(latest[i]);
    }
    return newData;
  }
  var Latest2 = [];
  if (fect3) {
    Latest2 = getData7();
  }
  function getData7() {
    let newData = [];
    for (var i = 10; i < 16; i++) {
      newData.push(latest[i]);
    }
    return newData;
  }
  const [wnews, setWnews] = useState();
  const [fects, setFects] = useState(false);
  function worlNews() {
    getData(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=1f5e94483e944a038b9f87bb4c7ffe88"
    ).then((res) => {
      console.log(res.articles);
      setWnews(res.articles);
      setFects(true);
    });
  }
  var world = [];
  if (fects) {
    world = getData0();
  }
  function getData0() {
    let newData = [];
    for (var i = 0; i < 9; i++) {
      newData.push(wnews[i]);
    }
    return newData;
  }

  console.log(world);
  return (
    <>
      <Box
        // border="1px solid red"
        h="auto"
        bg="#ffffff"
        marginTop="1rem"
        w="95%"
        margin="auto"
      >
        <Box display={"flex"} spacing="0">
          <Box
            borderRight="1px solid rgb(236, 235, 235)"
            h="auto"
            w="70%"
            padding="2rem"
          >
            <Box>{news.copyright}</Box>
            <Box p="0">
              <Text marginTop="-10px" fontWeight="bold" fontSize="3.1rem">
                {news.title}
              </Text>
            </Box>
            <Box>
              <Text>
                by <Link color="blue">{news.byline}</Link> • Published on Fri,
                <Moment format="LLLL">{news.publishedAt}</Moment>
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
              // border="1px solid red"
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
            <Box marginTop="5px">
              <Text color="gray" fontSize="xl">
                {news.summary}
              </Text>
            </Box>
            {Items.map((el, i) => (
              <Box key={i} marginTop="1.7rem">
                {/* {el.html} */}
                <Text fontWeight="470" fontSize="xl">
                  {el.html}
                </Text>
              </Box>
            ))}
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
            <Box marginTop="1rem">
              <Text fontWeight="700" fontSize="26px">
                TAGS
              </Text>
            </Box>
            <Box marginTop="1rem" marginLeft="2rem" gap="20px" display="flex">
              <Text _hover={{ bg: "gray.100" }} bg="gray.300" p="2px">
                {news.credit}
              </Text>
              <Text _hover={{ bg: "gray.100" }} bg="gray.300" p="2px">
                {news.copyright}
              </Text>
            </Box>
            <Box>
              <Text fontWeight="700" marginTop="1.5rem" fontSize="25px">
                RELATED STORIES
              </Text>
            </Box>
            <Grid marginTop="1rem" templateColumns="repeat(2, 1fr)" gap={6}>
              {Latest2.map((el, i) => (
                <Box key={i} display="flex" gap="8px" h="7rem" padding="0.3rem">
                  <Box h="full" w="30%">
                    <Image
                      borderRadius="5px"
                      boxSize="full"
                      src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci${el.image.url}`}
                    />
                  </Box>
                  <Box h="full" w="70%">
                    <Link
                      href={`/users/${el.objectId}`}
                      fontSize="19px"
                      fontWeight="500"
                    >
                      {el.title}
                    </Link>
                  </Box>
                </Box>
              ))}
            </Grid>
            <Box marginTop="2rem">
              <Text fontSize="20px" fontWeight="bold">
                FROM AROUND THE WEB
              </Text>
            </Box>
            <Grid marginTop="1rem" templateColumns="repeat(3, 1fr)" gap={6}>
              {world.map((el, i) => (
                <Box key={i} h="16rem">
                  <Box h="13rem">
                    <Image boxSize="full" src={el.urlToImage} />
                  </Box>
                  <Text fontWeight="500" fontSize="17px">
                    {el.title}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>

          <Box h="200rem" w="30%" padding="0.6rem">
            <Box h="19rem">
              <Image
                boxSize="full"
                src="https://tpc.googlesyndication.com/simgad/18392794220762119992"
              />
            </Box>
            <Box marginTop="1.5rem" h="45rem">
              <Image
                boxSize="full"
                src="https://s.hcurvecdn.com/voot/2022/bb16/300x600/bg.png"
              />
              <Image
                opacity="1"
                boxSize="full"
                transform={"translate(0%, -100%)"}
                // bg="black"
                src="https://s.hcurvecdn.com/voot/2022/bb16/300x600/cta.png"
              />
              <Image
                opacity="1"
                boxSize="full"
                transform={"translate(0%, -200%)"}
                // bg="black"
                src="https://s.hcurvecdn.com/voot/2022/bb16/300x600/counter.png"
              />
              <Image
                opacity="1"
                boxSize="full"
                transform={"translate(0%, -300%)"}
                // bg="black"
                src="https://s.hcurvecdn.com/voot/2022/bb16/300x600/logo.png"
              />
              <Image
                opacity="1"
                boxSize="full"
                transform={"translate(0%, -400%)"}
                // bg="black"
                src="https://s.hcurvecdn.com/voot/2022/bb16/300x600/copy2.png"
              />
              <Image
                opacity="1"
                boxSize="full"
                transform={"translate(0%, -500%)"}
                // bg="black"
                src="https://s.hcurvecdn.com/voot/2022/bb16/300x600/copy.png"
              />
            </Box>
            <Box
              justifyContent="center"
              gap="17px"
              display="flex"
              transform={"translate(0%, -750%)"}
              margin="auto"
              h="3.7rem"
            >
              <Box
                marginLeft="1.1rem"
                marginTop="0.4rem"
                h="full"
                w="3.6rem"
                fontWeight="bold"
                color="white"
                fontSize="3xl"
              >
                10
              </Box>
              <Box
                marginTop="0.4rem"
                h="full"
                w="3.6rem"
                fontWeight="bold"
                color="white"
                fontSize="3xl"
              >
                54
              </Box>
              <Box
                marginTop="0.4rem"
                h="full"
                w="3.6rem"
                fontWeight="bold"
                color="white"
                fontSize="3xl"
              >
                26
              </Box>
            </Box>
            <Box
              borderBottom="1px solid rgb(236, 235, 235)"
              textAlign="center"
              h="auto"
            >
              <Box textAlign="left" marginLeft="0.8rem">
                <Text color="#009070" fontWeight="bold" fontSize="xl">
                  LATEST NEWS
                </Text>
              </Box>
              {Latest.map((el, i) => (
                <Box
                  h="8.4rem"
                  key={i}
                  gap="5px"
                  display="flex"
                  padding="0.7rem"
                  borderBottom="1px solid rgb(236, 235, 235)"
                  marginBottom="0.9rem"
                >
                  <Box w="35%">
                    <Image
                      borderRadius="5px"
                      boxSize="full"
                      src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci${el.image.url}`}
                    />
                  </Box>
                  <Box w="75%">
                    <Box textAlign="left">
                      <Link
                        href={`/users/${el.objectId}`}
                        fontWeight="500"
                        fontSize="17px"
                      >
                        {el.title}
                      </Link>
                    </Box>
                    <Text textAlign="left">
                      <Moment fromNow>{el.publishedAt}</Moment>
                    </Text>
                  </Box>
                </Box>
              ))}

              <Box paddingTop="1rem" paddingBottom="2rem">
                <Button
                  _hover="none"
                  bg="#009270"
                  borderRadius="none"
                  color="white"
                >
                  More News
                </Button>
              </Box>
            </Box>
            <Box marginTop="1.5rem" h="45rem">
              <Image
                boxSize="full"
                src="https://tpc.googlesyndication.com/daca_images/simgad/14128503167182288848"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default News;
