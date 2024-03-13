import { Box, Typography } from "@mui/material";
import { VisitIndicator } from "../enums";
import { VisitChip } from "./VisitChip";
import type {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";
import { useEffect } from "react";

export interface CommentsPreviewProps {
  text: string;
  visitIndicators: VisitIndicator[];
  formValuesFunc: UseFormSetValue<FieldValues>;
  registerFormFunc: UseFormRegister<FieldValues>;
  onDeleteIndicator: (indicator: VisitIndicator) => void;
}

export function CommentsPreview({
  text,
  formValuesFunc,
  visitIndicators,
  registerFormFunc,
  onDeleteIndicator,
}: CommentsPreviewProps) {
  const indicatorElements = visitIndicators.map((indicator) => (
    <VisitChip
      key={indicator}
      indicator={indicator}
      onDeleteIndicator={onDeleteIndicator}
    />
  ));

  useEffect(() => {
    formValuesFunc("indicators", visitIndicators.join(","));
  }, [formValuesFunc, visitIndicators]);

  return (
    <Box>
      <input {...registerFormFunc("indicators")} type="hidden" />
      <Typography>{indicatorElements}</Typography>
      <Box>
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
}
