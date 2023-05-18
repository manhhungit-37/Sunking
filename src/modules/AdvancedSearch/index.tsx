import { Box, Flex, Heading } from '@chakra-ui/react';
import { useMemo, useCallback, useState } from 'react';
import { AppData } from '@/contexts/JobsContext/initialData';
import { useJobs, useJobsDispatch } from '@/contexts/JobsContext/JobsContext';
import SearchFilters from './components/SearchFilters';
import Breadcrumbs from '@/components/Breadcrumbs';
import ListingSideInfo from '../../components/ListingSideInfo';
import { Action } from '@/contexts/JobsContext/jobsReducer';
import Pagination from '@/components/Pagination';
import Listing from '@/components/Listing';

const LISTINGS_PER_PAGE = 7;

function AdvancedSearch() {
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
      <SearchFilters />

      <Breadcrumbs />

      <Box bg="trPrimary.200">
        <Box maxW="1440px" mx="auto" px="2.5rem" py="40px">
          <Heading mb="40px">Sale - Shop Manager (2,884)</Heading>

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
      </Box>
    </Box>
  );
}

export default AdvancedSearch;
