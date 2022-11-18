import { useParams } from 'react-router-dom'
import usePost from '@/hooks-rq/usePost';

const PostQuery = () => {
  const { postId } = useParams();
  const postQuery = usePost(postId);

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

export default PostQuery;
