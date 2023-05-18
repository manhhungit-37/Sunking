import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import EmployerStar from '@/assets/png/employer-star.png';
import EmployerFeatureManPNG from '@/assets/png/employer-feature-man.png';

function EmployerSlider() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bgImage="url(/png/employer-banner-2.png)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py="80px"
    >
      <Box
        position="relative"
        w="100%"
        maxW="1440px"
        mx="auto"
        pb="90px"
      >
        <Box
          bg="rgba(246, 249, 254, 0.6)"
          backdropFilter="blur(20px)"
          borderRadius="12px"
          p="32px"
          position="relative"
          zIndex={1}
          maxW="704px"
          mx="auto"
        >
          <Text fontSize="36px" lineHeight="44px" fontWeight={700}>Employers</Text>
          <Box w="640px" bg="trWhite" borderRadius="8px" py="24px" my="32px">
            <Text fontSize="16px" lineHeight="24px" fontWeight={500}>Adjustable Information</Text>
          </Box>
          <Flex columnGap="32px">
            <Button variant="primary" flex={1}>
              POST JOBS
            </Button>
            <Button variant="white" flex={1}>
              SOURCE CANDIDATES
            </Button>
          </Flex>
          <Box position="absolute" top="-25px" right="-3px">
            <Image src={EmployerStar} alt="Star" width={121} height={46} />
          </Box>
        </Box>
        <Box position="absolute" top="-35px" right="0px">
          <Image src={EmployerFeatureManPNG} alt="Star" width={640} height={427} />
        </Box>
      </Box>
    </Flex>);
}

export default EmployerSlider;