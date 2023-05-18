import { Box, Flex, Text, Spacer, IconButton, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { TaggedIcon } from '@/assets/icons/TaggedIcon';
import { TaggedActiveIcon } from '@/assets/icons/TaggedActiveIcon';
import { ListingData } from '@/constant/listings';
import { useJobsDispatch } from '@/contexts/JobsContext/JobsContext';
import { Action } from '@/contexts/JobsContext/jobsReducer';
import TriangleIcon from '@/assets/icons/TriangleIcon';

interface Props {
  tagged?: boolean;
  active?: boolean;
  data: ListingData;
  onClick?: () => void;
  rounded?: boolean;
  isDefaultRadius?: boolean;
}

function Listing({ tagged = false, active, data, onClick, rounded, isDefaultRadius = false }: Props) {
  const dispatch = useJobsDispatch() as React.Dispatch<Action>;

  const tagJob = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: 'SAVE_JOB', id: data.id });
  };

  const untagJob = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch({ type: 'UNSAVE_JOB', id: data.id });
  };

  return (
    <Box
      position="relative"
      p="15px"
      bg="trWhite"
      w="100%"
      border="2px solid"
      borderColor={active ? 'trPrimary.50' : 'trGray.400'}
      rounded={isDefaultRadius && rounded ? '8px' : '0px'}
      onClick={onClick}
      cursor="pointer"
      role="group"
      _hover={{
        border: '2px solid #1852B4',
        boxShadow: '0px 4px 16px rgba(36, 109, 219, 0.24)',
        borderRadius: rounded ? '8px' : '0px',
      }}
    >
      <Flex>
        <Box mr="16px">
          <Image src={data.image} width={62} height={62} alt="" />
        </Box>
        <Box>
          <Text
            color="trGray.500"
            fontWeight={700}
            mb="4px"
            _groupHover={{
              color: 'trPrimary.50',
              textDecoration: 'underline'
            }}
          >
            {data.position}
          </Text>
          <Text>{data.company}</Text>
        </Box>
      </Flex>
      <Text mt="10px" color="trGray.500">
        <Text as="span" color="trGray.300">
          Date
        </Text>
        : {data.dateStart} - {data.dateEnd}
      </Text>
      <Flex mt="10px">
        <Flex gap="10px">
          <Button variant="stone">Up ${data.salaryUSD}</Button>
          <Button variant="stone">{data.location}</Button>
        </Flex>

        <Spacer />
        {tagged ? (
          <IconButton
            aria-label="Untag job"
            bg="none"
            icon={<TaggedActiveIcon w="32px" h="32px" />}
            onClick={(e) => untagJob(e)}
          />
        ) : (
          <IconButton
            aria-label="Tag job"
            bg="none"
            p="0"
            icon={<TaggedIcon w="32px" h="32px" />}
            onClick={(e) => tagJob(e)}
          />
        )}
      </Flex>
      {active && (
        <Box position="absolute" top="45%" right="-38px">
          <TriangleIcon width={16} height={19.5} />
        </Box>
      )}
    </Box>
  );
}

export default Listing;
