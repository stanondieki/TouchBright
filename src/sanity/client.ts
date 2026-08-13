import { createClient } from "@sanity/client";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7fyv4fhj",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
};

export const sanityClient = createClient(config);

export const writeClient = createClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
