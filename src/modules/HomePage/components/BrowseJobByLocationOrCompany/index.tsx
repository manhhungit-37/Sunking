import { Container, Grid, GridItem , Flex, Box } from '@chakra-ui/react';

import BrowseJobByLocationOrCompanyItem from './components/BrowseJobByLocationorCompanyItem';
import LocationIcon from '@/assets/icons/LocationIcon';
import CompanyIcon from '@/assets/icons/CompanyIcon';
import BrowseJobLocation1Png from '@/assets/png/browse_location_1.png';
import BrowseJobLocation2Png from '@/assets/png/browse_location_2.png';
import BrowseJobLocation3Png from '@/assets/png/browse_location_3.png';
import BrowseJobCompany1Png from '@/assets/png/browse_company_1.png';
import BrowseJobCompany2Png from '@/assets/png/browse_company_2.png';
import BrowseJobCompany3Png from '@/assets/png/browse_company_3.png';
import ViewAllBox from './components/ViewAllBox';

function BrowseJobByLocationOrCompany() {
  return (
    <Container p="40px 100px 80px">
      <Grid templateColumns="repeat(2, auto)" columnGap="60px">
        <GridItem>
          <Flex columnGap="16px">
            <Box
              as="h2"
              color="trGray.500"
              fontSize="trH2"
              lineHeight="40px"
              fontWeight={700}
              mb="40px"
            >
              Browse Job By Location
            </Box>
            <LocationIcon fontSize="40px" />
          </Flex>
          <Flex direction="column" rowGap="16px">
            <BrowseJobByLocationOrCompanyItem
              icon={BrowseJobLocation1Png}
              name="North Jobs"
              desc="Desciption"
              url="#"
            />
            <BrowseJobByLocationOrCompanyItem
              icon={BrowseJobLocation2Png}
              name="West Jobs"
              desc="Desciption"
              url="#"
            />
            <BrowseJobByLocationOrCompanyItem
              icon={BrowseJobLocation3Png}
              name="All Jobs in Da Nang"
              desc="Desciption"
              url="#"
            />
            <ViewAllBox
              name="View All Location"
              desc="Desciption ..."
              totalMoreData="More 1.540+"
            />
          </Flex>
        </GridItem>
        <GridItem>
          <Flex columnGap="16px">
            <Box
              as="h2"
              color="trGray.500"
              fontSize="trH2"
              lineHeight="40px"
              fontWeight={700}
              mb="40px"
            >
              Browse Job By Company
            </Box>
            <CompanyIcon fontSize="40px" />
          </Flex>
          <Flex direction="column" rowGap="16px">
            <BrowseJobByLocationOrCompanyItem
              icon={BrowseJobCompany1Png}
              name="Apple"
              desc="Công ty dịch vụ ..."
              url="#"
            />
            <BrowseJobByLocationOrCompanyItem
              icon={BrowseJobCompany2Png}
              name="Samsung"
              desc="Công ty dịch vụ ..."
              url="#"
            />
            <BrowseJobByLocationOrCompanyItem
              icon={BrowseJobCompany3Png}
              name="Samsung"
              desc="Công ty dịch vụ ..."
              url="#"
            />
            <ViewAllBox
              name="View All Company"
              desc="Desciption ..."
              totalMoreData="More 15+"
            />
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default BrowseJobByLocationOrCompany;