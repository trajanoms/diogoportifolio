import { Box, VStack, Text, Flex, Icon, Heading } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";

 function Footer() {
        return (
            <Box bgColor='gray.800'>
            <VStack padding={5} >
            <Text as={'p'} color={'white'} textAlign='center' fontSize={'16px'} fontWeight={'normal'}>© 2022 Todos os direitos reservados | Interas</Text>
        </VStack>
        </Box>
);
}
export default Footer;