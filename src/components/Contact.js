import logoImg from '../assets/logowhite.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Image,
    useClipboard,
    Tooltip,
    Center,
    Select,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';

  import {
    SiWhatsapp,
    SiInstagram,
  } from 'react-icons/si'

  import { BsPerson } from 'react-icons/bs';

  import { FaLinkedinIn } from "react-icons/fa";

  import { useEffect } from 'react';
  
  
  export default function ContactFormWithSocialButtons () {

    useEffect(() => {
      Aos.init({duration: 1000, once: true });
  }, []);

    const { hasCopied, onCopy } = useClipboard('(84) 40420-130');

    return (
      <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden" id='contact' >
        <Flex data-aos="fade-up">
          <Box
            bg="gray.800"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box paddingTop={4} paddingBottom={4} paddingLeft={5}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem paddingLeft={4}>
                  <Box >
                  <Image src={logoImg} alt='logo'
                    w={60}
                    paddingLeft={12}
                    />
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">

                      <Tooltip
                        label={hasCopied ? 'Número Copiado!' : 'Copiar Número'}
                        bg='whiteAlpha.900'
                        color='blue.700'
                        borderRadius={5}
                        closeOnClick={false}
                        hasArrow
                        >
                        <Button
                          size="md"
                          height="48px"
                          width="100%"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB', }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" 
                          />}
                          onClick={onCopy}>
                          (84) 4042-0130
                        </Button>
                        </Tooltip>
                        <Button
                          size="md"
                          height="48px"
                          width="100%"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          comercial@interas.com.br
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="100%"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Natal, RN
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      justify='center'>
                      <a href='https://www.linkedin.com/company/interas-tecnologia/mycompany/'><IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<FaLinkedinIn size="28px" />}
                      /></a>
                      <a href='https://www.instagram.com/interasoficial/' target={'_blank'}><IconButton
                        aria-label="instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<SiInstagram size="28px" />}
                      /></a>
                      <a href='https://api.whatsapp.com/send?phone=558440420130&text=Gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20de%20Backup!%20%F0%9F%97%83%EF%B8%8F' target={'_blank'}><IconButton
                        aria-label="whatsapp"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<SiWhatsapp size="28px" />}
                      /></a>
                    </HStack>
                  </Box>
                </WrapItem>
                
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Seu Nome</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>E-mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mensagem</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="mensagem"
                          />
                        </FormControl>

                        <FormControl id="forms">
                          <FormLabel>Meu Interesse é em:</FormLabel>
                          <Select variant='filled'>
                            <option>EasyDev</option>
                            <option>EasyChat</option>
                            <option>CloudBackup</option>
                            <option>CloudServer</option>
                          </Select>
                        
                        </FormControl>

                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Enviar Mensagem
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }