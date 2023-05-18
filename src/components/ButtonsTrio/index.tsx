import { memo } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { SendIcon } from '@/assets/icons/SendIcon';
import { HeartIcon } from '@/assets/icons/HeartIcon';
import { HeartSolidIcon } from '@/assets/icons/HeartSolidIcon';
import { ShareIcon } from '@/assets/icons/ShareIcon';
import { useJobsDispatch } from '@/contexts/JobsContext/JobsContext';
import { Action } from '@/contexts/JobsContext/jobsReducer';

interface Props {
  isSaved?: boolean;
  id: string;
}

function ButtonsTrio({ isSaved, id }: Props) {
  const dispatch = useJobsDispatch() as React.Dispatch<Action>;
  return (
    <Flex gap="8px" mb="16px">
      <Button w="100%">
        <SendIcon fontSize="24px" mr="8px" /> Apply now
      </Button>
      <Button
        bg="trGray.500"
        color="trGray.100"
        w="100%"
        onClick={() =>
          dispatch({ type: isSaved ? 'UNSAVE_JOB' : 'SAVE_JOB', id })
        }
      >
        {isSaved ? <HeartSolidIcon fontSize="24px" mr="8px" /> : <HeartIcon fontSize="24px" mr="8px" />}
        Save
      </Button>
      <Button variant="white" w="100%">
        <ShareIcon fontSize="24px" mr="8px" />
        Share
      </Button>
    </Flex>
  );
};

export default memo(ButtonsTrio);
