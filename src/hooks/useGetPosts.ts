import { useState, useEffect } from 'react';
import { Post } from '../interfaces';
import api from '../providers/api';

export default function useGetPosts(page: number) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await api.getPosts(page);
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return { posts, loading };
}
