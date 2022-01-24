import { useState, useEffect } from 'react';
import { Post } from '../interfaces';
import api from '../providers/api';

export default function useGetPosts(page: number) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const getData = async () => {
    if (!hasMore) {
      return;
    }
    try {
      const data = await api.getPosts(page);
      setPosts((prev) => prev.concat(data.data));
      if (data.data.length >= data.total) {
        setHasMore(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };
  useEffect(() => {
    getData();
  }, [page]);

  return { posts, hasMore };
}
