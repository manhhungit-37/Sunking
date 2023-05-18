import { Box } from '@chakra-ui/react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface IProps {
  children: React.ReactNode;
}

function JobseekLayout({ children }: IProps) {
  return (
    <Box mx="auto">
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default JobseekLayout;