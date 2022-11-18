import { sleep } from "@/utils/utilities";
import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";

const fetchPost = async (postId: string) => {
  await sleep(2000);

  const data = await axios.get(`/api/posts/${postId}`).then(res => res.data);
  return data;
}

export default function usePost(postId: string) {
  const [state, setState] = useReducer((_: any, action: any) => action, {
    isLoading: true,
  });

  const fetch = useCallback(async () => {
    setState({ isLoading: true })
    try {
      const data = await fetchPost(postId);
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error})
    }
  }, [postId])

  useEffect(() => {
    fetch();
  }, [fetch])

  return {
    ...state,
    refetch: fetch
  }
}
