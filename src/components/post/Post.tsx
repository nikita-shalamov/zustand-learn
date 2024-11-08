import { memo } from "react";
import { IPost } from "../../types/IPost";

const Post = memo(({ id, title, content }: IPost) => {
  return <div>{`title: ${title}, content: ${content}`}</div>;
});

export default Post;
