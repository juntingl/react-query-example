import type { Post } from './usePosts'

import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export default function useSavePost() {
  return useMutation((post: Post) => axios.patch(`/api/posts/${post.id}`, post).then((res) => res.data))
}
