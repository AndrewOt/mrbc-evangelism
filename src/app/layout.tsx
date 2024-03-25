import { AppBar, Typography, Box, Toolbar } from "@mui/material";
import { Metadata } from "next";
import BackButton from "../components/BackButton";
import { ClerkProvider } from "@clerk/nextjs";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "MRBC Evangelism",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
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
    </ClerkProvider>
  );
}
