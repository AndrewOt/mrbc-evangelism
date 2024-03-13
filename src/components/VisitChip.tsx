import { Chip, Button } from "@mui/material";
import { VisitIndicator, getValueFromVisitIndicatorKey } from "../enums";

export interface VisitChipProps {
  disabled?: boolean;
  indicator: VisitIndicator;
  onDeleteIndicator?: (indicator: VisitIndicator) => void;
  onChipClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function VisitChip({
  indicator,
  onChipClick,
  disabled = false,
  onDeleteIndicator,
}: VisitChipProps) {
  return (
    <Chip
      value={indicator}
      component={Button}
      disabled={disabled}
      clickable={!disabled}
      label={getValueFromVisitIndicatorKey(indicator)}
      sx={{ textTransform: "capitalize" }}
      onDelete={
        onDeleteIndicator ? () => onDeleteIndicator(indicator) : undefined
      }
      onClick={(e) => {
        if (onChipClick) {
          onChipClick(e);
        }
      }}
    />
  );
}
