import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Moment from "react-moment";
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};
function LiveScore() {
  const [score, setScore] = useState([]);
  const [vid, setVideo] = useState([]);
  const [fect, setFect] = useState(false);
  const [fect1, setFect1] = useState(false);
  const [fect3, setFect3] = useState(false);

  const options2 = {
    method: "GET",
    url: "https://hs-consumer-api.espncricinfo.com/v1/pages/video/latest?country=in",
  };
  useEffect(() => {
    // getScore();
    fecthData2();
    getStories(1);
  }, []);
  function getScore(id) {
    getData(
      `https://api.cricapi.com/v1/cricScore?apikey=20cc6c46-c1ae-4df4-b034-ea9776216680`
    )
      .then((res) => {
        console.log(res);
        setScore(res.data);
        setFect(true);
      })
      .catch((err) => {
        alert("page not found");
      });
  }

  function fecthData2() {
    axios
      .request(options2)
      .then(function (response) {
        // console.log(response.data.content.videos.results);
        setVideo(response.data.content.videos.results);
        setFect1(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  let Score = [];
  if (fect) {
    Score = getData2();
  }
  function getData2() {
    let newData = [];
    for (var i = 0; i < 10; i++) {
      newData.push(score[i]);
    }
    return newData;
  }
  console.log(Score);
  var Videos = [];
  if (fect1) {
    Videos = getData3();
  }
  function getData3() {
    let newData2 = [];
    for (var i = 0; i < 3; i++) {
      newData2.push(vid[i]);
    }
    return newData2;
  }
  const [latest, setLatest] = useState([]);
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
  var Latest = [];
  if (fect3) {
    Latest = getData6();
  }
  function getData6() {
    let newData = [];
    for (var i = 0; i < 5; i++) {
      newData.push(latest[i]);
    }
    return newData;
  }
  console.log(Latest);
  return (
    <Box w="95%" h="230rem"  margin="auto">
      <Box
        bg="#ffffff"
        paddingLeft="1.5rem"
        borderBottom="1px solid rgb(236, 235, 235)"
        h="3rem"
      >
        <Box display="flex" gap="10px" w="70%">
          <Link
            fontSize="20px"
            fontWeight={"bold"}
            marginTop="0.8rem"
            color="#028062"
          >
            Current Matches
          </Link>
          <Link
            fontSize="20px"
            fontWeight={"bold"}
            marginTop="0.8rem"
            color="#028062"
          >
            Current & Future Series
          </Link>
          <Link
            fontSize="20px"
            fontWeight={"bold"}
            marginTop="0.8rem"
            color="#028062"
          >
            Matches By Day
          </Link>
          <Link
            fontSize="20px"
            fontWeight={"bold"}
            marginTop="0.8rem"
            color="#028062"
          >
            Teams
          </Link>
          <Link
            fontSize="20px"
            fontWeight={"bold"}
            marginTop="0.8rem"
            color="#028062"
          >
            Series Archive
          </Link>
        </Box>
      </Box>
      <Box
        paddingLeft="1.5rem"
        h="5.5rem"
        bg="#ffffff"
        borderBottom="1px solid rgb(236, 235, 235)"
      >
        <Box>
          <Text fontSize="30px" fontWeight="600">
            Live Cricket Score
          </Text>
        </Box>
        <Box marginTop="0.7rem" display="flex" gap="1rem" fontWeight="500">
          <Text fontSize="20px" _hover={{ color: "#028062" }}>
            Live
          </Text>
          <Text fontSize="20px" _hover={{ color: "#028062" }}>
            Recent
          </Text>
          <Text fontSize="20px" _hover={{ color: "#028062" }}>
            Upcoming
          </Text>
        </Box>
      </Box>

      <Box bg="#ffffff" h="auto"  w="full">
        <Box
          display="flex"
          h="5rem"
          gap="2rem"
          justifyContent="center"
          w="30rem"
        >
          <Box
            borderRadius="20px"
            bg="#028062"
            color="white"
            marginTop="1.5rem"
            h="2rem"
            w="7rem"
            textAlign="center"
          >
            {" "}
            <Text marginTop="0.2rem">Domenstic</Text>{" "}
          </Box>
          <Box
            borderRadius="20px"
            bg="gray"
            color="white"
            marginTop="1.5rem"
            h="2rem"
            textAlign="center"
            w="7rem"
          >
            <Text marginTop="0.2rem">Women</Text>
          </Box>
        </Box>
        <Box marginTop="-1rem" bg="#ffffff"  h="auto" w="full" display="flex">
          <Box h="219rem" padding="2rem" w="70%"  borderRight="1px solid rgb(236, 235, 235)">
            {/* ****item box***** */}
            {Score.map((el) => (
            
            <Box key={el.id} h="20rem" >
            <Box  bg="gray.200" h="3rem">
                <Text fontWeight="bold" marginTop="0.4rem" marginLeft="0.8rem" fontSize="22px" style={{ textTransform: 'uppercase'}} >{el.matchType}</Text>
            </Box>
            <Box padding="0.6rem"  h="5rem">
                <Link fontSize="20px" fontWeight="bold">{el.t1} vs {el.t2}</Link>
                <Text fontSize="23px">    <Moment fromNow>{el.dateTimeGMT}</Moment></Text>
            </Box>
            <Box padding="1rem" marginTop="1rem" marginLeft="1rem" bg="gray.200" w="25rem"  h="8rem">
                <Box display="flex" fontSize="20px " fontWeight="bold" color="gray" gap="2rem"><Text>{el.t1}</Text><Text>{el.t1s}</Text></Box>
                <Box display="flex" fontSize="20px " fontWeight="bold"  gap="2rem"><Text>{el.t2}</Text><Text>{el.t2s}</Text></Box>
                <Box display="flex" fontSize="20px " color="red" gap="2rem"><Text> <Moment fromNow>{el.dateTimeGMT}</Moment> {el.status}</Text></Box>
            </Box>
            
            </Box>  
          
          ))}
          </Box>
          <Box h="50rem" w="30%" padding="0.8rem">
            <Box marginTop="1.5rem" h="45rem">
              <Image
                boxSize="full"
                src="https://tpc.googlesyndication.com/daca_images/simgad/14128503167182288848"
              />
            </Box>
            <Box bg="#ffffff" w="full" h="auto" marginTop="0.8rem">
              <Box marginTop="0.8rem" padding="1rem">
                <Text color="#009070" fontWeight="bold" fontSize="xl">
                  FEATURED VIDEOS
                </Text>
                {Videos.map((el, i) => (
                  <Box key={i}>
                    <Box h="13.5rem" borderRadius="8px" marginTop="1rem">
                      <Image
                        borderRadius="8px"
                        boxSize="full"
                        src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_240/esci${el.imageUrl}`}
                      />
                      <Box
                        className="playbutton"
                        display="block"
                        h="3rem"
                        w="3rem"
                        borderRadius="50%"
                        transform={"translate(350%, -290%)"}
                        bg="#222;"
                      >
                        <Link href={`/video/${el.objectId}`}>
                          <Box
                            display="block"
                            transform={"translate(25%, 30%)"}
                          >
                            <AiFillCaretRight size="1.8rem" color=" white" />
                          </Box>
                        </Link>
                      </Box>
                    </Box>
                    <Box marginTop="0.5rem">
                      <Link
                        href={`/video/${el.objectId}`}
                        fontWeight="650"
                        fontSize="xl"
                      >
                        {el.title}
                      </Link>
                      <Text>
                        <Moment fromNow>{el.publishedAt}</Moment>
                      </Text>
                    </Box>
                  </Box>
                ))}
                <Box marginTop="1rem" textAlign="center">
                  <Button
                    w="10rem"
                    bg="#009270"
                    _hover="none"
                    color="white"
                    fontSize="19px"
                    borderRadius="none"
                  >
                    More Vidoes
                  </Button>
                </Box>
              </Box>
              {/* ****video**** */}
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
                src="https://s0.2mdn.net/simgad/3222827868381308334"
              />
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LiveScore;
