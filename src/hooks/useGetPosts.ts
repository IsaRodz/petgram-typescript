import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { DataResponse, Post } from '../interfaces';
import axios from '../providers/axios';

interface Response extends AxiosResponse {
  data: DataResponse;
}

export default function useGetPosts(page: number) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const getData = async () => {
    if (!hasMore) {
      return;
    }
    try {
      // TODO: create a API proxy class or object with its methods
      const { data }: Response = await axios.get(`/post?page=${page}`);
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
