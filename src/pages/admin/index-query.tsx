import React from 'react'
import { Link } from 'react-router-dom'

import PostForm from '@/components/PostForm';
import { Loader } from '@/components/styled';

import usePosts, { PostsArgs } from '@/hooks-rq/usePosts';
import useCreatePost from '@/hooks-rq/useCreatePost';

const initialState: PostsArgs = {
  current: 1,
  pageSize: 12
}

export default function AdminPostsQuery() {
  const { data: posts, isLoading, refetch } = usePosts();
  const { mutate: createPost, isLoading: isCreateLoading, isSuccess, isError } = useCreatePost();

  const onSubmit = async (values: any) => {
    await createPost(values)
    refetch()
  }

  return (
    <section className='flex h-full divide-x'>
      <div className="flex-1">
        {isLoading ? (
          <div className="flex items-center">
            <Loader /> <span className="ml-2">Loading...</span>
          </div>
        ) : (
          <>
            <h3>Posts</h3>
            <ul>
              {posts?.data.map((post, index) => (
                <li key={post.id}>
                  <Link to={`./${post.id}`}>{index+1}、{post.title}</Link>
                </li>
              ))}
            </ul>
            <br />
          </>
        )}
      </div>

      <div className='flex-1 p-4'>
        <h3 className="p-4 pl-0 text-xl font-bold">Create New Post</h3>
        <div>
          <PostForm
            onSubmit={onSubmit}
            clearOnSubmit={true}
            submitText={
              isCreateLoading
                ? 'Saving...'
                : isError
                ? 'Error!'
                : isSuccess
                ? 'Saved!'
                : 'Create Post'
            }
          />
        </div>
      </div>
    </section>
  )
}
