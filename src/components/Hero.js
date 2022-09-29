import {
  Heading,
  HStack,
  Image,
  Stack,
  Box,
  Flex,
  Center,
  SimpleGrid,
  color,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import phone from "../assets/mockup.jpeg";
import fut from "../assets/chamado.png";
import novefm from "../assets/phone-98.jpeg";
import { motion } from "framer-motion";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";

function Hero() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Aplicativos Incríveis",
    "RPAs Eficientes",
    "Plataformas Modernas",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    setDelta(150 - Math.random() * 100);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Stack className="hero5">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={5}
        margin={{ base: "5", md: "" }}
      >
        <VStack
          justify="center"
          align={{ base: "center", md: "start" }}
          margin={{ base: "", md: "20" }}
          spacing="3"
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
              y: 25,
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Heading
                    fontSize={{ base: "5xl", md: "7xl" }}
                    color="gray.700"
                  >
                    {`Criamos`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Aplicativos Incríveis", "RPAs Eficientes", "Plataformas Modernas" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </Heading>
                </div>
              )}
            </TrackVisibility>
          </motion.div>
        </VStack>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.25,
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <HStack
            justify="center"
            align="center"
            margin={{ base: "10", md: "20" }}
            spacing="3"
          >
            <Image
              className="box5"
              src={novefm}
              w={{ base: "100px", md: "120px" }}
            />
            <Image
              className="boxe5"
              src={phone}
              w={{ base: "150px", md: "150px" }}
            />
            <Image
              className="box6"
              src={fut}
              w={{ base: "100px", md: "120px" }}
            />
          </HStack>
        </motion.div>
      </SimpleGrid>
    </Stack>
  );
}
export default Hero;
