
import { AspectRatio, Box, Button, Image, Input, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import Moment from "react-moment";
import { useParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};
function Video() {
  const { video_id } = useParams();
  const [video,setVideo]=useState({})
  const [Videos,setVideos]=useState([])
  let id = video_id;

  useEffect(() => {
    getVideo(id);
  },[id]);
  function getVideo(id) {
    getData(
      `https://hs-consumer-api.espncricinfo.com/v1/pages/video/home?country=in&videoId=1337591`
    )
      .then((res) => {
        console.log(res);
        setVideos(res.content.trendingVideos)
        setVideo(res.video)
      })
      .catch((err) => {
        alert("page not found");
      });
  }
// console.log(video)
  return (
    <Box w="95%" h="120rem" margin="auto">
      <Box bg="#ffffff" h="auto" display="flex" w="full">
        <Box
          borderRight="1px solid rgb(236, 235, 235)"
          padding="2rem"
          h="115rem"
          w="70%"
        >
          <Box  h="25rem">
            <AspectRatio maxW="full" maxH="full" ratio={1}>
              <iframe
                w="560"
                h="315"
                src="https://www.youtube.com/embed/zEimwtThW14"
                title="YouTube video player"
             
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                
              />
            </AspectRatio>
          </Box>
          <Box  marginTop="1rem">
            <Text fontWeight="bold" fontSize="2rem">{video.title}</Text>
          </Box>
          <Box marginTop="1rem">
            <Text ><Moment format="LLLL">{video.publishedAt}</Moment></Text>
          </Box>
          <Box display="flex" gap="1rem" marginTop="1rem" borderTop="1px solid rgb(236, 235, 235)" paddingTop="1rem">
            <Box  h="4rem" borderRadius="50%" w="4rem">
                <Image boxSize="full"   borderRadius="50%" src="https://www.cricbuzz.com/a/img/v1/100x100/i1/c130699/cms-img.jpg"/>
            </Box>
            <Box>
                <Text fontSize="20px">{video.genreName}</Text>
            </Box>
          </Box>
          <Box>
            <Text fontSize="22px" marginTop="1rem" color="gray">{video.summary}</Text>
          </Box>
          <Box>
            <Text marginTop="1rem" fontWeight="bold" fontSize="2rem" >COMMENTS</Text>
          </Box>
          <Input borderRadius="none" placeholder='Add comments......' size='lg' marginTop="3rem" />
        </Box>
        <Box h="50rem" w="30%" padding="0.8rem">
            <Box h="17rem" >
              <Image boxSize="full" src="https://tpc.googlesyndication.com/simgad/17077430518705938593"/>
            </Box>
             <Box>
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
                      transform={"translate(300%, -290%)"}
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
        </Box>
      </Box>
    </Box>
  );
}

export default Video;
