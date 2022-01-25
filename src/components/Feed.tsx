import { useEffect, useState } from 'react';
import { Stack, VStack, Spinner, Button } from '@chakra-ui/react';
import useGetPosts from '../hooks/useGetPosts';
import PostCard from './PostCard';
import FeedProvider from '../context/FeedContext';

export default function Feed() {
  const [page, setPage] = useState(0);
  const { posts, loading } = useGetPosts(page);

  const handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    if (scrollTop + window.innerHeight === offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FeedProvider>
      <Stack spacing={5} maxWidth="520" my={10} mx="auto" p={3}>
        {posts.length && posts.map((post) => <PostCard key={post.id} post={post} />)}
        {loading && (
          <VStack>
            <Spinner size="xl" thickness="4px" />
          </VStack>
        )}
      </Stack>
    </FeedProvider>
  );
}
