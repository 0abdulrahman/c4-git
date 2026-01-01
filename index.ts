interface Post {
  id: string;
  title: string;
}

let posts: Post[] = [];

export function deletePost(postId: string): void {
  posts = posts.filter((post) => post.id !== postId);
  console.log(`Post ${postId} deleted.`);
}
