import { type PropsWithChildren } from "react";
import { useReducer } from "react";
import { BlogContext, initialState, BlogReducer } from "../context/BlogContext";

export const BlogContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(BlogReducer, initialState);
  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};
