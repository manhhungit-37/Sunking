import { Box } from '@chakra-ui/react';
import AccountManagerSignUpInfo from './components/SignUpInformation';
import ListJob from './components/ListJob';
import JobApplied from './components/JobApplied';
import JobSaved from './components/JobSaved';
import CreateYourCv from './components/CreateYourCv';


function AccountManager() {


  return (
    <Box bg="trPrimary.200">
      <Box maxW="1440px" mx="auto" px="2.5rem" py="40px">
        <AccountManagerSignUpInfo />
        <CreateYourCv />
        <JobApplied />
        <JobSaved />
        <ListJob />
      </Box>
    </Box>
  );
}

export default AccountManager;