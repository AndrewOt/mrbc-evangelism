import { Box, Grid } from "@mui/material";
import { AppButton } from "../components/AppButtons";

export function Home() {
  return (
    <Box sx={{ height: "100%", textAlign: "center", mt: "50%" }}>
      <Grid container spacing={2} px={1}>
        <Grid item xs={6}>
          <AppButton text="New Contact" url="new-contact" />
        </Grid>
        <Grid item xs={6}>
          <AppButton text="Evangelism Resources" url="evangelism-resources" />
        </Grid>
        <Grid item xs={9}>
          <AppButton text="Map" url="map" />
        </Grid>
      </Grid>
    </Box>
  );
}
