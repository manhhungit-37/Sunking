import { Box, Flex, Grid, Divider } from '@chakra-ui/react';
import FooterLink from './FooterLink';

import FacebookIcon from '@/assets/icons/FacebookIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import LinkedinIcon from '@/assets/icons/LinkedinIcon';
import GoogleIcon from '@/assets/icons/GoogleIcon';
import FooterLogoIcon from '@/assets/icons/FooterLogoIcon';

function Footer() {
  return (
    <Box bg="trGray.100">
      <Box maxW="1440px" mx="auto" p="80px 100px">
        <Grid justifyContent="space-between" rowGap="16px" templateColumns="repeat(3, auto)" mb="60px">
          <FooterLink url="#">For Emplyers</FooterLink>
          <FooterLink url="#">For Jobseekers</FooterLink>
          <FooterLink url="#">Contact us</FooterLink>
          <FooterLink url="#">Contact us</FooterLink>
          <FooterLink url="#">Search Jobs</FooterLink>
          <Flex columnGap="15px" align="center">
            <YoutubeIcon fontSize="24px" />
            <FacebookIcon fontSize="24px" />
            <LinkedinIcon fontSize="24px" />
            <GoogleIcon fontSize="24px" />
          </Flex>
        </Grid>
        <Divider borderColor="trGray.200" />
        <Box pt="60px">
          <FooterLogoIcon width="120px" />
          <Box mt="24px" fontWeight="500" color="trGray.300">
            <Box>Headquarters: Super Viet Building, 23 Tran Cao Van Street, Da Kao Ward, District 1, Ho Chi Minh City.</Box>
            <Box>Branch: 12A Floor, Center Building, No. 1 Nguyen Huy Tuong Street, Thanh Xuan District, Hanoi.</Box>
            <Box>Service Labor License No.: 4938/SLDTBXH-GP issued by the Department of Labor, War Invalids and Social Affairs of Ho Chi Minh City.</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;