import { useState } from "react";
import useStore from "../../store/store";

const AddPost = () => {
  const { addPost } = useStore();

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleAdd = () => {
    if (post.title !== "" && post.content !== "") {
      addPost({ id: 1, ...post });
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={post.title}
        onChange={(e) => {
          setPost({ ...post, title: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Content"
        value={post.content}
        onChange={(e) => {
          setPost({ ...post, content: e.target.value });
        }}
      />
      <button onClick={handleAdd}>Add post</button>
    </>
  );
};

export default AddPost;
