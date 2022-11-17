import { css } from "@emotion/react";
import { Loader, PostStyles } from "@/components/styled";
import usePosts from "@/hooks/usePosts";

const Posts = () => {
  const postsQuery = usePosts();
  console.log("🚀 ~ file: Post.tsx ~ line 5 ~ Post ~ posts", postsQuery)

  return (
    <div
      className="grid gap-4"
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
      `}
    >
      {postsQuery.isLoading ? (
        <span>
          <Loader /> Loading...
        </span>
      ) : (
          postsQuery.data.map((post: any) => (
            <PostStyles to={`./${post.id}`} key={post.id} className="shadow-md">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </PostStyles>
          ))
        )
      }
    </div>
  );
};

export default Posts;
