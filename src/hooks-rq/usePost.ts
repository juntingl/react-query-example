import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPost = (postId?: string) =>
  axios.get(`/api/posts/${postId}`).then((res) => {
    return res.data;
  });

const usePost = (postId?: string) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPost(postId),
    enabled: !!postId,
  });
};

export default usePost;
