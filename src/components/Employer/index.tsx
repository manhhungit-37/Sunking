import { Container, Box, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';

import EmployerBackground1 from '@/assets/png/employer-bg-1.png';
import EmployerBackground2 from '@/assets/png/employer-bg-2.png';
import EmployerBackground3 from '@/assets/png/employer-bg-3.png';

function Employer() {
  return (
    <Box
      bg="linear-gradient(280.37deg, #E5EDFB 0%, rgba(229, 237, 251, 0.12) 100%), #fff;"
      position="relative"
    >
      <Container p="80px 100px" position="relative" zIndex={10}>
        <Box textAlign="center">
          <Box
            as="h2"
            fontSize="57px"
            fontWeight={700}
            lineHeight="64px"
            color="trGray.500"
            m="0 110px 12px 0"
          >
            Introduce About    
          </Box>
          <Box
            as="h2"
            fontSize="57px"
            lineHeight="64px"
            fontWeight={700}
            color="trPrimary.50"
            ml="230px"
          >
          Employers
          </Box>
        </Box>
        <Box
          fontWeight={500}
          color="trGray.500"
          bg="rgba(255, 255, 255, 0.6)"
          backdropFilter="blur(20px)"
          borderRadius="20px"
          p="32px"
          mt="40px"

        >
          <Grid templateColumns="repeat(3, auto)" columnGap="100px" rowGap="32px">
            <GridItem>
              <Box fontSize="32px" lineHeight="40px" fontWeight={700} color="trPrimary.100">
                30.000+
              </Box>
              <Box>The candidate is actively looking for a job on an average/time basis.</Box>
            </GridItem>
            <GridItem>
              <Box fontSize="32px" lineHeight="40px" fontWeight={700} color="trPrimary.100">
                90.000+
              </Box>
              <Box>The candidate is actively looking for a job on an average/time basis.</Box>
            </GridItem>
            <GridItem>
              <Box fontSize="32px" lineHeight="40px" fontWeight={700} color="trPrimary.100">
                120.000+
              </Box>
              <Box>The candidate is actively looking for a job on an average/time basis.</Box>
            </GridItem>
            <GridItem>
              <Box fontSize="32px" lineHeight="40px" fontWeight={700} color="trPrimary.100">
                200.000+
              </Box>
              <Box>The candidate is actively looking for a job on an average/time basis.</Box>
            </GridItem>
            <GridItem>
              <Box fontSize="32px" lineHeight="40px" fontWeight={700} color="trPrimary.100">
                3.000.000+
              </Box>
              <Box>The candidate is actively looking for a job on an average/time basis.</Box>
            </GridItem>
          </Grid>
        </Box>
      </Container>
      <Box position="absolute" bottom="0px" left="262px" w="360px" h="376px">
        <Image src={EmployerBackground1} alt="Employer" fill sizes="360px" />
      </Box>
      <Box position="absolute" top="40px" left="0px" w="322px" h="336px">
        <Image src={EmployerBackground2} alt="Employer" fill sizes="322px" />
      </Box>
      <Box position="absolute" bottom="0px" right="0px" w="322px" h="336px">
        <Image src={EmployerBackground3} alt="Employer" fill sizes="322px" />
      </Box>
    </Box>
  );
};

export default Employer;