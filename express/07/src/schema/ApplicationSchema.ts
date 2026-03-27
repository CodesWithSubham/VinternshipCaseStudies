import { z } from "zod";

export const ApplicationSchema = z.object(
  {
    name: z.string().nonempty({ error: "Name is required" }),
    email: z.email({ error: "Valid email is required" }),
    birthdate: z.string().refine(
      (date) => {
        const parsedDate = Date.parse(date);
        return !isNaN(parsedDate);
      },
      { error: "Birthdate must be a valid date (YYYY-MM-DD)" },
    ),
    grades: z.array(z.number()).min(1, { error: "At least one grade is required" }),
    essay: z.string().min(100, { error: "Essay must be at least 100 characters" }),
    recommendationLetter: z.url({ error: "A valid recommendation letter link is required" }),
    portfolioLink: z.url({ error: "A valid portfolio link is required" }),
  },
  { error: "Invalid application data" },
);
