import { Loader, PostStyles } from "@/components/styled";
import usePosts, { PostsArgs } from "@/hooks/usePosts";
import { cx } from "@emotion/css";
import { css } from "@emotion/react";

const initialState: PostsArgs = {
  current: 1,
  pageSize: 12
}

const Posts = () => {
  const { data: posts, isLoading, isError, error, refetch } = usePosts(initialState);

  const handleChangePage = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    console.log(e.target.innerText);
  }

  return (
    <section>
      {/* Posts */}
      <div
        className="grid grid-cols-3 gap-4 auto-rows-fr"
      // css={css`
      //   display: grid;
      //   grid-template-columns: repeat(3, 1fr);
      //   gap: 1rem;
      // `}
      >
        {
          isLoading ? (
            <div className="flex items-center">
              <Loader /> <span className="ml-2">Loading...</span>
            </div>
          ) : isError ? (
              error.message
          ) : (
            posts?.data.map((post: any) => (
              <PostStyles to={`/posts/${post.id}`} key={post.id} className="rounded-md shadow-md max-h-40">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="inline-block overflow-hidden m-ellipsis">{post.body}</p>
              </PostStyles>
            ))
          )
        }
      </div>
      {/* Pagination */}
      <div className="flex justify-end w-full gap-2 mt-4" onClickCapture={handleChangePage}>
        {
          [...new Array(posts?.pageTotal).keys()].map(item => {
            return (
              <button
                className={
                  cx(
                    "w-8 h-8 leading-8 text-center border border-solid shadow-md hover:border-sky-500 hover:text-sky-500",
                    posts?.current === item + 1 ? "border-sky-500 text-sky-500" : ""
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
