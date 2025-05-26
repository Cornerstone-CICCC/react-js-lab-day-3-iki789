import { type Post } from "../context/BlogContext";

export interface BlogItemProps extends Post {
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onTitleClick?: (id: string) => void;
}

const BlogItem = ({
  id,
  title,
  content,
  author,
  date,
  onEdit,
  onDelete,
  onTitleClick,
}: BlogItemProps) => {
  // const {state, dispatch} = useContext(BlogContext);
  return (
    <div>
      <div className="border p-4 mb-4 md:flex md:justify-between md:items-start">
        <div>
          <h2
            className="text-2xl font-semibold mb-4"
            onClick={() => (onTitleClick ? onTitleClick(id) : null)}
          >
            {title}
          </h2>
          <p className="mb-4">{content.substring(0, 40)}...</p>
          <p className="text-sm text-gray-400">
            Author: {author} <span className="mx-1">•</span> {date}
          </p>
        </div>
        <div className="flex md:justify-between mt-4 gap-2">
          <button onClick={() => (onEdit ? onEdit(id) : null)}>Edit</button>
          <button onClick={() => (onDelete ? onDelete(id) : null)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
