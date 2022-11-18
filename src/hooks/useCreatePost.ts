import axios from 'axios'
import { useCallback, useReducer } from 'react'

export default function useCreatePost() {
  const [state, setState] = useReducer((_: any, action: any) => action, {
    isIdle: true,
  })

  const mutate = useCallback(async (values: any) => {
    setState({ isLoading: true })
    try {
      const data = axios.post('/api/posts', values).then((res) => res.data)
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [])

  return [mutate, state]
}
