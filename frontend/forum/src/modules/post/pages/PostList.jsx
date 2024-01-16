import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost } from "../redux/post-slice";
import { Button, TextField } from "@mui/material";
import { notify } from "../../../shared/services/notify";
import { createPost, resestCreatePostStatus } from "../redux/post-slice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const PostList = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const navigate = useNavigate();
  const state = useSelector((state) => state.post);
  const user_state = useSelector((state) => state.user);

  const post = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    if (state.createPostStatus === "failed")
      notify.error("Create  Post failed");
    if (state.createPostStatus === "succeeded") {
      notify.success("Post Created");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    dispatch(resestCreatePostStatus());
  }, [state.createPostStatus, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user_state.user) {
      dispatch(
        createPost({
          text: postContent,
          title: title,
        })
      );
    } else {
      notify.error("Please Login !!!");
    }
  };
  return (
    <div>
      <ToastContainer />
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
          <form onSubmit={handleSubmit}>
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
              disabled={state.loading}
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
