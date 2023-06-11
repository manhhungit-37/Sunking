import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import GoogleIcon from '@/assets/icons/GoogleIcon';
import SignInForm from '@/components/SignInForm';

function SignInFormWrapper() {
  return (
    <Box>
      <Button variant="white" columnGap="8px" textTransform="uppercase" w="100%" h="56px">
        <FacebookIcon fontSize="24px" fill="trPrimary.50" />
        SIGN UP WITH FACEBOOK
      </Button>
      <Button variant="grey" columnGap="8px" textTransform="uppercase" w="100%" h="56px" mt="16px">
        <GoogleIcon fontSize="24px" fill="trGray.100" />
        SIGN UP WITH FACEBOOK
      </Button>
      <Flex align="center" my="24px" columnGap="24px">
        <Divider borderColor="trGray.200" />
        <Text
          fontSize="16px"
          lineHeight="24px"
          fontWeight={500}
          color="trGray.300"
        >
          Or
        </Text>
        <Divider borderColor="trGray.200" />
      </Flex>
      <SignInForm />
    </Box>
  );
}

export default SignInFormWrapper;