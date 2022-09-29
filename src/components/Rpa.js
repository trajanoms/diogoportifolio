import { Heading, HStack, Image, Stack, Box, Flex, Center, SimpleGrid, color, VStack, Button, Text, Icon } from "@chakra-ui/react";
import rpa from '../assets/rpa.png';
import { MdArrowForward } from "react-icons/md";



function Rpa() {
return (
<Stack bgColor={'gray.800'} paddingBottom={5}>
<SimpleGrid columns={{ base: 1, md: 2 }} paddingBlockStart={10}>
<HStack justify='center' align='center' margin={{base: '', md: '20' }} spacing='3'>
<div data-aos="fade-up-right">
<Image className="apps" src={rpa} w={{ base: '250px', md: '440px' }} borderRadius={15}/>
</div>
</HStack>
<VStack justify='center' align={{base: 'center', md: 'start' }} margin={{base: '', md: '20' }} spacing='3'
>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">

<Heading fontSize={{ base: 'xl', md: '5xl' }} color='white'
    >
    Desenvolvimento de RPAs
</Heading>
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<Heading fontSize={{ base: 'lg', md: '3xl' }} color='white'
    >
    Automatize Processos!
</Heading>
</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<Heading as={'p'} color={'white'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'}>A maioria das ferramentas de RPA é executada em estações de trabalho independentes e treinada para realizar tarefas rotineiras, como mover linhas de um banco de dados para uma planilha. Ainda que individualmente os robôs se concentrem apenas em tarefas simples, juntos eles geram diversos benefícios. Como parte da estratégia de gerenciamento de processos de negócios (BPM) de uma organização, a RPA pode desempenhar um papel fundamental no aumento da eficiência das operações.</Heading>
</div>
<a href="#contact">
<Button colorScheme={'blue'} variant='outline'>Conheça Mais</Button>
</a>
</VStack>
</SimpleGrid>
</Stack>
);
}
export default Rpa;