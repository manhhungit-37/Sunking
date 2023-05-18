import { Box, Divider, Flex, Heading } from '@chakra-ui/react';
import { useCallback, useState, useMemo } from 'react';
import { AppData } from '@/contexts/JobsContext/initialData';
import { Action } from '@/contexts/JobsContext/jobsReducer';
import ListingSideInfo from '@/components/ListingSideInfo';
import Pagination from '@/components/Pagination';
import { useJobs, useJobsDispatch } from '@/contexts/JobsContext/JobsContext';
import Listing from '@/components/Listing';

const LISTINGS_PER_PAGE = 7;

function ListJob() {
  const [currentPage, setCurrentPage] = useState(1);

  const { listings: listingsData, activeListing, page } = useJobs() as AppData;
  const dispatch = useJobsDispatch() as React.Dispatch<Action>;

  const currentListings = useMemo(() => {
    return listingsData.slice(
      (page - 1) * LISTINGS_PER_PAGE,
      (page) * LISTINGS_PER_PAGE
    );
  }, [page, listingsData]);

  const toggleActiveListing = useCallback((id: string, index: number) => {
    if (activeListing?.id !== id) {
      dispatch({
        type: 'SET_ACTIVE_LISITNG',
        listing: currentListings[index],
      });
    }
  }, [activeListing, currentListings, dispatch]);
  return (
    <Box>
      <Heading mb="24px">Job Recommended</Heading>
      <Divider borderColor="trGray.200" mb="24px" />

      <Flex justify="space-between" align="flex-start" gap="32px">
        <Box flex="1" minWidth="350px">
          <Flex direction="column">
            {currentListings.map((listing, i) => (
              <Listing
                key={listing.id}
                tagged={currentListings[i].saved}
                active={listing.id === activeListing?.id}
                data={listing}
                onClick={() => toggleActiveListing(listing.id, i)}
                rounded
              />
            ))}
          </Flex>
        </Box>

        <Box
          bg="trWhite"
          w="58.5%"
          minWidth="296px"
          minHeight="500px"
          p="16px"
          borderRadius="8px"
          border="1px solid"
          borderColor="trGray.400"
        >
          {activeListing && (
            <ListingSideInfo activeListing={activeListing} />
          )}
        </Box>
      </Flex>
      <Pagination
        currentPage={currentPage}
        totalCount={listingsData.length}
        pageSize={LISTINGS_PER_PAGE}
        onPageChange={page => setCurrentPage(page)}
      />
    </Box>
  );
}

export default ListJob;