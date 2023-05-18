import { Box } from '@chakra-ui/react';
import Breadcrumbs from '@/components/Breadcrumbs';
import CompanyInformationForm from './components/CompayInformationForm';
import { FormProvider, useForm } from 'react-hook-form';
import JobInformationForm from './components/JobInformationForm';

function Posting() {
  const methods = useForm();

  return (
    <Box>
      <Breadcrumbs />
      <Box bg="trPrimary.200" >
        <Box maxW="1440px" mx="auto" p="40px">
          <FormProvider {...methods}>
            <form>
              <CompanyInformationForm />
              <JobInformationForm />
            </form>
          </FormProvider>
        </Box>
      </Box>
    </Box>
  );
}

export default Posting;