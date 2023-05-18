import { Container, Grid, GridItem, Box } from '@chakra-ui/react';
import BlogItem from './components/BlogItem';
import blogs from '@/constant/blogs';
import HeadingViewAll from '@/components/HeadingViewAll';

function Blogs() {
  return (
    <Container py="80px">
      <HeadingViewAll url="#">
        <Box
          as="h2"
          fontSize="32px"
          lineHeight="40px"
          fontWeight={700}
        >
          Blog & News
        </Box>
      </HeadingViewAll>
      <Grid templateColumns="repeat(3, auto)" gap="32px" mt="32px">
        {blogs.length > 0 && blogs.map((item, index) => (
          <GridItem key={index}>
            <BlogItem name={item.name} desc={item.desc} image={item.image} />
          </GridItem>
        ))}
      </Grid> 
    </Container>
  );
}

export default Blogs;