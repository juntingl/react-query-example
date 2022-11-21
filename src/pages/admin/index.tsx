import React from 'react'
import { Link } from 'react-router-dom'

import PostForm from '@/components/PostForm';
import { Loader } from '@/components/styled';

import usePosts from '@/hooks/usePosts';
import useCreatePost from '@/hooks/useCreatePost';
import { css } from '@emotion/react';

export default function Posts() {
  const { data: posts, isLoading, isError, error, refetch } = usePosts();

  const [createPost, createPostInfo] = useCreatePost();

  const onSubmit = async (values: any) => {
    await createPost(values)
    refetch?.()
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
              {posts?.data.map((post: any, index: number) => (
                <li key={post.id}>
                  <Link to={`./${post.id}`}>{index+1}、{post.title}</Link>
                </li>
              ))}
            </ul>
            <br />
          </>
        )}
      </div>

      <div
        className='p-4'
        css={css`
          flex: 1 0 180px;
        `}
      >
        <h3 className="p-4 pl-0 text-xl font-bold">Create New Post</h3>
        <div className="w-full">
          <PostForm
            onSubmit={onSubmit}
            clearOnSubmit={true}
            submitText={
              createPostInfo.isLoading
                ? 'Saving...'
                : createPostInfo.isError
                ? 'Error!'
                : createPostInfo.isSuccess
                ? 'Saved!'
                : 'Create Post'
            }
          />
        </div>
      </div>
    </section>
  )
}
