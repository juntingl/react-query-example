import { sleep } from '@/utils/utilities';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export interface PostsArgs {
  current: number;
  pageSize: number;
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

/**
 * 分页逻辑
 * @param data
 * @param current
 * @param pageSize
 * @returns
 */
const paginationLogic = (data = [], current = 1, pageSize = 10) => {
  const total = data.length;
  const pageTotal = Math.ceil(total / pageSize) || 1;
  const start = (current - 1) * pageSize;
  const end = start + pageSize;

  const pageData: any[] = [...data].slice(start, end);

  return {
    data: pageData,
    pageSize,
    current,
    pageTotal,
    total
  }
};

export const fetchPosts = async (args: any) => {
  await sleep(2000);
  const { data } = await axios.get("/api/posts");
  return paginationLogic(data, args?.current || 1, args?.pageSize || 100);
}

const usePosts = (args?: PostsArgs) => {
  return useQuery(["postId", args], () => fetchPosts(args))
};

export default usePosts;
