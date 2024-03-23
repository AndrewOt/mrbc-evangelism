import { AppBar, Typography, Box, Toolbar } from "@mui/material";
import { Metadata } from "next";
import BackButton from "../components/BackButton";

export const metadata: Metadata = {
  title: "MRBC Evangelism",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppBar>
          <Toolbar>
            <BackButton />
            <Typography>MRBC Evangelism</Typography>
          </Toolbar>
        </AppBar>
        <Box mt={8}>{children}</Box>
      </body>
    </html>
  );
}
