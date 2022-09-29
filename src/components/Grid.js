import { Center, Heading, SimpleGrid, Stack, Box, VStack, Icon, Text } from "@chakra-ui/react";
import { MdMobileFriendly, MdOutlineVideogameAsset, MdSecurity, MdOutlineWeb, MdOutlineDesignServices,
    MdOutlineHdrWeak
} from "react-icons/md";

function Grid() {
return (
<Stack bgColor={'white'}>
    <VStack justify='center' align={{base: 'center', md: 'center' }} margin={{base: '10', md: '10' }} spacing={5} data-aos="fade-down">
    <Heading textAlign={'center'} fontSize={{base: 'xl', md: '3xl' }}
    paddingBlockEnd={5}
    
    >
        O que podemos fazer pelo seu negócio?
    </Heading>
    <VStack >
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} >
        <Box className="boxgrid">
            <VStack justify='center' align={{base: 'center', md: 'center' }} margin={5}>
            <Icon color={'blue.400'} w={5} h={5} as={MdMobileFriendly} />
            <Heading fontSize={{base: 'md', md: 'xl' }} fontWeight='medium'>Desenvolvimento de Apps</Heading>
            <Heading as={'p'} color={'gray.700'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'}> Melhor empresa de desenvolvimento de aplicativos. Impulsione a eficiência operacional da sua empresa com aplicativos altamente interativos e inovadores.</Heading>
            </VStack>
        </Box>
        <Box className="boxgrid">
            <VStack justify='center' align={{base: 'center', md: 'center' }} margin={5}>
            <Icon color={'blue.400'} w={5} h={5} as={MdOutlineVideogameAsset} />
            <Heading fontSize={{base: 'md', md: 'xl' }} fontWeight='medium'>Aplicativos & Games</Heading>
            <Heading as={'p'} color={'gray.700'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'}>Melhor empresa de desenvolvimento de jogos multiplataforma para engajar e cativar usuários. Integre a gamificação na sua empresa e motive seus colaboradores.</Heading>
            </VStack>
        </Box>
        <Box className="boxgrid">
            <VStack justify='center' align={{base: 'center', md: 'center' }} margin={5}>
            <Icon color={'blue.400'} w={5} h={5} as={MdSecurity} />
            <Heading fontSize={{base: 'md', md: 'xl' }} fontWeight='medium'>Segurança Cibernética</Heading>
            <Heading as={'p'} color={'gray.700'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'}>Proteja-se com as melhores tecnologias de segurança cibernética. Fornecemos soluções robustas para proteger seus dados críticos e recursos de TI.</Heading>
            </VStack>
        </Box>

    </SimpleGrid>
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} paddingBlockStart={{base: '0', md: '5' }} >
        <Box className="boxgrid"> 
            <VStack justify='center' align={{base: 'center', md: 'center' }} margin={5}>
            <Icon color={'blue.400'} w={5} h={5} as={MdOutlineWeb} />
            <Heading fontSize={{base: 'md', md: 'xl' }} fontWeight='medium'>Desenvolvimento Web</Heading>
            <Heading as={'p'} color={'gray.700'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'}>Um time profissional de design de sites e plataformas web, oferecendo sites e soluçõesde alta qualidade, fáceis de usar e responsivos.</Heading>
            </VStack>
        </Box>
        <Box className="boxgrid">
            <VStack justify='center' align={{base: 'center', md: 'center' }} margin={5}>
            <Icon color={'blue.400'} w={5} h={5} as={MdOutlineDesignServices} />
            <Heading fontSize={{base: 'md', md: 'xl' }} fontWeight='medium'>UX / UI Design</Heading>
            <Heading as={'p'} color={'gray.700'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'}>Desenvolvemos aplicações pensadas na experiência do usuário com um layout cativante para representar artisticamente o conceito da sua marca.</Heading>
            </VStack>
        </Box>
        <Box className="boxgrid">
            <VStack justify='center' align={{base: 'center', md: 'center' }} margin={5}>
            <Icon color={'blue.400'} w={5} h={5} as={MdOutlineHdrWeak} />
            <Heading fontSize={{base: 'md', md: 'xl' }} fontWeight='medium'>Marketing Digital</Heading>
            <Heading as={'p'} color={'gray.700'} textAlign='justify' margin={{base: '5', md: '0' }} size={'md'} fontWeight={'normal'} >EstabeleceMOS a presença online da marca com ferramentas de trabalho comprovadas. Modernize sua empresa com as soluções de Marketing da Interas.</Heading>
            </VStack>
        </Box>

    </SimpleGrid>
    </VStack>
</VStack>
</Stack>
);
}
export default Grid;