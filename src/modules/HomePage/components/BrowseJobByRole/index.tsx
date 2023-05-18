import { Container, Flex, Box, Grid, GridItem } from '@chakra-ui/react';
import HeadingViewAll from '@/components/HeadingViewAll';
import BlackBagIcon from '@/assets/icons/BlackBagIcon';
import BrowseJobByItem from './components/BrowseJobByRoleItem';

function BrowseJobByRole() {
  return (
    <Container p="80px 100px">
      <HeadingViewAll url="">
        <Flex columnGap="16px">
          <Box
            as="h2"
            color="trGray.500"
            fontSize="trH2"
            lineHeight="40px"
            fontWeight={700}
          >
            Browse Job By Role
          </Box>
          <BlackBagIcon fontSize="40px" />
        </Flex>
      </HeadingViewAll>
      <Grid templateColumns="repeat(3, auto)" gap="24px" mt="40px">
        <GridItem>
          <BrowseJobByItem
            text="CEO"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="Junior"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="HR"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="Fresher"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="Manager"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="Senior"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="Sale Admin"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="HR Excutor"
            desc="231.034 Jobs"
          />
        </GridItem>
        <GridItem>
          <BrowseJobByItem
            text="Intern"
            desc="231.034 Jobs"
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default BrowseJobByRole;