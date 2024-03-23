"use client";

import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" ? (
        <IconButton
          onClick={() => router.back()}
          sx={{ mr: 1, color: "white" }}
        >
          <ArrowBack />
        </IconButton>
      ) : null}
    </>
  );
}
