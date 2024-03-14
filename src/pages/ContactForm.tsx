import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import type { MouseEvent } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Form } from "react-router-dom";
import { CommentsPreview } from "../components/CommentsPreview";
import { VisitChip } from "../components/VisitChip";
import { VisitIndicator } from "../enums";

export function ContactForm() {
  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [visitIndicators, setVisitIndicators] = useState<VisitIndicator[]>([]);
  const commentsWatch = useWatch({
    control,
    defaultValue: "",
    name: "additionalComments",
  });

  const handleChipClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const chipText = e.currentTarget.value as VisitIndicator;
      if (chipText && !visitIndicators.includes(chipText)) {
        setVisitIndicators((prevIndicators) => [...prevIndicators, chipText]);
      }
    },
    [visitIndicators]
  );

  const handleDeleteChipClick = useCallback((indicator: VisitIndicator) => {
    if (indicator) {
      setVisitIndicators((prevIndicators) => [
        ...prevIndicators.filter((item) => item !== indicator),
      ]);
    }
  }, []);

  return (
    <Box>
      <Typography variant="h4" mb={1} ml={1.5}>
        Enter Contact
      </Typography>
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
        <Stack spacing={3} sx={{ mx: 1.5, mb: 3 }}>
          <Controller
            defaultValue=""
            control={control}
            name="contactName"
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Contact name is required.",
            //   },
            // }}
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder="Contact name"
              />
            )}
          />
          <Typography color="red">
            <ErrorMessage errors={errors} name="contactName" />
          </Typography>

          <Controller
            defaultValue=""
            control={control}
            name="streetAddress"
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Street addresss is required.",
            //   },
            // }}
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder="Street address"
              />
            )}
          />
          <Typography color="red">
            <ErrorMessage errors={errors} name="streetAddress" />
          </Typography>

          <Controller
            name="city"
            defaultValue=""
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "City is required.",
            //   },
            // }}
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder="City"
              />
            )}
          />
          <Typography color="red">
            <ErrorMessage errors={errors} name="city" />
          </Typography>

          <Controller
            name="state"
            defaultValue=""
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "State is required.",
            //   },
            // }}
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder="State"
              />
            )}
          />
          <Typography color="red">
            <ErrorMessage errors={errors} name="state" />
          </Typography>

          <Controller
            name="zip"
            defaultValue=""
            control={control}
            // rules={{
            //   required: {
            //     value: true,
            //     message: "Zip code is required.",
            //   },
            // }}
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onBlur={onBlur}
                placeholder="Zip"
                onChange={onChange}
              />
            )}
          />
          <Typography color="red">
            <ErrorMessage errors={errors} name="zip" />
          </Typography>

          <Controller
            defaultValue=""
            control={control}
            name="additionalComments"
            render={({ field: { onBlur, onChange, value, ref } }) => (
              <TextField
                ref={ref}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder="Additional Comments"
              />
            )}
          />

          <Box>
            {Object.keys(VisitIndicator).map((element, index) => {
              const indicator = element as VisitIndicator;
              return (
                <Box
                  key={`${indicator}-${index}`}
                  sx={{ display: "inline-block", mx: 1, mb: 1 }}
                >
                  <VisitChip
                    indicator={indicator}
                    onChipClick={handleChipClick}
                    disabled={visitIndicators.includes(indicator)}
                  />
                </Box>
              );
            })}
          </Box>

          <Typography variant="h6">Contact Summary</Typography>
          <CommentsPreview
            text={commentsWatch}
            formValuesFunc={setValue}
            registerFormFunc={register}
            visitIndicators={visitIndicators}
            onDeleteIndicator={handleDeleteChipClick}
          />

          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Form>
    </Box>
  );
}
