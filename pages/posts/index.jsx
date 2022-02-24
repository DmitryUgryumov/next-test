import Link from "next/link";
import MainLayout from "../../components/MainLayout";
import React, { useEffect, useState } from "react";
import postes from "../../styles/posts.module.scss";

const Posts = ({ posts: serverPosts }) => {
  const [posts, setPosts] = useState(serverPosts);

  console.log(postes);
  useEffect(() => {
    if (posts === null) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <h2>Loading</h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <ul className={postes.list}>
        {posts.map((post) => (
          <li className={postes.list__li} key={post.id}>
            <span>{post.title}</span>
            <Link href={`/posts/${post.id}`}>
              <a className={postes.link}> О посте</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

// нужно чтобы рендерить полученные данные на сервере
// при первом рендере запрос выполняется на сервере (req === true),
// при последующий рендерах на фронте (req === undefined)
Posts.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return {
      posts: null,
    };
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    posts: data,
  };
};

export default Posts;
