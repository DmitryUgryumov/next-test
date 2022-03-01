import MainLayout from "../../../components/MainLayout";
import { useRouter } from "next/router";

const Post = ({ post, id }) => {
  const router = useRouter();
  console.log(router);

  return (
    <MainLayout title={id}>
      <h1>{id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </MainLayout>
  );
};

Post.getInitialProps = async (ctx) => {
  const { postId: id } = ctx.query;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  // console.log(123);

  return {
    post,
    id,
  };
};

export default Post;
