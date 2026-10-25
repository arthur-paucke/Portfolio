// @ts-check
import tsParser from "@typescript-eslint/parser"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
    files: ["**/*.vue"],
    languageOptions: {
        parserOptions: {
            parser: tsParser,
        },
    },
}, {
    files: ["**/*.{js,ts,mts,cts}"],
    languageOptions: {
        parser: tsParser,
    },
}, {
    rules: {
        "@stylistic/indent": ["error", 4],
        "no-unused-vars": "off",
        "vue/html-indent": ["error", 4],
        "vue/script-indent": ["error", 4],

        "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
        "vue/html-quotes": ["error", "double"],

        "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "@stylistic/type-generic-spacing": "off",
        "vue/brace-style": ["error", "1tbs", { allowSingleLine: true }],

        "vue/block-order": ["error", {
            order: ["script", "template", "style"],
        }],

        "nuxt/nuxt-config-keys-order": "off",
    },
})
