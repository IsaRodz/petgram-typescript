import { useState } from 'react';
import { VStack, ChakraProvider, Spinner } from '@chakra-ui/react';
import PostCard from './components/PostCard';
import theme from './theme';
import useGetPosts from './hooks/useGetPosts';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import InfiniteScroll from 'react-infinite-scroll-component';

export function App() {
  const [page, setPage] = useState(0);
  const { posts, hasMore } = useGetPosts(page);

  const getNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <InfiniteScroll
        dataLength={posts.length}
        next={getNextPage}
        hasMore={true}
        loader={
          <VStack>
            <Spinner size="xl" thickness="4px" />
          </VStack>
        }
        scrollThreshold="100px"
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </InfiniteScroll>
    </ChakraProvider>
  );
}
