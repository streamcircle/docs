import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    site: "https://docs.tween.ly",
    integrations: [
        starlight({
            title: "Tweenly",
            logo: {
                light: "./src/assets/logo_tweenly_light.svg",
                dark: "./src/assets/logo_tweenly_dark.svg",
                alt: "Tweenly",
                replacesTitle: true,
            },
            social: {
                linkedin: "https://www.linkedin.com/company/tween-ly/",
                youtube: "https://www.youtube.com/@Tweenly",
            },
            // Biel AI chatbot – temporarily disabled
            // head: [
            //     {
            //     tag: 'link',
            //     attrs: {
            //         rel: 'stylesheet',
            //         href: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.css',
            //     },
            //     },
            //     {
            //     tag: 'script',
            //     attrs: {
            //         type: 'module',
            //         src: 'https://cdn.jsdelivr.net/npm/biel-search/dist/biel-search/biel-search.esm.js',
            //     },
            //     },
            // ],
            // components: {
            //     Footer: './src/components/BielFooter.astro',
            // },
            sidebar: [
                {
                    label: "Getting Started",
                    items: [
                        { label: "Application Overview", link: "/user-guide/application-overview/" },
                        { label: "Installation", link: "/getting-started/installation/" },
                        { label: "Create Your First Graphic", link: "/getting-started/create-your-first-graphics/" },
                        { label: "Wizard Tutorial", link: "/getting-started/wizard-tutorial/" },
                        { label: "From Design to Broadcast", link: "/getting-started/design-to-broadcast/" },
                    ],
                },
                {
                    label: "Editor",
                    items: [
                        { label: "Overview", link: "/user-guide/editor-overview/" },
                        { label: "Objects", link: "/user-guide/objects/" },
                        { label: "Animations & Timeline", link: "/user-guide/animations-timeline/" },
                        { label: "Canvas & Navigation", link: "/user-guide/canvas/" },
                        { label: "Tickers", link: "/main-features/tickers/" },
                        { label: "Image Sequences", link: "/main-features/image-sequences/" },
                        { label: "Data Source & API Control", link: "/main-features/data-source-api-control/" },
                        { label: "Code Triggers", link: "/main-features/code-triggers/" },
                        { label: "Built-in Test App", link: "/main-features/built-in-test-app/" },
                        { label: "Graphics Files", link: "/user-guide/graphics-files/" },
                        { label: "Export Options", link: "/getting-started/export-options/" },
                        { label: "Keyboard Shortcuts", link: "/user-guide/keyboard-shortcuts/" },
                    ],
                },
                {
                    label: "Gallery & Assets",
                    items: [
                        { label: "Gallery", link: "/user-guide/gallery-overview/" },
                        { label: "Assets", link: "/user-guide/assets/" },
                        { label: "Workspaces", link: "/user-guide/workspaces-overview/" },
                    ],
                },
                // {
                //     label: "On Air",
                //     items: [
                //         { label: "Overview", link: "/on-air/overview/" },
                //         { label: "Setup", link: "/on-air/setup/" },
                //         { label: "Sessions & Multi-Output", link: "/on-air/sessions/" },
                //         { label: "Troubleshooting", link: "/on-air/troubleshooting/" },
                //     ],
                // },
                {
                    label: "Integration",
                    items: [
                        { label: "API Control", link: "/integration/api-control/" },
                        // { label: "Playout Integration Guide", link: "/integration/playout-integration/" },
                    ],
                },
                {
                    label: "Account",
                    items: [
                        { label: "Profile", link: "/user-guide/profile-overview/" },
                        { label: "Free vs Unlimited", link: "/getting-started/free-vs-unlimited/" },
                        { label: "Manage License", link: "/getting-started/manage-license/" },
                    ],
                },
                {
                    label: "Release Notes",
                    collapsed: true,
                    items: [
                        {
                            label: "Editor",
                            collapsed: true,
                            items: [
                                {
                                    label: "v2.1.9", link: "/release-notes/editor/v219",
                                    badge: { text: "current", variant: "success" }
                                },
                                { label: "v2.1.8", link: "/release-notes/editor/v218" },
                                { label: "v2.1.5", link: "/release-notes/editor/v215" },
                                { label: "v1.12.0", link: "/release-notes/editor/v1120" },
                                { label: "v1.11.0", link: "/release-notes/editor/v1110" },
                                { label: "v1.10.2", link: "/release-notes/editor/v1102" },
                                { label: "v1.10.1", link: "/release-notes/editor/v1101" },
                                { label: "v1.9.3", link: "/release-notes/editor/v193" },
                                { label: "v1.9.2", link: "/release-notes/editor/v192" },
                                { label: "v1.9.0", link: "/release-notes/editor/v190" },
                                { label: "v1.8.0", link: "/release-notes/editor/v180" },
                                { label: "v1.7.0", link: "/release-notes/editor/v170" },
                                { label: "v1.6.1", link: "/release-notes/editor/v161" },
                                { label: "v1.6.0", link: "/release-notes/editor/v160" },
                                { label: "v1.5.0", link: "/release-notes/editor/v150" },
                                { label: "v1.4.4", link: "/release-notes/editor/v144" },
                                { label: "v1.4.3", link: "/release-notes/editor/v143" },
                                { label: "v1.4.2", link: "/release-notes/editor/v142" },
                                { label: "v1.4.1", link: "/release-notes/editor/v141" },
                                { label: "v1.4.0", link: "/release-notes/editor/v140" },
                            ],
                        },
                        {
                            label: "On Air",
                            collapsed: true,
                            items: [
                                {
                                    label: "v2.0.5", link: "/release-notes/onair/v205",
                                    badge: { text: "current", variant: "success" }
                                },
                                { label: "v2.0.4", link: "/release-notes/onair/v204" },
                            ],
                        },
                    ],
                },
                {
                    label: "Appendices",
                    autogenerate: { directory: "appendices" },
                },
                {
                    label: "Support & Contact",
                    link: "/support-and-contact/",
                },
            ],
            // customCss: ["@fontsource/roboto", "./src/tailwind.css"],
            customCss: ["@fontsource/inter", "./src/tailwind.css"],
        }),
        tailwind({ applyBaseStyles: false }),
    ],
});
