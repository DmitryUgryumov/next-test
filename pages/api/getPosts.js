const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.ok ? response.json() : Promise.reject()
  );

export default getPosts;
