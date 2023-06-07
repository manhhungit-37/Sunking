import PlanTickIcon from '@/assets/icons/PlanTickIcon';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

interface IProps {
  image: StaticImageData;
  name: string;
  price: string;
}

function PlanItem({ image, name, price }: IProps) {
  return (     
    <Box
      role="group"
    >
      <Box
        bg="linear-gradient(0deg, rgba(36, 109, 219, 0.04), rgba(36, 109, 219, 0.04)), #FFFFFF"
        p="24px"
        borderRadius="12px"
        cursor="pointer"
        _groupHover={{
          backgroundImage: 'url("/png/plan-card.png")',
          backgroundSize: 'cover',
          paddingTop: '36px',
          paddingBottom: '36px',
        }}
      >
        <Flex direction="column" align="center">
          <Image src={image} alt="Silver" width={62} height={62} />
          <Text
            fontSize="14px"
            lineHeight="20px"
            fontWeight={700}
            color="trGreen.50"
            mt="24px"
            textTransform="uppercase"
            _groupHover={{
              color: 'trGreen.100'
            }}
          >
            {name}
          </Text>
        </Flex>
        <Flex justify="center" align="flex-start" mb="24px">
          <Text 
            fontSize="32px"
            lineHeight="32px"
            fontWeight={700}
            color="trGray.500"
            _groupHover={{
              color: 'trGreen.200'
            }}
          >
            $
          </Text>
          <Text 
            fontSize="56px"
            lineHeight="61px"
            fontWeight={700}
            color="trGray.500"
            _groupHover={{
              color: 'trGreen.200'
            }}
          >
            {price}
          </Text>
        </Flex>
        <Button
          variant="primary"
          w="100%"
          _groupHover={{
            background: 'linear-gradient(0deg, #F7F9FA, #F7F9FA), #0B1111',
            boxShadow: '0px 8px 16px rgba(8, 55, 90, 0.25)',
            color: 'trBlue.200'
          }}  
        >
          TRY FOR FREE
        </Button>
        <Box mt="24px">
          <Flex align="center" columnGap="16px">
            <PlanTickIcon fontSize="17px" />
            <Text
              fontSize="16px"
              lineHeight="24px"
              fontWeight={500}
              color="trGray.500"
              _groupHover={{
                color: 'trGray.100'
              }}  
            >
              Create your CV and profile directly on your phone.
            </Text>
          </Flex>
          <Flex align="center" columnGap="16px" mt="8px">
            <PlanTickIcon fontSize="17px" />
            <Text
              fontSize="16px"
              lineHeight="24px"
              fontWeight={500}
              color="trGray.500"
              _groupHover={{
                color: 'trGray.100'
              }}  
            >
              Search and apply for jobs quickly and easily, anytime, anywhere.
            </Text>
          </Flex>
          <Flex align="center" columnGap="16px" mt="8px">
            <PlanTickIcon fontSize="17px" />
            <Text
              fontSize="16px"
              lineHeight="24px"
              fontWeight={500}
              color="trGray.500"
              _groupHover={{
                color: 'trGray.100'
              }}  
            >
              Contact recruiters through TopCV Connect.
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default PlanItem;