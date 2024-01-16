import { useEffect, useState } from "react";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../redux/post-slice";
import { Button, TextField } from "@mui/material";

const PostList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "16px",
          }}
        >
          <form>
            <TextField
              variant="standard"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title..."
              sx={{ marginBottom: 2 }}
            />
            <TextField
              multiline
              rows={2}
              variant="standard"
              fullWidth
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Write your post..."
              sx={{ marginBottom: 1 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              post
            </Button>
          </form>
        </div>
      </div>
      {post.loading
        ? "Loading..."
        : post.posts?.map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
};

export default PostList;
