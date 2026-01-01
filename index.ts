interface Post {
  id: string;
  title: string;
}

let posts: Post[] = [];

export function deletePost(postId: string): void {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/postId');

  const payload = await response.json();
  
  console.log(`Post ${postId} deleted.`);
}
