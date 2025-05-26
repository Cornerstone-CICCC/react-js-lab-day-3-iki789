import React, { use } from "react";
import { useNavigate, useParams } from "react-router";
import { BlogContext } from "../context/BlogContext";
import type { Post } from "../context/BlogContext";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { state } = React.useContext(BlogContext);
  const { id } = useParams<{ id: string }>();
  const post: Post | undefined = state.posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="text-center">
          <h2 className="text-3xl font-black mb-5">No blog post found.</h2>
          <button onClick={() => navigate("/")}>Go Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">
        {post.content || "No content available for this post."}
      </p>
      <p className="text-sm text-gray-400">
        Author: {post.author} <span className="mx-1">•</span> {post.date}
      </p>
    </div>
  );
};

export default BlogDetails;
