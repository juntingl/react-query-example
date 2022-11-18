import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

export default function useDeletePost() {
  return useMutation((postId: string) => axios.delete(`/api/posts/${postId}`).then((res) => res.data))
}
