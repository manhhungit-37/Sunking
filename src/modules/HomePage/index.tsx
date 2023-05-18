import Slider from 'react-slick';
import Blogs from '@/components/Blogs';
import Employer from '@/components/Employer';
import Opportunity from '@/modules/HomePage/components/Opportunity';
import ImproveProfileAndCv from '@/modules/HomePage/components/ImproveProfileAndCv';
import BrowseJobByRole from '@/modules/HomePage/components/BrowseJobByRole';
import BrowseJobByLocationOrCompany from '@/modules/HomePage/components/BrowseJobByLocationOrCompany';
import BestJobForYou from '../../components/Blogs/BestJobForYou';
import HomeBanner from './components/Banner';
import { settings } from '@/constant/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@chakra-ui/react';

function HomePage() {
  return (
    <>
      <Box
        sx={{
          '& .slick-dots': {
            bottom: '80px'
          },
          '& .slick-active': {
            width: '60px',
          },
          '& .slick-active > button': {
            width: '60px',
            height: '12px',
            padding: '3px',
            backgroundColor: 'trGray.250',
            borderRadius: '20px',
            overflow: 'hidden'
          },
          '& .slick-dots li.slick-active button:before': {
            fonSize: '0px',
            width: '16px',
            height: '12px',
            color: 'transparent',
            opacity: 1,
            backgroundColor: 'trPrimary.300',
            borderRadius: '100px'
          },
          '& .slick-dots li button:before': {
            fontSize: '12px'
          },
        }}
      >
        <Slider {...settings}>
          <HomeBanner />
          <HomeBanner />
          <HomeBanner />
          <HomeBanner />
        </Slider>
      </Box>
      <BestJobForYou />
      <BrowseJobByRole />
      <BrowseJobByLocationOrCompany />
      <ImproveProfileAndCv />
      <Opportunity />
      <Employer />
      <Blogs />
    </>  
  );
}

export default HomePage;