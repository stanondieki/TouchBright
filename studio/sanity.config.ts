import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { postSchema, authorSchema } from "./schemas";

export default defineConfig({
  name: "touchbright-studio",
  title: "Touchbright Blog Studio",
  projectId: "7fyv4fhj",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [postSchema, authorSchema],
  },
});
