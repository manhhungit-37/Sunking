import { Grid, GridItem, Box, Text, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import TickIcon from '@/assets/icons/TickIcon';

import opportunity from '@/assets/png/opportunity.png';
import GooglePlayIcon from '@/assets/icons/GooglePlayIcon';
import AppleStoreIcon from '@/assets/icons/AppleStoreIcon';

function Opportunity() {
  return (
    <Container p="181px 55px 80px 100px">
      <Grid templateColumns="repeat(2, auto)" alignItems="center">
        <GridItem>
          <Box
            as="h2"
            fontSize="57px"
            fontWeight={700}
            lineHeight="64px"
            color="trGray.500"
          >
            The golden opportunity is in
            <Text
              as="span"
              color="trPrimary.50"
            > your hands.</Text>
          </Box>
          <Box my="40px">
            <Flex columnGap="12px" mb="8px">
              <TickIcon fontSize="24px"/>
              <Box color="trGray.500">Create your CV and profile directly on your phone.</Box>
            </Flex>
            <Flex columnGap="12px" mb="8px">
              <TickIcon fontSize="24px"/>
              <Box color="trGray.500">Search and apply for jobs quickly and easily, anytime, anywhere.</Box>
            </Flex>
            <Flex columnGap="12px">
              <TickIcon fontSize="24px"/>
              <Box color="trGray.500">Contact recruiters through TopCV Connect.</Box>
            </Flex>
          </Box>
          <Box>
            <Box
              fontWeight={700}
              color="trGray.500"
              mb="16px"
            >
              Download the job search app now.
            </Box>
            <Flex columnGap="8px">
              <GooglePlayIcon w="152px" h="auto" />
              <AppleStoreIcon w="152px" h="auto" />
            </Flex>
          </Box>
        </GridItem>
        <GridItem>
          <Box w="594px" h="653px" pos="relative">
            <Image src={opportunity} alt="Opportunity" fill sizes="594px" />
          </Box>
        </GridItem>
      </Grid>  
    </Container>
    
  );
}

export default Opportunity;