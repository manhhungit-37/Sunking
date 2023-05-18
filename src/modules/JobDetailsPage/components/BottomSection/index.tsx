import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { ListingData } from '@/constant/listings';
import { SendIcon } from '@/assets/icons/SendIcon';
import { HeartIcon } from '@/assets/icons/HeartIcon';
import { HeartSolidIcon } from '@/assets/icons/HeartSolidIcon';
import { ShareIcon } from '@/assets/icons/ShareIcon';
import { ClockIcon } from '@/assets/icons/ClockIcon';
import { useJobsDispatch } from '@/contexts/JobsContext/JobsContext';
import { Action } from '@/contexts/JobsContext/jobsReducer';
import LocationPinIcon from '@/assets/icons/LocationPinIcon';

interface Props {
  activeListing: ListingData;
}

export default function BottomSection({ activeListing }: Props) {
  const dispatch = useJobsDispatch() as React.Dispatch<Action>;
  return (
    <Flex
      bg="trWhite"
      gap="100px"
      justify="space-between"
      align="flex-end"
      py="24px"
      px="40px"
      maxW="1440px"
      mx="auto"
    >
      <Box maxW="811px">
        <Text
          fontSize="24px"
          lineHeight="32px"
          fontWeight={700}
          color="trGray.500"
          mb="16px"
        >
          {activeListing.description}
        </Text>

        <Flex gap="10px" align="center">
          <Button variant="stone">Up ${activeListing.salaryUSD}</Button>
          <Button variant="stone">
            <Box mr="7px">
              <LocationPinIcon fontSize="20px" />
            </Box>
            {activeListing.location}
          </Button>
          <Text>
            <ClockIcon fontSize="24px" /> {activeListing.dateStart} - {activeListing.dateEnd}
          </Text>
        </Flex>
      </Box>

      <Box flex="1">
        <Button w="100%" mb="8px">
          <SendIcon fontSize="24px" mr="8px" /> Apply now
        </Button>
        <Flex gap="8px">
          <Button
            bg="trGray.500"
            color="trGray.100"
            w="100%"
            onClick={() =>
              dispatch({
                type: activeListing.saved ? 'UNSAVE_JOB' : 'SAVE_JOB',
                id: activeListing.id,
              })
            }
          >
            {activeListing.saved ? (
              <HeartSolidIcon fontSize="24px" mr="8px" />
            ) : (
              <HeartIcon fontSize="24px" mr="8px" />
            )}
            Save
          </Button>
          <Button variant="white" w="100%">
            <ShareIcon fontSize="24px" mr="8px" />
            Share
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
