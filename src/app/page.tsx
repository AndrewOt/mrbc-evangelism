import { Box, Grid } from "@mui/material";
import { AppLinkButton } from "../components/AppButtons";

export default function Home() {
  return (
    <Box sx={{ height: "100%", textAlign: "center", mt: "50%" }}>
      <Grid container spacing={2} px={1}>
        <Grid item xs={6}>
          <AppLinkButton text="New Contact" url="new-contact" />
        </Grid>
        <Grid item xs={6}>
          <AppLinkButton text="Evangelism Resources" url="resources" />
        </Grid>
        <Grid item xs={9}>
          <AppLinkButton text="Map" url="map" />
        </Grid>
      </Grid>
    </Box>
  );
}
