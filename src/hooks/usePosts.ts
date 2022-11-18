import axios from 'axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

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

export interface PostsArgs {
  current: number;
  pageSize: number;
}

export const fetchPosts = async (args: any) => {
  const {data} = await axios.get("/api/posts");
  return paginationLogic(data, args.current, args.pageSize);
}

const usePosts = (args: PostsArgs) => {
  return useQuery({
    queryKey: ["posts", args],
    queryFn: ({ queryKey: [key, reqArgs]}) => fetchPosts(reqArgs)
  })
};

export default usePosts;
