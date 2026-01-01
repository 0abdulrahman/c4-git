export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Fail to fetch posts");
  }

  const payload = await response.json();

  const postIds = payload.map((post) => post.id);

  return postIds;
};
