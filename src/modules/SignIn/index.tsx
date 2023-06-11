import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';
import Breadcrumbs from '@/components/Breadcrumbs';
import SignUpPng from '@/assets/png/sign-up.png';
import SignInFormWrapper from './components/SignInFormWrapper';

function SignUp() {
  const methods = useForm();

  return (
    <Box>
      <Breadcrumbs />
      <Box bg="trPrimary.200">
        <Flex gap="40px" maxW="1440px" m="0 auto" pl="40px">
          <Box bg="trWhite" borderRadius="8px" p="24px" my="40px" flexGrow={1}>
            <Flex fontSize="32px" lineHeight="40px" columnGap="16px" align="center">
              <Text as="h2" fontSize="32px" fontWeight={700} >Sign In</Text>
            </Flex>
            <Box columnGap="24px" borderBottom="1px solid" borderColor="trGray.200" p="8px 0 24px">
              <Text fontWeight={500}>Welcome back to our website. Please enter your username and password to access your account. </Text>
            </Box>
            <Divider bg="trGray.200" mb="24px" />
            <FormProvider {...methods}>
              <form>
                <SignInFormWrapper />
              </form>
            </FormProvider>
          </Box>
          <Box pos="relative" w="660px" maxW="46%">
            <Image src={SignUpPng} alt="Sign Up Png" fill sizes="660px" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUp;