import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Box,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../modules/user/redux/user-slice";
import "../../../src/index.css"
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUserById());
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Container sx={{ margin: "auto"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
          </Typography>
          <nav>
          <ul>
          <li><a href="#">Brain</a></li>
          <li><a href="#">Mentors</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">App</a></li>
        </ul>
        </nav>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {state.user && (
              <Typography
                onClick={() => navigate("/create")}
                sx={{ color: "#fff", marginRight: "16px", cursor: "pointer" }}
                style={{ fontWeight: "bold" }}
              >
              </Typography>
             
            )}
            <nav>
              <ul>
              <li><a href="/create">Submit</a></li>
              </ul>
            </nav>
            <Box
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                fontSize: "1.2rem",
                p: 0.8,
              }}
              style={{ borderRadius: "5px" }}
            >
              {state.user && (
                <Typography variant="h6" sx={{ marginRight: "8px" }}>
                  {state.user.name} /
                </Typography>
              )}
              {state.user ? (
                <Link
                  href="/"
                  sx={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              ) : (
                // <Link href="/join">Join</Link>
                <ul>
              <li class="join"><a href="/join">Join</a></li>
              </ul>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
