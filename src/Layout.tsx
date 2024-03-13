import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/" ? (
            <IconButton
              onClick={() => navigate(-1)}
              sx={{ mr: 1, color: "white" }}
            >
              <ArrowBack />
            </IconButton>
          ) : null}

          <Typography>MRBC Evangelism</Typography>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
