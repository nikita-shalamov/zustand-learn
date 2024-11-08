import AddPost from "./components/addPost/AddPost";
import Posts from "./components/posts/Posts";
import useStore from "./store/store";

const App = () => {
  const { posts, loading, uploadPosts } = useStore();

  return (
    <div>
      <button onClick={uploadPosts}>Get Posts</button>
      <h2>Posts list:</h2>
      <Posts posts={posts} loading={loading} />
      <AddPost />
    </div>
  );
};

export default App;
