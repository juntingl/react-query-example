import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const usePosts = () => {
  return useQuery(
    ["posts"],
    () => axios.get("/api/posts").then(res => res.data)
  )
};

export default usePosts;
