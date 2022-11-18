import { Link, useNavigate, useParams } from 'react-router-dom'

import useDeletePost from '@/hooks-rq/useDeletePost'
import usePost from '@/hooks-rq/usePost'
import useSavePost from '@/hooks-rq/useSavePost'

import Button from '@/components/Button'
import PostForm from '@/components/PostForm'
import { Loader } from '@/components/styled'

export default function AdminPostQuery () {
  const { postId } = useParams()
  const navigate = useNavigate()

  const postQuery = usePost(postId);
  const {mutate: savePost, isLoading: isSaveLoading, isError: isSaveError, isSuccess: isSaveSuccess } = useSavePost();
  const { mutate: deletePost, isLoading: isDelLoading, isError: isDelError, isSuccess: isDelSuccess } = useDeletePost();

  const onSubmit = async (values: any) => {
    await savePost(values)
    postQuery.refetch()
  }

  const onDelete = async () => {
    await deletePost(postId || "")
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
            <h3 className="text-2xl font-bol">{postQuery.data.title}</h3>
            <div>
              <Link to={`/posts/${postQuery.data.id}`} className="text-blue-500 hover:underline">View Post</Link>
            </div>

            <Button
              onClick={onDelete}
              className="ml-auto bg-red-500 shadow-red-500/50"
            >
              {isDelLoading
                ? 'Deleting...'
                : isDelError
                ? 'Error!'
                : isDelSuccess
                ? 'Deleted!'
                : 'Delete Post'}
            </Button>
          </div>

          <PostForm
            initialValues={postQuery.data}
            onSubmit={onSubmit}
            submitText={
              isSaveLoading
                ? 'Saving...'
                : isSaveError
                ? 'Error!'
                : isSaveSuccess
                ? 'Saved!'
                : 'Save Post'
            }
          />
        </div>
      )}
    </>
  )
}
