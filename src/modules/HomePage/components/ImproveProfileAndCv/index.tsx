import { Container, Grid, GridItem, Box, Flex, Button } from '@chakra-ui/react';

import HeadingViewAll from '@/components/HeadingViewAll';
import PotentialIcon from '@/assets/icons/PotentialIcon';
import Potential2Icon from '@/assets/icons/Potential2Icon';
import Potential3Icon from '@/assets/icons/Potential3Icon';
import Potential4Icon from '@/assets/icons/Potential4Icon';
import PotentialActiveIcon from '@/assets/icons/PotentialActiveIcon';
import Potential2ActiveIcon from '@/assets/icons/Potential2ActiveIcon';
import Potential3ActiveIcon from '@/assets/icons/Potential3ActiveIcon';
import Potential4ActiveIcon from '@/assets/icons/Potential4ActiveIcon';
import ImproveProfileAndCvItem from './components/ImproveProfileAndCvItem';

function ImproveProfileAndCv() {
  return (
    <Container p="80px 100px">
      <HeadingViewAll url="#">
        <Box
          as="h2"
          fontSize="32px"
          lineHeight="40px"
          fontWeight={700}
        >
          Improve your Profile/ CV creation
        </Box>
      </HeadingViewAll>
      <Grid templateColumns="repeat(2, auto)" gap="32px" alignItems="center" mt="32px">
        <GridItem>
          <ImproveProfileAndCvItem
            icon={PotentialIcon}
            iconHover={PotentialActiveIcon}
            name="Explore your own potential."
            description="Exploring your own potential is a crucial part of personal growth and development. "
          />
        </GridItem>
        <GridItem>
          <ImproveProfileAndCvItem
            icon={Potential2Icon}
            iconHover={Potential2ActiveIcon}
            name="Explore your own potential."
            description="Exploring your own potential is a crucial part of personal growth and development. "
          />
        </GridItem>
        <GridItem>
          <ImproveProfileAndCvItem
            icon={Potential3Icon}
            iconHover={Potential3ActiveIcon}
            name="Explore your own potential."
            description="Exploring your own potential is a crucial part of personal growth and development. "
          />
        </GridItem>
        <GridItem>
          <ImproveProfileAndCvItem
            icon={Potential4Icon}
            iconHover={Potential4ActiveIcon}
            name="Explore your own potential."
            description="Exploring your own potential is a crucial part of personal growth and development. "
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default ImproveProfileAndCv;