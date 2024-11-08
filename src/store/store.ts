import { create } from "zustand";
import { PostsTypes } from "../types/IPostsStore";

const useStore = create<PostsTypes>()((set) => ({
  posts: [],
  loading: false,
  error: "",
  addPost: (newPost) => set((state) => ({ posts: [...state.posts, newPost] })),
  uploadPosts: async () => {
    set({ loading: true, error: "" });
    try {
      const res = await fetch("http://localhost:4000/posts");
      const posts = await res.json();
      set((state) => ({ posts: [...state.posts, ...posts] }));
    } catch (error) {
      set({ error, loading: false });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useStore;
