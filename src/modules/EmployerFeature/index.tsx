import Slider from 'react-slick';
import Blogs from '@/components/Blogs';
import Breadcrumbs from '@/components/Breadcrumbs';
import Employer from '@/components/Employer';
import { Box } from '@chakra-ui/react';
import EmployerSlider from './components/Slider';
import { settings } from '@/constant/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function EmployerFeature() {
  return (
    <Box>
      <Breadcrumbs />
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
          <EmployerSlider />
          <EmployerSlider />
          <EmployerSlider />
          <EmployerSlider />
        </Slider>
      </Box>
      
      <Blogs />
      <Employer />
    </Box>  
  );
};

export default EmployerFeature;