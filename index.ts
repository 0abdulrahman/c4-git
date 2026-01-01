export async function deletePost(postId: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to delete post");
  }
}
