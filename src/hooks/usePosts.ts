import { sleep } from '@/utils/utilities';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useReducer } from 'react';

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
  await sleep(2000);
  const { data } = await axios.get("/api/posts");
  return paginationLogic(data, args?.current || 1, args?.pageSize || 100);
}

const usePosts = (args?: PostsArgs) => {
  const [state, setState] = useReducer((_: any, action: any) => action, {
    isLoading: true,
  });

  const fetch = async () => {
    setState({ isLoading: true })
    try {
      const data = await axios.get("/api/posts").then(res => res.data);
      setState({ isSuccess: false, data })
    } catch(error) {
      setState({ isError: true, error })
    }
  };

  // 保证只执行一次，依赖为空
  useEffect(() => {
    fetch()
  }, [])

  return {
    ...state,
    refetch: fetch
  }
};

export default usePosts;
