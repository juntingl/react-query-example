import { css } from "@emotion/react";
import { Loader, PostStyles } from "@/components/styled";
import usePosts, { PostsArgs } from "@/hooks/usePosts";
import { cx } from "@emotion/css";

const initialState: PostsArgs = {
  current: 1,
  pageSize: 10
}

const Posts = () => {
  const postsQuery = usePosts(initialState);
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ Posts ~ postsQuery", postsQuery.data)

  return (
    <section>
      {/* Posts */}
      <div className="grid grid-cols-5 gap-4 auto-rows-fr">
        {
          postsQuery.isLoading ? (
            <span>
              <Loader /> Loading...
            </span>
          ) : (
            postsQuery.data?.data.map((post: any) => (
              <PostStyles to={`./${post.id}`} key={post.id} className="shadow-md">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p>{post.body}</p>
              </PostStyles>
            ))
          )
        }
      </div>
      {/* Pagination */}
      <div className="flex justify-end w-full gap-2 mt-4">
        {
          [...new Array(postsQuery.data?.pageTotal).keys()].map(item => {
            return (
              <button
                className={
                  cx(
                    "w-8 h-8 leading-8 text-center border border-solid shadow-md hover:border-sky-500 hover:text-sky-500",
                    postsQuery.data?.current === item + 1 ? "border-sky-500 text-sky-500" : ""
                  )
                }
                key={item}
              >
                {item + 1}
              </button>
            )
          })
        }
      </div>
    </section>
  );
};

export default Posts;
