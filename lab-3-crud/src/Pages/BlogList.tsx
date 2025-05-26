import { useContext } from "react";
import BlogItem from "../Components/BlogItem";
import { BlogContext } from "../context/BlogContext";
import { useNavigate } from "react-router";

const BlogList = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(BlogContext);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        <button onClick={() => navigate("/upsert")}>Create New Post</button>
      </div>
      {state.posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {state.posts.map((post) => (
            <BlogItem
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.date}
              onTitleClick={(id) => {
                navigate(`/blog/${id}`);
              }}
              onEdit={(id) => {
                navigate(`/upsert/${id}`, {
                  state: { post: state.posts.find((p) => p.id === id) },
                });
              }}
              onDelete={(id) => {
                if (
                  window.confirm("Are you sure you want to delete this post?")
                ) {
                  dispatch({ type: "removePost", payload: id });
                }
              }}
            />
          ))}
        </div>
      ) : (
        <div className="">
          <h1 className="text-2xl font-semibold mb-4">
            No Blog Posts Available
          </h1>
          <p className="mb-4">
            It seems like there are no blog posts yet. You can create one by
            clicking the button below.
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => navigate("/upsert")}
          >
            Create New Post
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
