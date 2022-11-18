import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export default function useCreatePost() {
  return useMutation((post) => axios.post('/api/posts', post).then((res) => res.data))
}
