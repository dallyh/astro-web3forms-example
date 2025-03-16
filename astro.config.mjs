// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// The Web3Forms access key is public, see FAQ here: https://web3forms.com/
// My Access Key is publicly available. What should I do?
// No Problem, The Access Key is not a secret API Key. it can be Public and it's safe to use it in the client-side code. It works as an alias to your email address.
// On Pro plans, you can add Trusted Domains feature to further protect your form from spam / abuse.
const envVars = {
    CONTACT_FORM_ACCESS_KEY: envField.string({ context: "client", access: "public", default: "YOUR_ACCESS_KEY_HERE" }),
};

// https://astro.build/config
export default defineConfig({
    env: {
        schema: envVars,
    },
    vite: {
        plugins: [tailwindcss()],
    },
    adapter: node({
        mode: "standalone",
    }),
});
