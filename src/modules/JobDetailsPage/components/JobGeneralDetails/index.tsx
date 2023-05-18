import { ListingData } from '@/constant/listings';
import { Box, Flex, Text } from '@chakra-ui/react';

interface Props {
  activeListing: ListingData;
}

export default function JobGeneralDetails({ activeListing }: Props) {
  return (
    <Box>
      <Text fontWeight={700} fontSize="24px" lineHeight="32px" mb="16px">
        Job General
      </Text>

      <Flex gap="32px">
        <Flex direction="column" w="100%" gap="16px">
          <Flex gap="8px">
            <Text
              minW="124px"
              color="trGray.300"
              fontSize="14px"
              lineHeight="20px"
              fontWeight={500}
            >
              Job Type
            </Text>
            <Text fontWeight={700}>
              Store management/Customer service/Quality and standard management
            </Text>
          </Flex>

          <Flex gap="8px">
            <Text
              minW="124px"
              color="trGray.300"
              fontSize="14px"
              lineHeight="20px"
              fontWeight={500}
            >
              Quanity
            </Text>
            <Text fontWeight={700}>2 - 5</Text>
          </Flex>
        </Flex>

        <Flex direction="column" w="100%" gap="16px">
          <Flex gap="8px">
            <Text
              minW="124px"
              color="trGray.300"
              fontSize="14px"
              lineHeight="20px"
              fontWeight={500}
            >
              Location
            </Text>
            <Text fontWeight={700}>{activeListing.locationFull}</Text>
          </Flex>

          <Flex gap="8px">
            <Text
              minW="124px"
              color="trGray.300"
              fontSize="14px"
              lineHeight="20px"
              fontWeight={500}
            >
              Employer type
            </Text>
            <Text fontWeight={700}>Qualification Requirements</Text>
          </Flex>

          <Flex gap="8px">
            <Text
              minW="124px"
              color="trGray.300"
              fontSize="14px"
              lineHeight="20px"
              fontWeight={500}
            >
              Experied date
            </Text>
            <Text fontWeight={700}>31/05/2032</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
