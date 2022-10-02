import {
  Box,
  Button,
  Divider,
  HStack,
  Image,
  Text,
 Link
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./navbar.css";
import Moment from "react-moment";
import { AiFillCaretRight } from "react-icons/ai";
import Carousel from "./Feature";
// import {Link} from "react-router-dom"

function Home() {
  const [data, setData] = useState([]);
  const [fect, setFect] = useState(false);
  const [vid, setVideo] = useState([]);
  const [fect1, setFect1] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [sedule, setSedule] = useState([]);
  const options = {
    method: "GET",
    url: "https://hs-consumer-api.espncricinfo.com/v1/pages/story/news?lang=en&page=1",
  };
  const options2 = {
    method: "GET",
    url: "https://hs-consumer-api.espncricinfo.com/v1/pages/video/latest?country=in",
  };
  const options3 = {
    method: "GET",
    url: "https://hs-consumer-api.espncricinfo.com/v1/pages/gallery",
  };
  const options5 = {
    method: "GET",
    url: "https://hs-consumer-api.espncricinfo.com/v1/edition/details?lang=en&edition=in&navigation=true&trendingMatches=true&keySeriesItems=true&sponsoredItems=true&promotedItems=true",
  };
  useEffect(() => {
    fecthData();
    fecthData2();
    fecthData4();
    fecthData5();
    // datamaping()
  }, []);
  function fecthData() {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.content.stories);
        setData(response.data.content.stories.results);
        setFect(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function fecthData5() {
    axios
      .request(options5)
      .then(function (response) {
        // console.log(response.data.trendingMatches.matches);
        setSedule(response.data.trendingMatches.matches);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function fecthData4() {
    axios
      .request(options3)
      .then(function (response) {
        // console.log(response.data.content.galleries.results);
        setPhotos(response.data.content.galleries.results);
      })
      .catch(function (error) {
        console.error(error);
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
  // console.log(data);
  var Latest = [];
  if (fect) {
    Latest = getData();
  }
  function getData() {
    let newData = [];
    for (var i = 0; i < 10; i++) {
      newData.push(data[i]);
    }
    return newData;
  }
  var Latest2 = [];
  if (fect) {
    Latest2 = getData3();
  }
  function getData3() {
    let newData3 = [];
    for (var i = 10; i < 19; i++) {
      newData3.push(data[i]);
    }
    return newData3;
  }
  var Videos = [];
  if (fect1) {
    Videos = getData2();
  }
  function getData2() {
    let newData2 = [];
    for (var i = 0; i < 3; i++) {
      newData2.push(vid[i]);
    }
    return newData2;
  }
  var Photos = [];
  if (fect1) {
    Photos = getDataa();
  }
  function getDataa() {
    let newDa = [];
    for (var i = 0; i < 7; i++) {
      newDa.push(photos[i]);
    }
    return newDa;
  }

  console.log(Videos);
  return (
    <>
    <Carousel/>
    <Box w="95%"  margin={"auto"}   >
      <Box display="flex" justifyContent="space-between" w="full" marginTop="-1.3rem" h="auto"  >
        <Box h="full" w="17rem">
          <Box h="92rem" w="full" bg="#ffffff" marginTop="-0.9rem">
            <Box marginTop="0.8rem" marginLeft="2rem">
              <Text color="#009070" fontWeight="bold" fontSize="xl">
                LATEST NEWS
              </Text>
            </Box>
            {Latest.map((el, i) => (
              <Box
                key={i}
                marginTop="0.8rem"
                marginLeft="2rem"
                w="13.5rem"
                borderBottom="1px solid #dad3d3"
              >
                <Link
                  href={`/users/${el.objectId}`}
                  // as={ReachLink} 
                  marginTop="0.5rem"
                  fontSize="18px"
                  color="#222"
                  fontWeight="500"
                  
               
                >
                  {el.title}
                </Link>
                <Text paddingBottom="0.5rem">
                  <Moment fromNow>{el.publishedAt}</Moment>
                </Text>
              </Box>
            ))}
            <Box marginTop="0.6rem" marginLeft="2rem">
              <Link fontStyle="italic" color="blue">
                More News
              </Link>
            </Box>
          </Box>
          <Box marginTop="0.8rem" h="102rem" bg="#ffffff" padding="0.8rem">
            {" "}
            <Text color="#009070" fontWeight="bold" fontSize="xl">
              LATEST PHOTOS
            </Text>
            {Photos.map((el, i) => (
              <Box key={i}>
                <Box h="7.5rem" borderRadius="8px" marginTop="0.8rem">
                  <Image
                    borderRadius="8px"
                    boxSize="full"
                    src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci${el.image.url}`}
                  />
                </Box>
                <Box marginTop="0.5rem">
                  <Link fontWeight="400" fontSize="xl">
                    {el.title}
                  </Link>
                </Box>
                <Text paddingBottom="0.5rem">
                  <Moment fromNow>{el.publishedAt}</Moment>
                </Text>
                <Divider />
              </Box>
            ))}
            <Box marginTop="0.6rem">
              <Link fontStyle="italic" color="blue">
                More Photos
              </Link>
            </Box>
          </Box>
          <Box marginTop="0.8rem" h="auto" bg="#ffffff" padding="0.8rem">
            <Text color="#009070" fontWeight="bold" fontSize="xl">
              SCHEDULE
            </Text>
            {sedule.map((el,i) => (
              <Box
                marginTop="0.8rem"
                w="full"
                // border="1px solid red"
                borderBottom="1px solid #dad3d3"
                key={i}
              >
                <Link
                  marginTop="0.5rem"
                  fontSize="18px"
                  color="#222"
                  fontWeight="500"
                >
                  {el.series.alternateName} ,{el.title}
                </Link>
                <Text fontSize="15px" paddingTop="0.6rem" paddingBottom="1rem">
                  {/* Fri Sep 30 • 8:00 PM GMT */}
                  <Moment format="LLLL">{el.startDate}</Moment>
                </Text>
              </Box>
            ))}
            <Box marginTop="0.6rem">
              <Link fontStyle="italic" color="blue">
                More Matches..
              </Link>
            </Box>
          </Box>
        </Box>
        <Box w="35rem">
          <Box
            w="35rem"
            bg="#ffffff"
            h="auto"            
            padding="1rem"
         
          >
            {Latest.map((el, i) => (
              <Box key={i}>
                <Box>
                  <Text color="#7f8383">{el.categoryType}</Text>
                </Box>
                <Box h="18rem" borderRadius="8px" marginTop="0.8rem">
                  <Image
                    borderRadius="8px"
                    boxSize="full"
                    src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci${el.image.url}`}
                  />
                </Box>
                <Box marginTop="1rem">
                  <Link href={`/users/${el.objectId}`} fontWeight="bold" fontSize="3xl">
                    {el.title}
                  </Link>
                </Box>
                <Box marginTop="0.5rem">
                  <Text color="#7f8383" fontSize="17px" fontWeight="500">
                    {el.summary}
                  </Text>
                </Box>
                <Box marginTop="1rem" marginBottom="1.5rem">
                  <Text color="#1866DB" fontSize="19px" fontWeight="500">
                    {el.image.caption}
                  </Text>
                </Box>
                <Divider />
              </Box>
            ))}
          </Box>
        </Box>
        <Box h="full" w="25rem" >
          <Box bg="#ffffff" padding="0.4rem" w="full" h="22rem">
            <Image boxSize="full" src="https://tpc.googlesyndication.com/simgad/18392794220762119992"/>
          </Box>
          <Box bg="#ffffff" w="full" h="70rem" marginTop="0.8rem">
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
                      <Link href={`/video/${el.objectId}`} >
                      <Box display="block" transform={"translate(25%, 30%)"}>
                        <AiFillCaretRight size="1.8rem" color=" white" />
                      </Box>
                      </Link>
                      
                    </Box>
                  </Box>
                  <Box marginTop="0.5rem">
                    <Link  href={`/video/${el.objectId}`} fontWeight="650" fontSize="xl">
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
          </Box>
          <Box marginTop="0.8rem" padding="0.4rem" bg="#ffffff" w="full" h="22rem">
          <Image boxSize="full" src="https://s0.2mdn.net/simgad/17522800239581062037"/>
          </Box>
          <Box
            marginTop="0.8rem"
            bg="#ffffff"
            w="full"
            h="auto"
            padding="1rem"
          >
            <Text color="#009070" fontWeight="bold" fontSize="xl">
            SPECIALS
            </Text>

            {Latest2.map((el, i) => (
              <Box key={i}>
                <Box h="13.5rem" borderRadius="8px" marginTop="0.8rem">
                  <Image
                    borderRadius="8px"
                    boxSize="full"
                    src={`https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci${el.image.url}`}
                  />
                </Box>
                <Box marginTop="1rem">
                  <Link href={`/users/${el.objectId}`} fontWeight="650" fontSize="20px">
                    {el.title}
                  </Link>
                </Box>
                <Box marginTop="0.5rem">
                  <Text color="#7f8383" fontSize="19px" fontWeight="500">
                    {el.summary}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
          <Box marginTop="0.8rem" padding="0.4rem" bg="#ffffff" w="full" h="22rem">
          <Image boxSize="full" src="https://s0.2mdn.net/simgad/16946756515499873491"/>
          </Box>
        </Box>
      </Box>
 
    </Box>
    </>
  );
}

export default Home;
