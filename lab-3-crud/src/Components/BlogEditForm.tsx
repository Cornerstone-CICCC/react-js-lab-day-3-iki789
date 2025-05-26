import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { BlogContext } from "../context/BlogContext";

const BlogEditForm = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
  });
  const navigate = useNavigate();
  const { state, dispatch } = useContext(BlogContext);
  const { id } = useParams();
  const post = state.posts.find((p) => p.id === id);
  const formType = id ? "Edit" : "Create";

  useEffect(() => {
    if (post) {
      setForm({
        title: post.title,
        content: post.content,
        author: post.author,
        date: post.date,
      });
    }
  }, [post]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const updatedPost = {
      id: id || "",
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
      date: formData.get("date") as string,
    };
    if (!id) {
      updatedPost.id = crypto.randomUUID();
      dispatch({ type: "addPost", payload: updatedPost });
    } else {
      dispatch({ type: "updatePost", payload: updatedPost });
    }
    navigate("/");
  };

  return (
    <div>
      <h1>{formType} Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border p-2 w-full mb-2"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            className="border p-2 w-full mb-2"
            value={form.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            className="border p-2 w-full mb-2"
            value={form.author}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="border p-2 w-full mb-2"
            onChange={handleChange}
            required
            value={form.date}
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button type="submit">{formType} Post</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditForm;
