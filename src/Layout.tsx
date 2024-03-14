import { ArrowBack } from "@mui/icons-material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <AppBar>
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
      <Box mt={8}>
        <Outlet />
      </Box>
    </>
  );
}
