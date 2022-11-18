import usePost from '@/hooks/usePost';
import { useParams } from 'react-router-dom'

const Post = () => {
  const { postId } = useParams();
  const postQuery = usePost(postId || "");

  return (
    <>
      {postQuery.isLoading ? (
        <span>Loading...</span>
      ) : postQuery.isError ? (
        postQuery.error
      ) : (
        <div>
          <h2 className="text-lg font-bold">{postQuery.data.title}</h2>
          <p>{postQuery.data.body}</p>
        </div>
      )}
    </>
  );
};

export default Post;
