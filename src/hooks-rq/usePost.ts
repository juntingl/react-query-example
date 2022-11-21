import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { sleep } from "@/utils/utilities";

const fetchPost = async (postId?: string) => {
  await sleep(2000);

  const data = await axios.get(`/api/posts/${postId}`).then(res => res.data);
  return data;
}

const usePost = (postId?: string) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPost(postId),
    enabled: !!postId,
  });
};

export default usePost;
