import { Box } from '@chakra-ui/react';
import AccountManagerSignUpInfo from './components/SignUpInformation';
import ListJob from './components/ListJob';


function AccountManager() {


  return (
    <Box bg="trPrimary.200">
      <Box maxW="1440px" mx="auto" px="2.5rem" py="40px">
        <AccountManagerSignUpInfo />
        <ListJob />
      </Box>
    </Box>
  );
}

export default AccountManager;