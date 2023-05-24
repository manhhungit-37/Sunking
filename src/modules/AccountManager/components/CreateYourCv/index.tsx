import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CreateCvPng from '@/assets/png/create-cv.png';
import UploadCv from '@/assets/png/upload-cv.png';
import PlusIcon from '@/assets/icons/PlusIcon';
import CloudIcon from '@/assets/icons/CloudIcon';

function CreateYourCv() {
  return (
    <Box
      bg="trWhite"
      borderRadius="8px"
      p="24px"
    >
      <Text
        fontSize="32px"
        lineHeight="40px"
        fontWeight={700}
        color="trGray.500"
      >
        Create Your CV
      </Text>
      <Divider borderColor="trGray.200" my="24px" />
      <Flex columnGap="24px">
        <Flex
          basis="50%"
          columnGap="16px"
          bg="linear-gradient(97.87deg, #EAEFF8 0%, #E1F5F5 102.05%)"
          p="32px"
          borderRadius="12px"
        >
          <Box>
            <Box>
              <Text
                fontSize="24px"
                lineHeight="32px"
                fontWeight={700}
                color="trGray.500"
              >
                Create An Impressive Online CV
              </Text>
              <Text color="trGray.300" fontSize="16px" lineHeight="24px" fontWeight={500} my="16px">
                There are currently 50+ professional and unique CV templates suitable for all industries
              </Text>
              <Button w="100%" columnGap="8px">
                <PlusIcon fontSize="24px" />
                Make CV Now
              </Button>
            </Box>
          </Box>
          <Image src={CreateCvPng} alt="create cv image" width={280} height={240} />
        </Flex>
        <Flex
          basis="50%"
          columnGap="16px"
          bg="linear-gradient(97.87deg, #EAEFF8 0%, #E1F5F5 102.05%)"
          p="32px"
          borderRadius="12px"
        >
          <Box>
            <Box>
              <Text
                fontSize="24px"
                lineHeight="32px"
                fontWeight={700}
                color="trGray.500"
              >
                Use Your CV To Find A Job
              </Text>
              <Text color="trGray.300" fontSize="16px" lineHeight="24px" fontWeight={500} my="16px">
                Simple way to start looking for jobs at JobSeeker, Employers will see the CV you have uploaded
              </Text>
              <Button w="100%" columnGap="8px">
                <CloudIcon fontSize="24px" />
                  Upload CV
              </Button>
            </Box>
          </Box>
          <Image src={UploadCv} alt="create cv image" width={280} height={240} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default CreateYourCv;