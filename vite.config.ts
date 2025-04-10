import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                // svgr options
            },
        }),
    ],
    resolve: {
        alias: {
            app: "/src/app",
            entities: "/src/entities",
            features: "/src/features",
            pages: "/src/pages",
            shared: "/src/shared",
            widgets: "/src/widgets",
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
});
