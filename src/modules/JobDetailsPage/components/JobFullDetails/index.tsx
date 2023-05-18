import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import {Fragment} from 'react';
import Image from 'next/image';
import { ListingData } from '@/constant/listings';
import ButtonsTrio from '@/components/ButtonsTrio';
import JobGeneralDetails from '../JobGeneralDetails';
import { ClockIcon } from '@/assets/icons/ClockIcon';
import LocationPinIcon from '@/assets/icons/LocationPinIcon';

interface Props {
  activeListing: ListingData;
}

function JobFullDeatils({ activeListing }: Props) {
  return (
    <Box>
      <Flex mb="24px">
        <Box mr="16px" minWidth="62px">
          <Image src={activeListing?.image} width="62" height="62" alt="" />
        </Box>

        <Box>
          <Text
            mb="8px"
            fontWeight="700"
            color="trPrimary.50"
            decoration="underline"
            fontSize="24px"
            lineHeight="32px"
          >
            {activeListing?.company}
          </Text>
          <Text fontSize="14px" lineHeight="20px" color="trGray.300">
            {activeListing?.employees} employees
          </Text>
        </Box>
      </Flex>

      <Divider borderColor="trGray.200" my="24px" />

      <Box>
        <Text
          fontSize="32px"
          lineHeight="40px"
          fontWeight={700}
          color="trGray.500"
          mb="16px"
        >
          {activeListing?.description}
        </Text>

        <Text fontSize="14px" lineHeight="20px" mb="16px" color="trGray.500">
          <Text color="trGray.300" as="span">
            <ClockIcon fontSize="24px" />
          </Text>{' '}
          {activeListing?.dateStart} - {activeListing?.dateEnd}
        </Text>

        <Flex gap="10px" mb="16px">
          <Button variant="stone">Up ${activeListing?.salaryUSD}</Button>
          <Button variant="stone">
            <Box mr="7px">
              <LocationPinIcon fontSize="20px" />
            </Box>
            {activeListing?.location}
          </Button>
        </Flex>

        <ButtonsTrio isSaved={activeListing?.saved} id={activeListing?.id} />
      </Box>

      <Box borderTop="1px solid" borderColor="trGray.200" my="24px"></Box>

      {activeListing.conditions && (
        <Flex gap="16px">
          {activeListing.conditions.map(({ condition, expected }, index) => {
            return (
              <Fragment key={index}>
                <Box borderLeft={index === 0 ? 'none' : '1px solid'} borderColor="trGray.400"></Box>
                <Box w="100%">
                  <Text fontSize="14px" lineHeight="20px" color="trGray.300" mb="4px">
                    {condition}
                  </Text>
                  <Text fontWeight={700} color="trGray.500">
                    {expected}
                  </Text>
                </Box>
              </Fragment>
            );
          })}
        </Flex>
      )}
      <Box borderTop="1px solid" borderColor="trGray.200" my="24px"></Box>

      <JobGeneralDetails activeListing={activeListing} />
    </Box>
  );
}

export default JobFullDeatils;
