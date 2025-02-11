import { createClient } from "next-sanity";

// Import environment variables
import { apiVersion, dataset, projectId } from "../env";

// Ensure required variables are set
if (!projectId || !dataset || !apiVersion) {
  throw new Error("Missing Sanity environment variables.");
}

export const client = createClient({
  projectId: projectId || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  
  dataset: dataset || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: apiVersion || "2023-01-01",
  useCdn: process.env.NODE_ENV === "production",  // Use CDN only in production for faster response
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,  // Secure your API calls
});
