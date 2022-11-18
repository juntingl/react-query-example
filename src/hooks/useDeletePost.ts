import axios from 'axios'
import { useCallback, useReducer } from 'react'

export default function useDeletePost() {
  const [state, setState] = useReducer((_: any, action: any) => action, {
    isIdle: true,
  })

  const mutate = useCallback(async (postId: any) => {
    setState({ isLoading: true })
    try {
      await axios.delete(`/api/posts/${postId}`).then((res) => res.data)
      setState({ isSuccess: true })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [])

  return [mutate, state]
}
