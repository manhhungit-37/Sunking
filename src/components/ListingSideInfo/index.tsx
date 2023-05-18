import { Box, Flex, Button, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { listingsData, ListingData } from '@/constant/listings';
import JobDetails from '@/components/JobDetails';
import ButtonsTrio from '@/components/ButtonsTrio';
import LocationPinIcon from '@/assets/icons/LocationPinIcon';
import Listing from '@/components/Listing';

interface Props {
  activeListing: ListingData;
}

function ListingSideInfo({ activeListing }: Props) {
  return (
    <Box>
      <Box>
        <Link href={`/jobs/${activeListing.id}`}>
          <Flex mb="16px" cursor="pointer">
            <Box mr="16px" minWidth="62px">
              <Image src={activeListing?.image} width="62" height="62" alt="" />
            </Box>

            <Box>
              <Text mb="8px" fontWeight="700">
                {activeListing?.description}
              </Text>
              <Text fontSize="14px" lineHeight="20px" color="trGray.300">
                {activeListing?.company}
              </Text>
            </Box>
          </Flex>
        </Link>

        <Text fontSize="14px" lineHeight="20px" mb="16px" color="trGray.500">
          <Text color="trGray.300" as="span">
            Date:
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

        <JobDetails
          detailsList={[
            'Taking care of old customers, consulting new products (100% of customers have used the company&apos;s products and have needs)',
            'The company&apos;s customers are already available, not looking for customers',
            'Receiving data, advising customers on the company&apos;s consumer finance program.',
            'Do not go to the market, 100% work at the office',
          ]}
        />

        <Box>
          <JobDetails
            title="Job Description"
            detailsList={['...', '...', '...']}
          />
          <JobDetails
            title="Job Requirements"
            detailsList={['...', '...', '...']}
          />
          <JobDetails title="Benefits" detailsList={['...', '...', '...']} />
        </Box>

        <Button bg="trGray.500" color="trGray.100" w="100%" mb="24px">
          Other job this Company
        </Button>
      </Box>

      <Box>
        <Text
          mb="16px"
          fontSize="16px"
          lineHeight="24px"
          fontWeight={700}
          color='trGray.500'
        >
          Similar to this job:
        </Text>
        <Flex direction="column" gap="16px">
          {listingsData.slice(0, 3).map((listing, i) => (
            <Link key={listing.id} href={`/jobs/${listing.id}`}>
              <Listing
                tagged={listingsData[i].saved}
                data={listing}
              />
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}

export default ListingSideInfo;
