import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "7hillswebmasters",
    short_name: "7hills",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f7fafb",
    theme_color: "#0f766e",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
