import { Todo } from "../types/todo";

export async function addTodo(data: Todo) {
  await fetch(`https://jsonplaceholder.typicode.com/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
