import { Box } from '@chakra-ui/react';
import SourceCandidateSearch from './components/SourceCandidateSearch';
import SourceCandidateTable from './components/SourceCandidateTable';

function SourceCandidate() {
  return (
    <Box>
      <SourceCandidateSearch />
      <SourceCandidateTable />
    </Box>
  );
}

export default SourceCandidate;