import { Stack, Typography } from "@mui/material";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Stack spacing={1} sx={{ mb: 4 }}>
      <Typography
        variant="overline"
        sx={{ color: "secondary.main", fontWeight: 800, letterSpacing: "0.18em" }}
      >
        {eyebrow}
      </Typography>
      <Typography variant="h3">{title}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
        {description}
      </Typography>
    </Stack>
  );
}
