import { createContext, useContext, type Dispatch } from "react";

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
}

export interface BlogState {
  posts: Post[];
  count: number;
  dispatch?: React.Dispatch<BlogAction>;
}

export type BlogAction =
  | { type: "addPost"; payload: Post }
  | { type: "removePost"; payload: string }
  | { type: "updatePost"; payload: Post }
  | { type: "count" };

export const initialState: BlogState = {
  posts: [
    {
      id: crypto.randomUUID(),
      title: "First Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "John Doe",
      date: "2023-10-01",
    },
    {
      id: crypto.randomUUID(),
      title: "Second Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Jane Doe",
      date: "2023-10-01",
    },
  ],
  count: 0,
};

export const BlogContext = createContext<{
  state: BlogState;
  dispatch: Dispatch<BlogAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const BlogReducer = (state: BlogState, action: BlogAction) => {
  switch (action.type) {
    case "addPost":
      return {
        ...state,
        posts: [...state.posts, action.payload],
        count: state.count + 1,
      };
    case "removePost":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
        count: state.count - 1,
      };
    case "updatePost":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    case "count":
      return { ...state, count: state.count + 1 };
    default: {
      throw Error("Unknown action: " + action);
    }
  }
};

// Create a function that invokes the context
export const useBlogContext = () => {
  return useContext(BlogContext);
};
