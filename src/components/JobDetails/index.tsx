import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

interface Props {
  title?: string;
  detailsList: string[];
  fontSize?: string | number;
  lineHeight?: string | number;
}

function JobDetails({ title, detailsList, fontSize = '24px', lineHeight = '32px' }: Props) {
  return (
    <Box>
      {title && (
        <Text mb="16px" fontWeight="700" color="trGray.500" fontSize={fontSize} lineHeight={lineHeight}>
          {title}
        </Text>
      )}
      <UnorderedList
        color="trGray.300"
        fontSize="14px"
        lineHeight="20px"
        mb="24px"
        pl="6px"
      >
        {detailsList.map((detail, i) => (
          <ListItem key={i}>{detail}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

export default JobDetails;
