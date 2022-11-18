import { Link, useNavigate, useParams } from 'react-router-dom'

import useDeletePost from '@/hooks/useDeletePost'
import usePost from '@/hooks/usePost'
import useSavePost from '@/hooks/useSavePost'

import Button from '@/components/Button'
import PostForm from '@/components/PostForm'
import { Loader } from '@/components/styled'
import { css } from '@emotion/react'

export default function Post() {
  const { postId } = useParams()
  const navigate = useNavigate()

  const postQuery = usePost(postId || "")
  const [savePost, savePostInfo] = useSavePost()
  const [deletePost, deletePostInfo] = useDeletePost()

  const onSubmit = async (values: any) => {
    await savePost(values)
    postQuery.refetch()
  }

  const onDelete = async () => {
    await deletePost(postId)
    navigate('/admin')
  }

  return (
    <>
      {postQuery.isLoading ? (
        <span>
          <Loader /> Loading...
        </span>
      ) : (
        <div>
          <div className="flex items-center w-full gap-4 mb-4">
            <h3 className="text-2xl font-bold">{postQuery.data.title}</h3>

            <div className="">
              <Link to={`/posts/${postQuery.data.id}`} className="text-blue-500 hover:underline">View Post</Link>
            </div>

            <Button
              onClick={onDelete}
              className="ml-auto bg-red-500 shadow-red-500/50"
            >
              {deletePostInfo.isLoading
                ? 'Deleting...'
                : deletePostInfo.isError
                ? 'Error!'
                : deletePostInfo.isSuccess
                ? 'Deleted!'
                : 'Delete Post'}
            </Button>
          </div>

          <PostForm
            initialValues={postQuery.data}
            onSubmit={onSubmit}
            submitText={
              savePostInfo.isLoading
                ? 'Saving...'
                : savePostInfo.isError
                ? 'Error!'
                : savePostInfo.isSuccess
                ? 'Saved!'
                : 'Save Post'
            }
          />
        </div>
      )}
    </>
  )
}
