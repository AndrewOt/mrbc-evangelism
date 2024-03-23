"use client";

import { Button } from "@mui/material";
import { forwardRef } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";

export interface AppButtonProps {
  url: string;
  text: string;
}

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} role={undefined} />
));

export function AppLinkButton({ text, url }: AppButtonProps) {
  return (
    <Button
      href={url}
      variant="contained"
      component={RouterLink}
      sx={{ width: "100%", height: "100%" }}
    >
      {text}
    </Button>
  );
}
