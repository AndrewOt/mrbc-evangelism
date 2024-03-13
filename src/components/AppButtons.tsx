import { Button } from "@mui/material";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

export interface AppButtonProps {
  url: string;
  text: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} role={undefined} />
));

export function AppButton({ text, url }: AppButtonProps) {
  return (
    <Button
      to={url}
      variant="contained"
      component={RouterLink}
      sx={{ width: "100%", height: "100%" }}
    >
      {text}
    </Button>
  );
}
