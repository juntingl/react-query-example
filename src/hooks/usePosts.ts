import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

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

  const pageData = [...data].slice(start, end);

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

const usePosts = (args: PostsArgs) => {
  return useQuery(
    ["posts", args],
    (args) => axios.get("/api/posts", args).then(res => {
      return paginationLogic(res.data)
    })
  )
};

export default usePosts;
