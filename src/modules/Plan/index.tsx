import { Box, Button, Flex, Text } from '@chakra-ui/react';
import SilverImage from '@/assets/png/silver.png';
import GoldImage from '@/assets/png/gold.png';
import DiamondImage from '@/assets/png/diamond.png';
import PlanItem from './components/PlanItem';

function Plan() {
  return (
    <Box
      bg="trPrimary.200"
    >
      <Box
        maxW="1440px"
        mx="auto"
        p="40px"
      >
        <Box
          bg="trWhite"
          borderRadius="8px"
          p="24px"
        >
          <Text
            fontSize="32px"
            lineHeight="40px"
            fontWeight={700}
            color="trGray.500"
            textAlign="center"
            mb="40px"
          >
            Plan Your Post
          </Text>
          <Flex align="center" columnGap="24px">
            <PlanItem image={SilverImage} name="silver" price="4.99" />
            <PlanItem image={GoldImage} name="gold" price="9.99" />
            <PlanItem image={DiamondImage} name="diamond" price="14.99" />
          </Flex>
        </Box>
        <Box
          bg="trWhite"
          borderRadius="8px"
          p="24px"
          mt="80px"
        >
          <Text
            fontSize="32px"
            lineHeight="40px"
            fontWeight={700}
            color="trGray.500"
            textAlign="center"
            mb="40px"
          >
            Search Candidate
          </Text>
          <Flex align="center" columnGap="24px">
            <PlanItem image={SilverImage} name="silver" price="4.99" />
            <PlanItem image={GoldImage} name="gold" price="9.99" />
            <PlanItem image={DiamondImage} name="diamond" price="14.99" />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Plan;