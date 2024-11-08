import { IPost } from "./IPost";

export interface PostsTypes {
  posts: IPost[];
  addPost: (by: IPost) => void;
  uploadPosts: () => void;
  loading: boolean;
  error: string | unknown;
}
