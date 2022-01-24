import { DataResponse } from '../interfaces';
import axios from './axios';

class ApiProxy {
  async getPosts(page: number) {
    return (await axios.get(`/post?page=${page}`)).data as DataResponse;
  }

  async getCommentsByPost(postId: string) {
    return (await axios.get(`/post/${postId}/comment`)).data as DataResponse;
  }
}

export default new ApiProxy();
