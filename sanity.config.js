import schemas from "./sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
    projectId: "xy4lqda8",
    dataset: "production",
    title: "lasioweb",
    apiVersion: "2023-9-18",
    basePath: "/admin",
    plugins: [
        deskTool(), visionTool()
    ],
    schema: {types: schemas}
})

export default config;