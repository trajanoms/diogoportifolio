import { useState, useEffect } from "react";
import { Heading, HStack, Image, Stack, Box, Flex, Center, SimpleGrid, color, VStack, Button, Text } from "@chakra-ui/react";
import headerImg from "../assets/logo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 800);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Aplicativos Incríveis", "RPAs Eficientes", "Plataformas modernas" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
  
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <Heading fontSize={{ base: '5xl', md: '8xl' }} color='gray.700'
    >{`Criamos`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Aplicativos Incríveis", "RPAs Eficientes", "Plataformas modernas" ]'><span className="wrap">{text}</span></span></Heading>
              </div>}
            </TrackVisibility>
  )
}