import { Heading, HStack, Image, Stack, Box, Flex, Center, SimpleGrid, color, VStack, Button, Text, Icon } from "@chakra-ui/react";
import app from '../assets/apps.webp';
import { MdArrowForward } from "react-icons/md";



function AppBuild() {
return (
<Stack bgColor={'gray.800'}>
<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} paddingBlockStart={10}>
<VStack justify='center' align={{base: 'center', md: 'start' }} margin={{base: '', md: '20' }} spacing='3'
paddingLeft={{ base: '', md: '50px' }} 
>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

<Heading fontSize={{ base: 'xl', md: '5xl' }} color='white'
    >
    Desenvolvimento de Aplicações
</Heading>
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<Heading fontSize={{ base: 'lg', md: '3xl' }} color='white'
    >
    Construa o app ideal para sua empresa
</Heading>
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<Heading as={'p'} color={'white'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'}>Por meio de um app, uma empresa pode ter um espaço para tirar dúvidas e conhecer as ideias dos clientes para tornar o negócio mais atrativo. Tão importante quanto ter um canal para interagir com os stakeholders é fornecer um feedback das mensagens enviadas pelos clientes por meio do aplicativo.</Heading>
</div>
<a href="#contact">
<Button colorScheme={'blue'} variant='outline'>Conheça Mais</Button>
</a>
</VStack>
<HStack justify='center' align='center' margin={{base: '', md: '20' }} spacing='3'>
<div data-aos="fade-up-left">
<Image className="apps" src={app} w={{ base: '250px', md: '440px' }} borderRadius={15}/>
</div>
</HStack>
</SimpleGrid>
</Stack>
);
}
export default AppBuild;